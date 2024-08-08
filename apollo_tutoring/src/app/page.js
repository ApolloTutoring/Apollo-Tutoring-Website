import dynamic from 'next/dynamic.js'

const Home = dynamic(() => import('.//home.js').then((mod) => mod.Home), {
  loading: () => <p>Loading...</p>,
  ssr: false,
})


export default function Index() {
  return(
    <div>
      <Home />
    </div>
  )
}