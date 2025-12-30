import { Helmet } from 'react-helmet-async'
import Navbar from '../sections/Navbar'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ServicesSection from '../sections/ServicesSection'
import PortfolioSection from '../sections/PortfolioSection'
import AchievementsSection from '../sections/AchievementsSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'

const Index = () => (
  <>
    <Helmet>
      <title>Shehara Gamage | Intern Software Engineer Portfolio</title>
      <meta
        name="description"
        content="Shehara Gamage - Third-year Computer Science undergraduate and Intern Software Engineer specializing in full-stack development, React.js, Flutter, and emerging technologies."
      />
      <meta
        name="keywords"
        content="Shehara Gamage, Software Engineer, Full-Stack Developer, React Developer, Flutter Developer, Sri Lanka"
      />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <PortfolioSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  </>
)

export default Index