import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '../components/ui/button'

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
    <div className="blob-decoration w-96 h-96 bg-primary top-20 -left-48 animate-float" />
    <div className="blob-decoration w-80 h-80 bg-accent top-40 right-0 animate-float" style={{ animationDelay: '2s' }} />
    <div className="absolute right-10 top-1/4 dots-pattern w-32 h-64 opacity-40" />
    <div className="section-container w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            👋 Welcome to my portfolio
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Hello, I'm <span className="gradient-text">Shehara Gamage</span>
            <br />
            <span className="text-foreground">Associate Software Engineer</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-muted-foreground mb-8 max-w-lg">
            Third-year Computer Science undergraduate passionate about full-stack development, mobile apps, and emerging technologies. Building impactful real-world solutions.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4 mb-8">
            <Button variant="hero" size="lg">
              View Portfolio
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-card">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex gap-4">
            <a href="https://github.com/sheharagamage" target="_blank" className="p-3 bg-card rounded-full hover:bg-primary/20 transition-colors" rel="noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sheharagamage/" target="_blank" className="p-3 bg-card rounded-full hover:bg-primary/20 transition-colors" rel="noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:sheharagamage2002@gmail.com" className="p-3 bg-card rounded-full hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 lg:order-2 relative">
          <div className="relative max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-30 scale-110" />
            <div className="relative z-10">
              <div className="relative">
                <img src="https://i.postimg.cc/mkjNC0rf/shehara.jpg" alt="Shehara Gamage" className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto rounded-full object-cover shadow-2xl border-4 border-primary/30" />
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="absolute -right-4 top-1/4 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <span className="text-3xl font-bold gradient-text">3+</span>
                  <p className="text-sm text-muted-foreground">
                    Years
                    <br />
                    Learning
                  </p>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }} className="absolute -left-4 bottom-1/4 bg-card p-4 rounded-xl shadow-lg border border-border">
                  <span className="text-3xl font-bold text-accent">5+</span>
                  <p className="text-sm text-muted-foreground">
                    Projects
                    <br />
                    Completed
                  </p>
                </motion.div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-primary rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-accent rounded-bl-3xl" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default HeroSection