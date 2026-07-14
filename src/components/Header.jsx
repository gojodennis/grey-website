import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const navItems = [
    { label: 'Overview', path: '/' },
    { label: 'Studio', path: '/studio' },
    { label: 'Team', path: '/team' },
    { label: 'Product', path: '/product' },
    { label: 'Archive / Focus', path: '/focus' },
  ];

  return (
    <>
      <header className="bg-background border-b border-outline-variant flex justify-between items-center w-full px-margin-page py-6 max-w-none fixed top-0 left-0 right-0 z-50">
        <Link to="/" className="font-label-sm text-label-sm uppercase tracking-widest text-primary hover:opacity-80 transition-opacity">
          DORTH PRESENTATION
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive
                  ? "text-primary border-b border-primary pb-1 font-label-sm text-label-sm uppercase transition-colors duration-300"
                  : "text-on-secondary-fixed-variant uppercase font-label-sm text-label-sm hover:text-primary transition-colors duration-300"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <span className="font-label-sm text-label-sm hidden sm:inline text-on-secondary-fixed-variant">
            14
          </span>
          <button
            onClick={() => setContactModalOpen(true)}
            className="bg-primary text-on-primary px-6 py-2 font-label-sm text-label-sm uppercase tracking-widest hover:bg-opacity-90 transition-all border border-primary hover:bg-transparent hover:text-primary"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-1 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background z-40 md:hidden p-8 border-b border-outline-variant flex flex-col justify-between animate-fadeIn">
          <nav className="flex flex-col gap-6 pt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                end={item.path === '/'}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary border-b-2 border-primary pb-2 font-headline-lg text-headline-lg uppercase"
                    : "text-on-secondary-fixed-variant font-headline-lg text-headline-lg uppercase hover:text-primary transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="pt-8 border-t border-outline-variant flex justify-between items-center text-label-xs font-label-xs uppercase">
            <span>DORTH STUDIO / 2024</span>
            <span>WWW.DORTH-TEMPLATE.COM</span>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactModalOpen && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-background border border-outline-variant p-8 md:p-12 max-w-lg w-full relative">
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-6 right-6 text-primary hover:opacity-60"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className="font-label-xs text-label-xs uppercase tracking-[0.2em] text-on-secondary-fixed-variant mb-2 block">
              Inquiries & Commissions
            </span>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-6">
              Connect with Dorth.
            </h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); setContactModalOpen(false); }}>
              <div>
                <label className="font-label-xs text-label-xs uppercase block mb-2 text-on-secondary-fixed-variant">Your Name</label>
                <input required type="text" className="w-full bg-surface-container-low border-b border-primary p-3 font-body-md text-sm focus:outline-none focus:bg-surface-container" placeholder="Architect / Client" />
              </div>
              <div>
                <label className="font-label-xs text-label-xs uppercase block mb-2 text-on-secondary-fixed-variant">Email Address</label>
                <input required type="email" className="w-full bg-surface-container-low border-b border-primary p-3 font-body-md text-sm focus:outline-none focus:bg-surface-container" placeholder="office@studio.com" />
              </div>
              <div>
                <label className="font-label-xs text-label-xs uppercase block mb-2 text-on-secondary-fixed-variant">Project Summary</label>
                <textarea rows="3" required className="w-full bg-surface-container-low border-b border-primary p-3 font-body-md text-sm focus:outline-none focus:bg-surface-container" placeholder="Describe scope or visualization request..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-on-primary py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-opacity-90 transition-all">
                Send Proposal
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
