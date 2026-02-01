import Hero from '../components/home/Hero'
import BrandEssence from '../components/home/BrandEssence'
import FeaturedDrop from '../components/home/FeaturedDrop'
import LoreSection from '../components/home/LoreSection'

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <BrandEssence />
      <FeaturedDrop />
      <LoreSection />
    </main>
  )
}
