<template>
    <div class="col-md-12">
        <div class="row mt-3">
            <div class="col-12 col-md-12 col-lg-12 p-1">
                <div class="p-4 bg-success text-white text-center" style="background-color: #8BC34A;font-size:30px;">
                    بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
                </div>
            </div>
        </div>
    
        <div class="row mt-3">
            <div class="col-12 col-md-6 col-lg-4 p-1" v-for="(s, index) in surah" :key="index">
                <router-link :to="{ name: 'detail', params: { nomor: s.nomor }}" exact-active-class="exact-active">
                    <div class="p-4 bg-success text-white" style="background-color: #8BC34A;">
                        <p class="font-weight-bold">{{ s.nomor }} {{ s.namaLatin }}</p>
                        <p class="text-right font-weight-bold" style="font-family: 'Lateef', cursive; font-size: 3rem;">{{ s.nama }}</p>
                        <p class="text-right small mt-3">{{ s.tempatTurun }} • {{ s.arti }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Welcome",
    data(){
        return{
            surah:[]
        }
    },
    mounted(){
        this.getSurah()
    },
    methods:{
        async getSurah(){
            await this.axios.get('http://127.0.0.1:8000/api/v1/get-surah').then(response=>{
                console.log(JSON.parse(response.data.data).data)
                this.surah = JSON.parse(response.data.data).data
            }).catch(error=>{
                console.log(error)
                this.surah = []
            })
        },
    }
}
</script>