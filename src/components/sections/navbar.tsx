import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

/**
 * Navbar component for Landio website clone.
 * Features:
 * - Sticky blurred background
 * - Responsive container
 * - Original typography and spacing
 * - Styled CTA button with star icon
 */
const Navbar = () => {
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] w-full flex justify-center">
      <header 
        className="w-full h-[64px] flex items-center justify-center border-b border-white/10"
        style={{
          backgroundColor: 'rgba(5, 5, 8, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <div className="container flex items-center justify-between h-full max-w-[1350px] px-10">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="block relative w-[103px] h-[39px]">
              <Image 
                src="https://framerusercontent.com/images/04vJJZ3D2ponPv6rzLBq6sf2PZU.svg" 
                alt="Landio Logo" 
                fill
                priority
                className="object-contain"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav 
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/5"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-[14px] font-medium text-[#999999] transition-colors hover:text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="https://framer.link/D4dc7gs" 
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-white transition-all hover:bg-white/5 group"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
              }}
            >
              <Star 
                size={16} 
                className="fill-white text-white transition-transform group-hover:scale-110" 
              />
              <span className="text-[14px] font-semibold leading-none">
                Get Template
              </span>
            </a>
          </div>
          
        </div>
      </header>

      {/* Responsive Overlay Gradient (Optional subtle shadow/glow below nav) */}
      <div className="absolute top-[64px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Navbar;