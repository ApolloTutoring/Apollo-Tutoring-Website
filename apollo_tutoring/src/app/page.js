'use client'
import dynamic from 'next/dynamic.js'
import LoadingScreen from './components/loading.js'


const Home = dynamic(() => import('.//home.js').then((mod) => mod.Home), {
  loading: () => <LoadingScreen />,
  ssr: false,
})


export default function Index() {

  return(
      <Home />
  )
}