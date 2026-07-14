import React from 'react';
import { Link } from 'react-router-dom';

export default function StudioPage() {
  return (
    <main className="min-h-screen pt-32 px-margin-page pb-section-gap">
      {/* Layout 2: Studio Page Asymmetric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid items-center mb-section-gap">
        {/* Left: Large Black Square with Inset Image */}
        <div className="md:col-span-6 relative aspect-square bg-primary flex items-center justify-center p-8 md:p-20 overflow-hidden">
          <div className="w-full aspect-square relative grayscale group overflow-hidden border border-outline-variant">
            <img
              className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105"
              alt="Monochrome architectural photograph of modern studio space"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfV2GJRN6m4ZWLxN4YnOXt0NBTP0d-so8ja_grjCUKtWZ0aFFw174kB3feKbkNSkoLXvLbIkuiCs8E77WGj-csbcaNi5ynoKLyPfgZMTfjBgJDg2tfsmY6bSO05KmDT00tVOPKa8_t2ggFD7VCqiUWOQMA9lrUOnKLMh4cOOFzj4FEpt5CpXJr1OdxVOC47-tuL0MG2gYelr-oR1U_P1PMrkhzFbEKmM7dN4M1PFxt1bzmZZGtmzIAgfWJ7PF_p4wNXs4fMrmNfw"
            />
            {/* Small vertical label inside the box */}
            <div className="absolute bottom-4 left-4 mix-blend-difference">
              <span className="font-label-xs text-label-xs text-on-primary rotate-180 [writing-mode:vertical-lr] uppercase tracking-widest opacity-60">
                WWW.DORTH-TEMPLATE.COM
              </span>
            </div>
          </div>
        </div>

        {/* Right: Editorial Content */}
        <div className="md:col-span-5 md:col-start-8 flex flex-col justify-center">
          <div className="mb-12">
            <span className="font-label-xs text-label-xs uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">
              Section 02 — Space
            </span>
            <h1 className="font-headline-lg text-headline-lg uppercase mb-8 tracking-tighter text-primary">
              Studio<br />Inside?
            </h1>
            <div className="hairline w-16 mb-8 bg-primary"></div>
          </div>

          <div className="space-y-8 max-w-md">
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Our workspace is an extension of our philosophy: a blank canvas where architectural precision meets creative fluidity. Located in the heart of the design district, the studio serves as a laboratory for tactile experimentation and digital innovation.
            </p>
            <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Every element—from the raw concrete surfaces to the diffused Northern light—is curated to eliminate distraction. It is a space designed for deep focus, where the complex is distilled into the essential.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <Link
              to="/focus"
              className="font-label-xs text-label-xs uppercase tracking-widest py-2 border-b border-primary text-primary hover:opacity-70 transition-opacity"
            >
              Explore Philosophy
            </Link>
            <span className="material-symbols-outlined text-[16px] text-primary">arrow_right_alt</span>
          </div>

          {/* Page Numbering Anchor */}
          <div className="mt-20 pt-8 border-t border-outline-variant flex justify-between items-baseline">
            <span className="font-label-xs text-label-xs uppercase opacity-40">Dorth Presentation / 2024</span>
            <span className="font-label-sm text-label-sm font-bold text-primary">14</span>
          </div>
        </div>
      </div>

      {/* Supplemental Architectural Details */}
      <section className="mt-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter-grid border-t border-outline-variant pt-16">
        <div className="md:col-span-3">
          <h3 className="font-label-sm text-label-sm uppercase tracking-[0.3em] mb-4 text-primary">The Detail</h3>
          <p className="font-label-xs text-label-xs text-on-secondary-fixed-variant leading-relaxed">
            Precision is not just a goal; it is the fundamental starting point for every project we undertake.
          </p>
        </div>

        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-gutter-grid">
          <div className="border-t border-outline-variant pt-4">
            <span className="font-label-xs text-label-xs uppercase block mb-2 text-primary font-bold">01 / Concept</span>
            <p className="font-label-xs text-label-xs opacity-70">Theoretical foundations rooted in structural integrity and clear form.</p>
          </div>
          <div className="border-t border-outline-variant pt-4">
            <span className="font-label-xs text-label-xs uppercase block mb-2 text-primary font-bold">02 / Process</span>
            <p className="font-label-xs text-label-xs opacity-70">Iterative refinement through physical model making and high-contrast rendering.</p>
          </div>
          <div className="border-t border-outline-variant pt-4">
            <span className="font-label-xs text-label-xs uppercase block mb-2 text-primary font-bold">03 / Output</span>
            <p className="font-label-xs text-label-xs opacity-70">Clean, functional deliverables crafted with timeless editorial value.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
