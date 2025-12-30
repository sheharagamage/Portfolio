import { motion } from 'framer-motion'
import { GraduationCap, Code, Lightbulb, Users } from 'lucide-react'

const highlights = [
  { icon: Code, title: 'Full-Stack Developer', description: 'Proficient in React, Node.js, Spring Boot, and more' },
  { icon: Lightbulb, title: 'Problem Solver', description: 'Passionate about finding elegant solutions to complex problems' },
  { icon: Users, title: 'Team Player', description: 'Experienced in collaborative development and teamwork' },
  { icon: GraduationCap, title: 'Continuous Learner', description: 'Always exploring new technologies and best practices' },
]

const AboutSection = () => (
  <section id="about" className="relative overflow-hidden">
    <div className="blob-decoration w-72 h-72 bg-accent -right-36 top-20" />
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <span className="text-primary font-semibold mb-2 block">About Me</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Passionate Developer with a <span className="gradient-text">Vision</span>
        </h2>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="text-lg text-muted-foreground mb-6">
            I am a third-year Computer Science undergraduate at the <span className="text-foreground font-medium">University of Colombo School of Computing</span>, deeply passionate about software development and emerging technologies.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            My journey in tech has equipped me with expertise in full-stack development, mobile app development, backend API design, and database management. I thrive on creating impactful solutions that solve real-world problems.
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Beyond coding, I'm an active member of the IEEE Programming Team at UCSC and contribute to various tech initiatives. I believe in collaboration, continuous learning, and pushing the boundaries of what's possible with technology.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold">BSc in Computer Science</h4>
              <p className="text-muted-foreground">University of Colombo School of Computing</p>
              <p className="text-sm text-primary">2023 – Present</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <h4 className="font-semibold">G.C.E. Advanced Level</h4>
              <p className="text-muted-foreground">Mahinda Rajapaksha College, Matara</p>
              <p className="text-sm text-primary">2021</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-card p-6 rounded-xl border border-border card-hover">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
)

export default AboutSection