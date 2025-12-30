import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Colombo, Sri Lanka' },
  { icon: Phone, label: 'Phone', value: '+94 77 170 1812', href: 'tel:+94771701812' },
  { icon: Mail, label: 'Email', value: 'sheharagamage2002@gmail.com', href: 'mailto:sheharagamage2002@gmail.com' },
]

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sheharagamage/' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/sheharagamage' },
]

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    emailjs.init('sCTUQS9Wf06ysrP0y')
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await emailjs.send(
        'service_jtn24q2',
        'template_zcexfde',
        {
          from_name: formData.name,
          from_email: formData.email,
          to_name: 'Shehara Gamage',
          from_message: `Subject: ${formData.subject}\n\n${formData.message}`,
        }
      )
      
      console.log('EmailJS Response:', result)
      alert('Message sent successfully! Thank you for reaching out.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Failed to send message:', error)
      alert('Failed to send message. Please try again or contact me directly via email.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-card/30">
      <div className="blob-decoration w-96 h-96 bg-primary -left-48 top-1/2" />
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's <span className="gradient-text">Connect</span>
          </h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-6 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors">
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl border border-border space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full rounded-lg border border-border bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full rounded-lg border border-border bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <input value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full rounded-lg border border-border bg-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full rounded-lg border border-border bg-transparent px-4 py-3 min-h-[140px] focus:outline-none focus:ring-2 focus:ring-primary" required />
              </div>
              <Button type="submit" variant="hero" className="w-full" size="lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection