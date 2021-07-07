import { useEffect, useState } from 'react'
import { updateState } from 'redux/currency'
import { useDispatch } from 'react-redux'
import { handlefrom } from 'redux/currency'
import axios from 'utils/axios'
import Sidebar from 'components/Sidebar'
import Loading from 'components/Loading'
import Head from 'next/head'
import Dashboard from 'components/Dashboard'
import router from 'next/router'

const Home = () => {
  const dispatch = useDispatch()
  const [loading, setloading] = useState(true)

  const fetchdata = async () => {
    try {
      const rates = (await axios.get('/rates')).data
      const symbols = (await axios.get('/symbols')).data
      dispatch(updateState({ rates, symbols }))
      dispatch(handlefrom(1))
      setloading(false)
    } catch (error) {
      router.replace('/404')
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  if (loading) return <Loading />

  return (
    <div className="home__container">
      <Head>
        <meta name="language" content="EN"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="currency converter online" />
        <meta
          name="keywords"
          content="money currency exchange rates reactjs nextjs converter"
        />
        <meta name="robots" content="index, follow" />
        <title>currency converter</title>
      </Head>
      <Dashboard />
      <Sidebar />
    </div>
  )
}

export default Home
