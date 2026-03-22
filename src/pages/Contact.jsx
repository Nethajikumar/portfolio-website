import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { SiGmail, SiInstagram } from 'react-icons/si';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailPromise = emailjs.send(
        'service_wyn0f6i',
        'template_ip6xuzd',
        {
          name: formData.name,       // Matches {{name}} in your template
          title: "New Portfolio Message", // Matches {{title}} in your template
          message: formData.message, // Add {{message}} to your template!
          email: formData.email,     // Add {{email}} to your template!
          reply_to: formData.email
        },
        {
          publicKey: '0IwDF2JRMb-msj4Pc',
        }
      );

      await toast.promise(emailPromise, {
        loading: 'Sending message...',
        success: 'Message sent successfully! I will get back to you soon. 🚀',
        error: 'Failed to send message. Please try emailing me directly.',
      }, {
        style: {
          borderRadius: '10px',
          background: '#070913',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Gmail',
      icon: SiGmail,
      url: 'mailto:nethajik.mail@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/nethaji7',
      color: 'hover:text-[#0a66c2]'
    },
     {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Nethajikumar',
      color: 'hover:text-white'
    }
  ];

  return (
    <motion.div 
      className="min-h-screen bg-transparent p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-10 lg:pt-0">
          <h1 className="text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Get In Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Message Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="h-full glow-card border-none bg-background/40 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-all hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Card className="h-full glow-card border-none bg-background/40 backdrop-blur-md shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div 
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group"
                    onClick={() => {
                      navigator.clipboard.writeText('nethajik.mail@gmail.com');
                      toast.success('Email copied to clipboard!', {
                        icon: '📋',
                        style: {
                          borderRadius: '10px',
                          background: '#333',
                          color: '#fff',
                        },
                      });
                    }}
                  >
                    <div className="p-3 rounded-lg bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Email</p>
                      <span className="text-foreground group-hover:text-primary transition-colors">nethajik.mail@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-secondary/50 transition-colors">
                    <div className="p-3 rounded-lg bg-secondary/20 text-secondary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">Location</p>
                      <span className="text-foreground">Tamil Nadu, India</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="font-semibold text-foreground mb-4">Follow Me</h3>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map(({ name, icon: Icon, url, color }) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 text-muted-foreground ${color}`}
                        title={name}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond to messages within 24 hours. For urgent inquiries, 
                    feel free to reach out directly via Gmail.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <Footer />
      </div>
    </motion.div>
  );
}
