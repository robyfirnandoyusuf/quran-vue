const Home = () => import('./components/Home.vue')
const Detail = () => import('./components/Detail.vue')
const Tafsir = () => import('./components/Tafsir.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
        name: 'detail',
        path: '/surah/:nomor',
        component: Detail
    },
    {
        name: 'tafsir',
        path: '/tafsir/:nomor',
        component: Tafsir
    }
]