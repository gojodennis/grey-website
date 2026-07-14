import React from 'react';
import { Link } from 'react-router-dom';

export default function TextFocusPage() {
  return (
    <main className="flex-grow pt-32 px-margin-page pb-section-gap">
      {/* Header Branding Meta */}
      <div className="flex justify-between items-baseline mb-12">
        <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
          DORTH PRESENTATION — EDITORIAL FOCUS
        </div>
        <div className="font-label-sm text-label-sm text-on-surface-variant">14</div>
      </div>

      <div className="hairline mb-section-gap"></div>

      {/* Asymmetric Layout: Text Focus Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid items-start">
        {/* Left Column: Structured Editorial Typography */}
        <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
          <h1 className="font-headline-lg text-headline-lg text-primary uppercase leading-tight mb-8">
            STRUCTURAL PURITY.<br />
            LOREM IPSUM DOLOR SIT AMET,<br />
            CONSECTETUER ADIPISCING ELIT.<br />
            AENEAN COMMODO LIGULA EGET<br />
            DOLOR. AENEAN MASSA. CUM<br />
            SOCIIS NATOQUE PENATIBUS<br />
            ET MAGNIS DIS PARTURIENT<br />
            MONTES NASCETUR MUS.
          </h1>
          <div className="w-24 hairline bg-primary mb-12"></div>
          <div className="flex flex-col gap-6 max-w-md">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our studio operates at the intersection of architectural precision and digital innovation. We believe that clarity is not just a visual choice, but a functional imperative for high-end digital experiences.
            </p>
            <div className="font-label-xs text-label-xs text-outline uppercase tracking-[0.2em]">
              WWW.DORTH-TEMPLATE.COM
            </div>
          </div>
        </div>

        {/* Right Column: Contrast Focus Black Block */}
        <div className="col-span-1 md:col-span-6 flex flex-col items-end md:pt-16">
          {/* Black Focus Block */}
          <div className="bg-primary p-12 md:p-16 w-full max-w-xl text-on-primary relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            ></div>
            <div className="relative z-10 flex flex-col gap-10">
              <div className="font-label-sm text-label-sm uppercase tracking-widest text-on-primary-container">
                Editorial Manifesto
              </div>
              <p className="font-body-md text-body-md text-on-primary leading-relaxed opacity-90">
                Monochromatic palette prioritizing the integrity of form over decorative color. Spanning rigid 12-column architectural systems inspired by print-media heritage and modern functional typography.
              </p>
              <div className="flex justify-between items-center">
                <Link to="/product" className="flex items-center gap-4 group/btn">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.3em] group-hover/btn:translate-x-2 transition-transform duration-300">
                    View Archive
                  </span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <span className="font-label-xs text-label-xs opacity-50 font-mono">REF: 5641</span>
              </div>
            </div>
          </div>

          {/* Secondary Visual Icon Element */}
          <div className="mt-24 w-full flex justify-end">
            <div className="w-32 h-32 bg-surface-container border border-outline-variant flex items-center justify-center p-4">
              <div className="w-full h-full bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[24px]">square</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="mt-section-gap mb-24 border-t border-outline-variant pt-4">
        <div className="flex justify-between">
          <div className="font-label-xs text-label-xs text-outline uppercase">Section 05</div>
          <div className="font-label-xs text-label-xs text-outline uppercase">Contextual Dynamics</div>
        </div>
      </div>

      {/* Bottom Architectural Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-grid">
        <div className="flex flex-col gap-4 border-t border-outline-variant pt-4">
          <div className="font-label-sm text-label-sm uppercase font-bold text-primary">Concept</div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Defining structural boundaries through negative space and typographic hierarchy.
          </p>
        </div>
        <div className="flex flex-col gap-4 border-t border-outline-variant pt-4">
          <div className="font-label-sm text-label-sm uppercase font-bold text-primary">Identity</div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Monochromatic palette prioritizing the integrity of form over decorative color.
          </p>
        </div>
        <div className="flex flex-col gap-4 border-t border-outline-variant pt-4">
          <div className="font-label-sm text-label-sm uppercase font-bold text-primary">Precision</div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Fixed 12-column architectural grid systems inspired by print-media heritage.
          </p>
        </div>
        <div className="flex flex-col gap-4 border-t border-outline-variant pt-4">
          <div className="font-label-sm text-label-sm uppercase font-bold text-primary">Future</div>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Scaling the DORTH ecosystem across diverse digital and physical touchpoints.
          </p>
        </div>
      </div>
    </main>
  );
}
