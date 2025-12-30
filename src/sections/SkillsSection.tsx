import { motion } from 'framer-motion'

const skillCategories = [
  { title: 'Frontend', skills: [ { name: 'React.js', level: 90 }, { name: 'TypeScript', level: 85 }, { name: 'HTML/CSS', level: 95 }, { name: 'Tailwind CSS', level: 88 } ] },
  { title: 'Backend', skills: [ { name: 'Node.js', level: 85 }, { name: 'Spring Boot', level: 80 }, { name: 'PHP', level: 75 }, { name: 'REST APIs', level: 90 } ] },
  { title: 'Mobile', skills: [ { name: 'Flutter', level: 50 }, { name: 'Dart', level: 50 }, { name: 'Firebase', level: 35 } ] },
  { title: 'Database', skills: [ { name: 'MySQL', level: 90 }, { name: 'MongoDB', level: 80 }, { name: 'SQLite', level: 40 }, { name: 'Firebase', level: 35 } ] },
]

const technologies = ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'AWS', 'Docker', 'Linux']

const SkillsSection = () => (
  <section id="skills" className="relative overflow-hidden bg-card/30">
    <div className="blob-decoration w-80 h-80 bg-primary -left-40 bottom-20" />
    <div className="section-container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <span className="text-primary font-semibold mb-2 block">My Skills</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: categoryIndex * 0.1 }} className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold mb-6 gradient-text">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1 }} className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
        <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.05 }} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:border-primary transition-colors">
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default SkillsSection