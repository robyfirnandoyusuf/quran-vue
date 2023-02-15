<template>
    <div class="col-md-12">
        <div class="flex flex-wrap mt-2 bg-success">
            <div class="col-12 p-1">
                <div class="p-4 text-white dark:text-black">
                    <p class="h1 font-weight-bold mb-2 text-center">Al-Baqarah • البقرة</p>
                    <p class="h6 text-center">Madinah • Sapi • 286 Ayat</p>
                    <p class="mt-5">
                        <audio src="https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/002.mp3"></audio>
                        <button
                            class="btn btn-outline-dark border-button-active-light hover-scale p-2 text-sm font-weight-bold">▶️
                            Audio</button>
                        <a href="/tafsir/2"><button
                                class="btn btn-light border-dark hover-scale p-2 text-sm font-weight-bold ml-1">📃Tafsir</button></a>
                    </p>
                </div>
            </div>
        </div>
        <div class="d-flex flex-wrap mt-2 bg-primary-green-light bg-success">
            <div class="w-100 p-1">
                <div class="px-3 text-sm text-white dark:text-gray-800 text-center">
                    <p>Klik pada teks arab untuk mendengarkan audio per-ayat.</p>
                </div>
            </div>
        </div>
        <div class="col-md-12 mb-2" v-for="(s, index) in dataAyat" :key="index">
            <div class="p-4 bg-light border border-success">
                <p class="mb-5 text-success">{{ nomor }}:{{ s.nomorAyat }}</p>
                <p class="text-right text-success">
                    <audio src="https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/002001.mp3"></audio>
                    <button class="teks-arab ml-auto">{{ s.teksArab }}</button>
                </p>

                <p class="text-left text-primary-hover-light text-sm font-semibold">{{ s.teksLatin }}</p>
                <div class="flex py-2 items-center">
                    <div class="flex-grow border-top border-success"></div>
                </div>
                <p class="text-left text-primary-hover-light text-sm text-justify">{{ s.teksIndonesia }}</p>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    name:"Detail",
    data(){
        return{
            dataAyat: [],
            dataSurah: [],
            nomor: null
        }
    },
    mounted(){
        this.getAyat()
    },
    methods:{
        async getAyat(){
            await this.axios.get('http://127.0.0.1:8000/api/v1/get-surah/' + this.$route.params.nomor).then(response=>{
                this.dataAyat = JSON.parse(response.data.data).data.ayat
                console.log(this.dataAyat)
                this.dataSurah = JSON.parse(response.data.data).data
                this.nomor = this.$route.params.nomor
            }).catch(error=>{
                console.log(error)
                this.dataAyat = []
                this.dataSurah = []
            })
        },
    }
}
</script>