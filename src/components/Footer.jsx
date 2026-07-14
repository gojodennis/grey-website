import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant flex flex-col md:flex-row justify-between items-center w-full px-margin-page py-12 mt-section-gap">
      <div className="font-label-xs text-label-xs uppercase tracking-tighter mb-6 md:mb-0 text-primary">
        DORTH STUDIO
      </div>
      
      <div className="text-on-secondary-fixed-variant font-label-xs text-label-xs text-center md:text-left mb-6 md:mb-0">
        © {new Date().getFullYear()} DORTH STUDIO. ALL RIGHTS RESERVED.
      </div>
      
      <div className="flex gap-8 items-center">
        <a href="#instagram" onClick={(e) => e.preventDefault()} className="text-on-secondary-fixed-variant font-label-xs text-label-xs uppercase hover:text-primary transition-colors">
          Instagram
        </a>
        <a href="#linkedin" onClick={(e) => e.preventDefault()} className="text-on-secondary-fixed-variant font-label-xs text-label-xs uppercase hover:text-primary transition-colors">
          LinkedIn
        </a>
        <a href="#terms" onClick={(e) => e.preventDefault()} className="text-on-secondary-fixed-variant font-label-xs text-label-xs uppercase hover:text-primary transition-colors">
          Terms
        </a>
        <div className="flex items-center gap-2 border-l border-outline-variant pl-6">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="font-label-xs text-label-xs uppercase text-primary">Live Archive</span>
        </div>
      </div>
    </footer>
  );
}
