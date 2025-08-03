import React from 'react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Hero Section */}
                <section className="text-center py-32 px-4">
                    <div className="animate-fade-in">
                        <h1 className="mt-20 text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
                            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                                NETHAJI K
                            </span>
                        </h1>

                        {/* Developer Intro with animation */}
                        <motion.p
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Frontend Developer crafting beautiful and responsive user interfaces using modern web technologies.
                        </motion.p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg">
                                <Link to="/projects">
                                    View My Work <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" asChild size="lg">
                                <Link to="/contact">Get In Touch</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 px-4">
                    <Card className="text-center">
                        <CardContent className="pt-6">
                            <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                            <p className="text-muted-foreground">
                                Writing maintainable, scalable, and efficient code with best practices
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="pt-6">
                            <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-semibold mb-2">Modern Design</h3>
                            <p className="text-muted-foreground">
                                Creating beautiful, responsive interfaces that users love
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardContent className="pt-6">
                            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                            <p className="text-muted-foreground">
                                Optimized applications for the best user experience
                            </p>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </div>
    );
}
