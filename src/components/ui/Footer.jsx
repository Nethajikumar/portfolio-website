import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            © 2024 Your Name. All rights reserved.
          </p>
          <p className="flex items-center justify-center text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
