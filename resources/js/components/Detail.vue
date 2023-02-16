<template>
    <div class="col-md-12">
        <div class="flex flex-wrap mt-2 bg-success">
            <div class="col-12 p-1">
                <div class="p-4 text-white dark:text-black">
                    <p class="h1 font-weight-bold mb-2 text-center">{{ dataSurah.namaLatin }} • {{ dataSurah.nama }}</p>
                    <p class="h6 text-center">{{ dataSurah.tempatTurun }} • {{ dataSurah.arti }} • {{
                        dataSurah.jumlahAyat
                    }} Ayat</p>
                    <p class="mt-5">
                        <audio ref="audioElmFull" :src="audioFull"></audio>
                        <button
                            class="btn btn-outline-dark border-button-active-light hover-scale p-2 text-sm font-weight-bold toggle-sound-full paused bg-white"
                            @click="toggleSoundFull()"
                            >▶️
                            Audio</button>
                        <router-link :to="{ name: 'tafsir', params: { nomor: nomor }}" exact-active-class="exact-active">
                            <button
                                class="btn btn-light border-dark hover-scale p-2 text-sm font-weight-bold ml-1">📃Tafsir
                            </button>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-wrap mt-2 bg-primary-green-light bg-success">
            <div class="w-100 p-1">
                <div class="px-3 text-sm text-white text-center">
                    <p>
                        <select v-model="selectedOption" class="form form-control">
                            <option value="01">Abdullah Al Juhany</option>
                            <option value="02">Abdul Muhsin Al Qasim</option>
                            <option value="03">Abdurrahman as Sudais</option>
                            <option value="04">Ibrahim Al Dossari</option>
                            <option value="05">Misyari Rasyid Al-Afasi</option>
                        </select>
                    </p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-wrap mt-2 bg-primary-green-light bg-success">
            <div class="w-100 p-1">
                <div class="px-3 text-sm text-white text-center">
                    <p>Klik pada teks arab untuk mendengarkan audio per-ayat.</p>
                </div>
            </div>
        </div>
        <div class="col-md-12 mb-2" v-for="(s, index) in dataAyat" :key="index">
            <div class="p-4 bg-light border border-success">
                <p class="mb-5 text-success">{{ nomor }}:{{ s.nomorAyat }}</p>
                <p class="text-end text-success">
                    <audio :src="dataAyat[index].audio[selectedOption]" :ref="'audioElm-' + index">
                    </audio>
                    <button :class="'teks-arab ml-auto toggle-sound-' + index + ' paused'"
                        @click="toggleSoundAyat(index)">{{ s.teksArab }}</button>
                </p>

                <p class="text-end text-primary-hover-light text-sm font-semibold">{{ s.teksLatin }}</p>
                <div class="flex py-2 items-center">
                    <div class="flex-grow border-top border-success"></div>
                </div>
                <p class="text-end text-primary-hover-light text-sm text-justify">{{ s.teksIndonesia }}</p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "Detail",
    data() {
        return {
            dataAyat: [],
            dataSurah: [],
            nomor: null,
            selectedOption: '05',
            audio: '',
            audioFull: ''
        }
    },
    mounted() {
        this.getAyat()
    },
    computed: {
        showSelectedOption() {
            // alert('You selected ' + this.selectedOption);
            console.log(this.selectedOption)
        }
    },
    watch: {
        selectedOption: function () {
            this.showSelectedOption;
        }
    },
    methods: {
        async getAyat() {
            await this.axios.get(this.url + '/api/v1/get-surah/' + this.$route.params.nomor).then(response => {
                let ayat = JSON.parse(response.data.data).data.ayat
                this.dataAyat = ayat
                this.dataSurah = JSON.parse(response.data.data).data
                this.nomor = this.$route.params.nomor
                // console.log(this.dataSurah)
                this.audioFull = this.dataSurah.audioFull[this.selectedOption]
            }).catch(error => {
                console.log(error)
                this.dataAyat = []
                this.dataSurah = []
            })
        },

        toggleSoundAyat(idx) {
            let audio = this.$refs['audioElm-' + idx][0];

            if (audio.paused && document.querySelector(".toggle-sound-" + idx).classList.contains("paused")) {
                console.log("play it")
                audio.play();
                document.querySelector(".toggle-sound-" + idx).classList.remove("paused");
            } else {
                console.log("pause it")
                audio.pause();
                document.querySelector(".toggle-sound-" + idx).classList.add("paused");
            }

            audio.onended = function() {
                document.querySelector(".toggle-sound-" + idx).classList.add("paused");
            };
        },
        toggleSoundFull() {
            let audio = this.$refs.audioElmFull
            console.log(audio)

            if (audio.paused && document.querySelector(".toggle-sound-full").classList.contains("paused")) {
                audio.play();
                audio.addEventListener('ended',function(){
                    alert(1 )
                });
                document.querySelector(".toggle-sound-full").classList.remove("paused");
            } else {
                console.log("pause it")
                audio.pause();
                document.querySelector(".toggle-sound-full").classList.add("paused");
            }
        },
    }
}
</script>