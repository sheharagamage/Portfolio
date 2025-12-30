import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Button } from '../components/ui/button'

const projects = [
  { title: 'Agrovia', description: 'Full-stack agriculture platform with ML integration for crop recommendations and marketplace features.', tech: ['React.js', 'Node.js', 'MySQL', 'ML'], github: 'https://github.com/SeniruR/Agrovia', githubBackend: 'https://github.com/SeniruR/Agrovia-Backend', color: 'from-primary to-primary-glow' },
  { title: 'HR Management Platform', description: 'Comprehensive HR system for employee profiles, payroll processing, and leave management.', tech: ['Spring Boot', 'React.js', 'MySQL'], github: 'https://github.com/sheharagamage/hrplatform', color: 'from-accent to-yellow-500' },
  { title: 'Grocery Delivery App', description: 'E-commerce platform with customer app and admin dashboard for order management.', tech: ['MongoDB', 'Express', 'React', 'Node'], github: 'https://github.com/sheharagamage/Grocery-market-place', color: 'from-emerald-500 to-teal-500' },
  { title: 'UniQuest', description: 'Job and internship portal connecting students with opportunities and career resources.', tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'], github: 'https://github.com/sheharagamage/UniQuest', color: 'from-blue-500 to-indigo-500' },
  { title: 'QR Chat – Messaging App', description: 'Flutter mobile app with QR-based contact sharing and real-time Firebase messaging.', tech: ['Flutter', 'Firebase', 'Dart'], github: 'https://github.com/sheharagamage/InstantApp', color: 'from-purple-500 to-pink-500' },
]

const PortfolioSection = () => (
  <section id="portfolio" className="relative overflow-hidden bg-card/30">
    <div className="blob-decoration w-80 h-80 bg-primary -left-40 top-40" />
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <span className="text-primary font-semibold mb-2 block">My Work</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Featured <span className="gradient-text">Projects</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group bg-card rounded-xl border border-border overflow-hidden card-hover">
            <div className={`h-32 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
            <div className="p-6 -mt-8 relative">
              <div className="bg-card rounded-lg p-4 border border-border shadow-lg">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-xs rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.githubBackend ? (
                    <>
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
                        <Github className="w-4 h-4" />
                        Frontend
                      </a>
                      <span className="text-muted-foreground">|</span>
                      <a href={project.githubBackend} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
                        <Github className="w-4 h-4" />
                        Backend
                      </a>
                    </>
                  ) : (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm text-primary hover:underline">
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mt-12">
        <a href="https://github.com/sheharagamage" target="_blank" rel="noreferrer">
          <Button variant="outline" size="lg">
            View All Projects
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>
      </motion.div>
    </div>
  </section>
)

export default PortfolioSection