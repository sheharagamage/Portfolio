import { motion } from 'framer-motion'
import { Globe, Server, Database, Code, Layers } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Full-Stack Web Development', description: 'End-to-end web applications with modern frameworks, responsive design, and scalable architecture.' },
  { icon: Server, title: 'Backend API Development', description: 'Robust RESTful APIs with secure authentication, efficient data handling, and comprehensive documentation.' },
  { icon: Code, title: 'Frontend Development', description: 'Beautiful, responsive user interfaces using React.js with modern UI/UX principles and accessibility.' },
  { icon: Database, title: 'Database Design & Integration', description: 'Efficient schema design, optimization, and integration with SQL and NoSQL databases.' },
  { icon: Layers, title: 'Cloud & DevOps Basics', description: 'AWS services, CI/CD pipelines, and containerization best practices.' },
]

const ServicesSection = () => (
  <section id="services" className="relative overflow-hidden">
    <div className="blob-decoration w-96 h-96 bg-accent right-0 top-1/2" />
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <span className="text-primary font-semibold mb-2 block">What I Offer</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          My <span className="gradient-text">Services</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="group bg-card p-8 rounded-xl border border-border card-hover hover:border-primary">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default ServicesSection