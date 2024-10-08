import { HeroSection } from "./components/header/pages/home/hero-section"
import { HighLightedProjects } from "./components/header/pages/home/highlighted-projects"
import { KnownTechs } from "./components/header/pages/home/known-techs"
import { WorkExperience } from "./components/header/pages/home/work-experience"

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighLightedProjects />
      <WorkExperience />
    </>
  )
}
