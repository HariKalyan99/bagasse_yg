import BagasseBentoGrid from "./components/BagasseBentoGrid"
import BagasseContentParallax from "./components/BagasseContentParallax"
import BagasseFeaturette from "./components/BagasseFeaturette"
import BagasseForm from "./components/BagasseForm"
import BagasseHero from "./components/BagasseHero"
import BagasseHero2 from "./components/BagasseHero2"
import BagasseNav from "./components/BagasseNav"
import BagasseNewsLetter from "./components/BagasseNewsLetter"
import BagasseSpecifiacation from "./components/BagasseSpecifiacation"
import BagasseStoreNav from "./components/BagasseStoreNav"
import BagasseSubscribe from "./components/BagasseSubscribe"
import BagasseTeam from "./components/BagasseTeam"
import BagasseTestimonials from "./components/BagasseTestimonials"
import BagasseTrust from "./components/BagasseTrust"


function App() {
  return (
   <div>
    <BagasseNav />
    <BagasseHero />
    <BagasseHero2 />
    <BagasseBentoGrid />
    <BagasseContentParallax />
    <BagasseFeaturette />
    <BagasseSpecifiacation />
    <BagasseStoreNav />
    <BagasseTestimonials />
    <BagasseTeam />
    <BagasseTrust />
    <BagasseSubscribe />
    <BagasseForm />
    <BagasseNewsLetter />
   </div>
  )
}

export default App
