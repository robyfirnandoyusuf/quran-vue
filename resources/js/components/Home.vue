<template>
    <div class="col-md-12">
        <div class="row mt-3">
            <div class="col-12 col-md-12 col-lg-12 p-1">
                <div class="p-4 bg-success text-white text-center" style="background-color: #8BC34A;font-size:30px;">
                    بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ
                </div>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-body">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="🔍 Cari Surat ..." v-model="searchQuery" />
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-6 col-lg-4 p-1" v-for="(s, index) in filteredSurah" :key="index">
                <router-link :to="{ name: 'detail', params: { nomor: s.nomor } }" exact-active-class="exact-active">
                    <div class="p-4 bg-success text-white" style="background-color: #8BC34A;">
                        <p class="font-weight-bold">{{ s.nomor }} {{ s.namaLatin }}</p>
                        <p class="text-right font-weight-bold" style="font-family: 'Lateef', cursive; font-size: 3rem;">
                            {{ s.nama }}</p>
                        <p class="text-right small mt-3">{{ s.tempatTurun }} • {{ s.arti }}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            surah: [],
            searchQuery: ""
        };
    },
    mounted() {
        this.getSurah();
    },
    computed: {
        filteredSurah() {
            return this.surah.filter(data => {
                return data.namaLatin.toLowerCase().includes(this.searchQuery.toLowerCase());
            });
        }
    },
    watch: {
        searchQuery: function (newVal, oldVal) {
            this.getSurah();
        }
    },
    methods: {
        async getSurah() {
            await this.axios
                .get(this.url + "/api/v1/get-surah")
                .then(response => {
                    this.surah = JSON.parse(response.data.data).data;
                })
                .catch(error => {
                    console.log(error);
                    this.surah = [];
                });
        }
    }
}
</script>