import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Progress } from '../components/ui/Progress';
import { Download } from 'lucide-react';

export default function Resume() {
  const [skillProgress, setSkillProgress] = useState({});

  const skills = [
    { name: 'Html', level: 90 },
    { name: 'Css', level: 85 },
    { name: 'Bootstrap', level: 75 },
    { name: 'Javascript', level: 80 },
    { name: 'React Js', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'MySql', level: 70 },
    { name: 'Git&Github', level: 70 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const progress = {};
      skills.forEach(skill => {
        progress[skill.name] = skill.level;
      });
      setSkillProgress(progress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold gradient-text mb-4">Resume</h1>
          <p className="text-lg text-muted-foreground">
            My professional journey and technical expertise
          </p>
        </div>

        {/* About Me */}
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              I’m an MSc Computer Science graduate with a solid background in frontend development and a growing interest in Java programming. I'm passionate about building clean, user-focused web applications and excited to contribute to a collaborative, fast-paced tech environment. I value continuous learning and enjoy solving real-world problems through code.

            </p>
          </CardContent>
        </Card>

        {/* Education & Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Master of Computer Science</h3>
                <p className="text-sm text-muted-foreground">SRM Institute of Science & Technology (KTR)</p>
                <p className="text-sm text-muted-foreground">CGPA - 8.69</p>
                <p className="text-sm text-muted-foreground">2022 - 2024</p>
              </div>
              <div>
                <h3 className="font-semibold">Bachelor of Computer Science</h3>
                <p className="text-sm text-muted-foreground">MGAC College (Vellore)</p>
                <p className="text-sm text-muted-foreground">CGPA - 7.49</p>
                <p className="text-sm text-muted-foreground">2019 - 2022</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academic Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Plant Disease Classification</h3>
                <p className="text-sm text-muted-foreground">
                  An academic project focused on detecting and classifying plant leaf diseases using Convolutional Neural Networks (CNN).
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Crime Report Mangement</h3>
                <p className="text-sm text-muted-foreground">
                  An academic project focused on building a secure and user-friendly web portal for crime complaint registration.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skillProgress[skill.name] || 0} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Download Resume */}
        <Card>
          <CardContent className="flex flex-col items-center py-8">
            <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
            <a
              href="https://drive.google.com/file/d/1F_GcqciyvCpDV3K5QX_YgRlrNKiSguCc/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg">
                <Download className="w-4 h-4 mr-2" />
                View/Download PDF
              </Button>
            </a>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
