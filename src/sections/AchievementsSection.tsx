import { motion } from 'framer-motion'
import { Trophy, Award, Users, Heart } from 'lucide-react'

const achievements = [
  { icon: Trophy, title: 'PearlHack 3.0 Ideathon', description: 'Semi-Finalist (Top 10)' },
  { icon: Award, title: 'SpiritX 2025 – Xcelerate', description: 'Stage 1 Qualifier' },
]

const certifications = [
  { title: 'AWS Educate – Cloud 101', issuer: 'Amazon Web Services', description: 'Hands-on cloud labs and fundamentals' },
  { title: 'Design Patterns in Software Development', issuer: 'LinkedIn Learning', description: 'Software architecture and design principles' },
]

const leadership = [
  { icon: Users, title: 'IEEE Programming Team', organization: 'IEEE UCSC', role: 'Member' },
  { icon: Users, title: 'Hackaholics Hackathon', organization: 'IEEE UCSC', role: 'Finance Team' },
  { icon: Heart, title: 'ICT Seminar Volunteer', organization: 'Urapola Central College', role: 'Volunteer' },
]

const AchievementsSection = () => (
  <section className="relative overflow-hidden">
    <div className="blob-decoration w-72 h-72 bg-accent right-0 bottom-20" />
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <span className="text-primary font-semibold mb-2 block">Recognition</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Achievements & <span className="gradient-text">Activities</span>
        </h2>
      </motion.div>
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-accent" />
            Competitions
          </h3>
          <div className="space-y-4">
            {achievements.map((item) => (
              <div key={item.title} className="bg-card p-5 rounded-xl border border-border card-hover">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-primary text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((item) => (
              <div key={item.title} className="bg-card p-5 rounded-xl border border-border card-hover">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.issuer}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-emerald-500" />
            Leadership & Volunteering
          </h3>
          <div className="space-y-4">
            {leadership.map((item) => (
              <div key={item.title} className="bg-card p-5 rounded-xl border border-border card-hover">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.organization}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">{item.role}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default AchievementsSection