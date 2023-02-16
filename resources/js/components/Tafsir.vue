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
                        <router-link :to="{ name: 'detail', params: { nomor: nomor }}" exact-active-class="exact-active">
                            <button
                                class="btn btn-light border-dark hover-scale p-2 text-sm font-weight-bold ml-1">📃Surah
                            </button>
                        </router-link>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="col-md-12 mb-2" v-for="(s, index) in dataTafsir" :key="index">
            <div class="p-4 bg-light border border-success">
                <p class="mb-5 text-success">{{ nomor }}:{{ s.ayat }}</p>
                <p class="text-success">
                    {{ s.teks }}
                    <!-- <audio :src="dataTafsir[index].audio[selectedOption]" :ref="'audioElm-' + index">
                    </audio>
                    <button :class="'teks-arab ml-auto toggle-sound-' + index + ' paused'"
                        @click="toggleSoundAyat(index)">{{ s.teksArab }}</button> -->
                </p>

                <p class="text-end text-primary-hover-light text-sm font-semibold"></p>
                <div class="flex py-2 items-center">
                    <div class="flex-grow border-top border-success"></div>
                </div>
                <p class="text-end text-primary-hover-light text-sm text-justify"></p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: "Detail",
    data() {
        return {
            dataTafsir: [],
            dataSurah: [],
            nomor: null,
        }
    },
    mounted() {
        this.getTafsir()
    },
    methods: {
        async getTafsir() {
            await this.axios.get(this.url + '/api/v1/get-tafsir/' + this.$route.params.nomor).then(response => {
                let tafsir = JSON.parse(response.data.data).data.tafsir
                this.dataTafsir = tafsir
                this.dataSurah = JSON.parse(response.data.data).data
                this.nomor = this.$route.params.nomor
                console.log(this.dataTafsir)
            }).catch(error => {
                console.log(error)
                this.dataTafsir = []
                this.dataSurah = []
            })
        },

    }
}
</script>