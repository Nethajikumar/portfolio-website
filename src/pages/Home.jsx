import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background p-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">


                {/* Animated Initials Badge with More Space */}
                <motion.div
                    className="mt-32 relative w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1 shadow-lg mb-6 flex items-center justify-center"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                        <span className="text-4xl sm:text-5xl font-bold text-gray-800">NK</span>
                    </div>
                </motion.div>



                {/* Hero Section */}
                <section className="text-center px-4 w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                                NETHAJI K
                            </span>
                        </h1>

                        {/* Typewriter Role Animation */}
                        <div className="flex justify-center mb-10">
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-200">
                                <span className="bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
                                    <Typewriter
                                        words={['Frontend Developer', 'UI/UX Explorer']}
                                        loop={0}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h2>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link to="/projects" className="flex items-center gap-2">
                                    View My Work <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild size="lg">
                                <Link to="/contact">Get In Touch</Link>
                            </Button>
                        </div>
                    </motion.div>
                </section>

                {/* Feature Cards */}
                 <motion.section
      className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 py-16 w-full px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      {/* Card 1 */}
      <Card className="text-center hover:shadow-xl transition-shadow duration-300 rounded-2xl">
        <CardContent className="pt-6">
          <Code className="w-12 h-12 mx-auto mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
          <p className="text-muted-foreground">
            Writing scalable and readable code following best practices.
          </p>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="text-center hover:shadow-xl transition-shadow duration-300 rounded-2xl">
        <CardContent className="pt-6">
          <Palette className="w-12 h-12 mx-auto mb-4 text-purple-500" />
          <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
          <p className="text-muted-foreground">
            Crafting user-first, responsive, and aesthetic interfaces.
          </p>
        </CardContent>
      </Card>

      {/* Card 3 */}
      <Card className="text-center hover:shadow-xl transition-shadow duration-300 rounded-2xl">
        <CardContent className="pt-6">
          <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
          <p className="text-muted-foreground">
            Delivering optimized apps for seamless experience.
          </p>
        </CardContent>
      </Card>
    </motion.section>
            </div>
        </div>
    );
}
