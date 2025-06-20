import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </Layout>
  )
} 