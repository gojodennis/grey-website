import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroPage() {
  return (
    <main className="flex-grow pt-32 min-h-screen">
      {/* Hero Section */}
      <section className="px-margin-page mb-section-gap">
        <div className="relative w-full aspect-[21/9] overflow-hidden mb-12">
          {/* Large Grayscale Skyline */}
          <img
            className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-1000 hover:scale-105"
            alt="A panoramic wide-angle grayscale photograph of a massive metropolitan skyline at dawn"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFkOlQjdKyDuB3cIHJNjlolkE3EsrjmbkPONCIsXwGseZupbr8lF9zqbt1jDWKX20WruNr2DxPAXc1CBc0YIWe7cAWJnxvNZHYJujRxtf7yWm8J_H894lEOEu7e6WHNCsnZ5yscLFjRvyuRod-wUb3WAokK3aclLkt1H4ytZMcB_yqNa-iEnNaK8rjNo0YITF3ILYigkTXjkofhZS9h01QlDhnAdS0uaHS3bMF2N8MePs-bFE_5RiWjSGQdBRQZxcLtclIgQtOPg"
          />
          {/* Vertical Brand Anchor */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
            <span className="vertical-text font-display-lg text-display-lg text-white opacity-90 tracking-tighter">
              DORTH
            </span>
          </div>
          {/* Subtle URL Overlay */}
          <div className="absolute left-8 bottom-8 vertical-text font-label-xs text-label-xs text-white opacity-50 tracking-widest">
            WWW.DORTH-TEMPLATE.COM
          </div>
        </div>

        {/* Hero Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid items-end">
          <div className="md:col-span-6">
            <h1 className="font-display-lg text-display-lg uppercase leading-none mb-4 text-primary">
              BRANDING<br />PRODUCT.
            </h1>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="font-body-md text-on-surface-variant mb-8 max-w-md">
              High-end architectural minimalism designed for clarity, structural integrity, and timeless quiet luxury across modern spatial and digital identities.
            </p>
            <Link to="/product" className="inline-flex items-center gap-4 group">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Explore Materials</span>
              <div className="h-[1px] w-12 bg-primary transition-all group-hover:w-20"></div>
              <span className="material-symbols-outlined text-[16px] text-primary">north_east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Architectural Hairline Divider */}
      <div className="px-margin-page mb-section-gap">
        <div className="architectural-line"></div>
      </div>

      {/* Secondary Section: Bento Studio */}
      <section className="px-margin-page mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative aspect-square bg-tertiary overflow-hidden group">
            <img
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 filter grayscale"
              alt="Architectural model workshop with soft directional light"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVLggm1Ga-RXaMvBvf9KkeuhPdBAlQ_VbivklWTKZPaSVpsADA2PhAon9YsefZmgQXBezPtdRjdnAZI4jo3YvhqJ6p80smoaf-6HwWNWO_EJkRQxoPwGENiH3wSgnXwkUUaWWOGva47ckL-_iAkDWFpL6XOkUO-8X0VdaaO40l6Fm00RVskMZJIxZsJ0Hl3xoC2seYLwKWTeZt8MO-o2RPkXz6uPJakHOydnzG7dVKkTzGRfKheBgeIx1MevM6BOi9cv9e4-eWiQ"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
            <div className="font-label-xs text-label-xs uppercase tracking-[0.2em] mb-6 text-on-secondary-fixed-variant">
              Studio Insight
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-8 leading-tight text-primary">
              STUDIO<br />INSIDE?
            </h2>
            <p className="font-body-md text-on-surface-variant mb-8">
              A blank canvas where architectural precision meets creative fluidity. Located in the heart of the design district, the studio serves as a laboratory for tactile experimentation and digital innovation.
            </p>
            <div className="border-l border-primary pl-6 py-2 italic text-on-surface opacity-90 mb-8 font-body-md">
              "Don't use a brand; wear one that is really comfortable for you."
            </div>
            <Link to="/studio" className="inline-flex items-center gap-4 group self-start">
              <span className="font-label-sm text-label-sm uppercase tracking-widest border-b border-primary pb-1 text-primary">Read Studio Philosophy</span>
              <span className="material-symbols-outlined text-[16px] text-primary">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-margin-page mb-section-gap">
        <div className="flex justify-between items-end mb-12 border-b border-outline-variant pb-8">
          <h2 className="font-headline-lg text-headline-lg uppercase text-primary">THE TEAM.</h2>
          <span className="font-label-sm text-label-sm text-on-secondary-fixed-variant">17</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid">
          <div className="md:col-span-4">
            <p className="font-body-md text-on-surface-variant max-w-xs mb-8">
              Our studio brings together experts from across the globe to redefine architectural aesthetics.
            </p>
            <Link to="/team" className="font-label-sm text-label-sm uppercase tracking-widest border-b border-primary pb-1 text-primary hover:opacity-70 transition-opacity">
              Join the vision
            </Link>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Team Card 1 */}
            <div className="flex gap-6 items-start group cursor-pointer">
              <div className="w-32 aspect-square bg-surface-container overflow-hidden border border-outline-variant">
                <img
                  className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
                  alt="Leila Zorra profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuANq5UYwTjdBH5Ct-FZJaB-wyK2HWbFjOtSryV2ORl1sxoOOdlhxBHakkxHkqQZMu3Axg3TsGSk_pto3RvTv38me-xSjuhZNp9njATDVwioCdPCN7FNMBRE-6XO2tG4YbnSLLCvrc9cs_PemljOmYEoH3awGvEBcrjjuAF1_2KFtSMSmJuLvc51UVe092G2TpmuG4HCh93cKIPo0tbt2GLU8zlux0bDRej8EJNWBNvo8CdhL-CKzy7Vx7rEUxDhcIVuaTTiudNvqg"
                />
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase font-bold mb-1 text-primary">Leila Zorra</div>
                <div className="font-label-xs text-label-xs text-on-secondary-fixed-variant uppercase mb-4 tracking-wider">Graphic Design</div>
                <p className="text-[12px] leading-relaxed text-on-surface-variant">Focusing on structural typography and high-contrast spatial identities.</p>
              </div>
            </div>
            {/* Team Card 2 */}
            <div className="flex gap-6 items-start group cursor-pointer">
              <div className="w-32 aspect-square bg-surface-container overflow-hidden border border-outline-variant">
                <img
                  className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-500"
                  alt="Alexander profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYZoY1gfgffXtcWtLjS8dVzxTHugP8Ik4VgB4gX0H4qm9Thrqjdt6uZn13FuZkCrOsDLo7V17AgO7QY_ACXDteLxalwkMOqzZH7O80djGpoX7qH1mZ6hsh1De08L3sSgRb6PeqamC3pKxSzLOO451nVbGQ9CGOrq85ZnL4GDShAWHsRV4_fRggj8jEcrE0rtBJ7-jH-INvcAigQNzlcWJhhfZFZgv6znDdPHM7bVXQ5J4JxeXjMnu-JMUwCs4VAIFFxVL2zr78bg"
                />
              </div>
              <div>
                <div className="font-label-sm text-label-sm uppercase font-bold mb-1 text-primary">Alexander</div>
                <div className="font-label-xs text-label-xs text-on-secondary-fixed-variant uppercase mb-4 tracking-wider">Product Master</div>
                <p className="text-[12px] leading-relaxed text-on-surface-variant">Translating physical material research into digital product ecosystems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Materials Grid Section */}
      <section className="px-margin-page mb-section-gap">
        <div className="flex justify-center mb-16">
          <h2 className="font-headline-lg text-headline-lg uppercase text-center relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-primary text-primary">
            PRODUCT MATERIAL.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              id: '01',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs946YQlQB2oFxgV2O7R0i6GC1zAFPMQe0Xyky2bOn9Os0no8rxYgW3A4_XEqf_XqlR0DP-9lEUnXt6TlJqPrOD4tWTN-3oZhS7oUCLc6Ifa0V54DlIKldDu6Ktd_P8TzU57Wl2n_mQXfHCZHG6uDAlFk-BdODIKUaoWoPvSYf_cr5kHaQ_lNMlj4JLSiJZQAhwT_mqinTRU-FwFjWg2tXlMrcgK1c-BTXyybNmuUM7ZtJ-OBETES5ET-IBqS_KrkXKIfwVIOFuw',
              desc: 'Micro-texture analysis of high-density acoustic materials. Optimized for frequency absorption.'
            },
            {
              id: '02',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY2TtQmaZt_rgoot_QqMzxqddoxnSp2CTXow5SOHphIPKBCGZ1U6vTLXAOFBxTRElKMMnfdur5g10XawODLmWks35yhJoQNDhxx3AkG1wwp1gIOC5H2588K7LNSEg3B01pNAm1B0wetIK3TVZOy9Z0Kkezxsj6wx4aSro4x3H5er8L8d0fYKN-QgYzZANEnf3-_lpuK1C5XNVKaDBZLGnagR0Lr0anME2jHxYhE2LLEzUtZD-IEgduuR7K16ZvmiBVm5sWgowQOQ',
              desc: 'Reflective surface studies on polished alloy composites. Durability meets aesthetic precision.'
            },
            {
              id: '03',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArYygJi57GJqgk5XnX0Hk4mmnCVhshmvUulk4uRKCgWjwLbpxpW4gCqPUN7_B-bpVd7sLUJoTyfqrhMutfm7QrzvrQ1hJeO4zET-hTr2hh5d0u4yXK8dmaAGAA6br9dXQ0fkJZlQ49B2bBsC7Qw0Dvhv3ccFHHaLCEKSx4rrjGhUrdo2YaNH2FvSAnch1kzCpfNDje2_6JPUpffstxlr-RHnssgt_5p23fu5rmb6DAd9trLCkAO_SYsu2YZHVETheW4GblQrzzgQ',
              desc: 'Structural concrete with exposed aggregate. Interplay between light and mineral surfaces.'
            },
            {
              id: '04',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPDY1DqiTGeIW4zmCU66aAd18NH_sGK8jhMXKuiG2uZFh8DsqWnhehesCWLqpi5D1Bm5VPfrdQ3c8hB7vqI5mB2GhETQrfZ71J71oeoAr_PJIVsB9PxjifOSgD0-w6Xn9SfkNYZR2StoLgZEB26NlqKyfuWgqxqubTHVTLebozWZGH1bZU16nVAD3bqVleSTOjJo4BS9L_vCNS6DgIOVOWUHoT4y9eJLZMiDM-p4PjGc1s9XJkpzEzrwxyxUk4zwWep9DBABkvzA',
              desc: 'High-tensile framing systems exploring modular architectural silhouettes and negative space.'
            }
          ].map((item) => (
            <Link to="/product" key={item.id} className="group block cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface-container border border-outline-variant">
                <img
                  className="w-full h-full object-cover filter grayscale group-hover:scale-110 transition-transform duration-1000"
                  alt={`Material ${item.id}`}
                  src={item.img}
                />
              </div>
              <div className="font-label-xs text-label-xs uppercase mb-2 text-primary">Material / {item.id}</div>
              <div className="architectural-line mb-3"></div>
              <p className="text-[11px] leading-relaxed text-on-surface-variant">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
