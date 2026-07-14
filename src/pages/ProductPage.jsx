import React, { useState } from 'react';

export default function ProductPage() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const materials = [
    {
      code: "M_01",
      title: "MATERIAL 01 — Acoustic Condenser",
      detail: "Micro-texture analysis of high-density acoustic materials. Surface properties optimized for frequency absorption.",
      specs: ["Absorption Coeff: 0.92", "Density: 120kg/m³", "Finish: Matte Graphite"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJ64pi2CHqaujVJnisiefBCO1Odhr03GRD4Ey054UgN1muZjfbz1EDfxDTDG0FvlXZYBvPHvq1HdGL6lZ4kOPRURLptbRBXx6ZllW_eQasGciw7Giz5XsDzoFBJAcTu2j4nG93rfoED0E8XJfOnYNsTRWcX1Tk_KfEDxbzCg1Qifw02A0zgkKrZuhaGgE0fv1VdKecYgW1pRMWZ3duVIaHSEBYVaqEfS4EL9vhEd7klJwAYrAejsayvkU9U3sYWRSWLcErc3JpMw"
    },
    {
      code: "M_02",
      title: "MATERIAL 02 — Alloy Composite",
      detail: "Reflective surface studies on polished alloy composites. Durability meets aesthetic precision in exterior finishes.",
      specs: ["Reflectivity: 88%", "Tensile Strength: 450MPa", "Corrosion Grade: A1"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYyEd92-vLIBwcZYBnKDu0-22dKLAy8zq0OAE5v0fy2frR_Pi1BJiq2d8K7K_qKaHnl3p5kfVgOVjQODmbHPXUs0AQDi-BZOmDLcqh0iSg0bq9g5210RChXU0URVwes7H_C_nd9YQa8nzfAVaWl5Td1Yy5ozw6G114DODWcJHKfp0P011FbHcWqnMMpF2YiIqZsjU_wzneOu-WNaWO9YEacv5S-648Fp6UtYIGM2CJyAhHeI9hRS3qb8czQqdTrqxZe-9HjLcnsw"
    },
    {
      code: "M_03",
      title: "MATERIAL 03 — Concrete Recess",
      detail: "Structural concrete with exposed aggregate. Investigating the interplay between artificial light and raw mineral surfaces.",
      specs: ["Compressive Class: C40/50", "Aggregate: Quartzite", "Light Spill Index: 0.15"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxbShKKLOkffQHiKlTWbB3tHVapXSx5kHRwD7chmRfheguWN7-IAX9_NjJ9yJQMfg00gOH9yKx1skdpgxlU6VlYTwvJ3Ka_4makowaFxD3gVw7MYqMJzvlAvS-XKGdiOEdBE_-c9ZQJ3xrmoELr9sBc6pyaG1rwYq3uBDJWPzwNpvqNxNWX34j-od5DSBF7ChT6_cE8KDwIfjnwT_d3jK9Iykj600aH5SU1XmtKpD-tU8RGNZXo3S8NDDpZz-QhZ-E2tNc6_8HeA"
    },
    {
      code: "M_04",
      title: "MATERIAL 04 — Modular Steel Frame",
      detail: "High-tensile steel framing systems. Exploring the modularity of modern architecture through industrial repetition.",
      specs: ["Yield Point: 355N/mm²", "Modular Pitch: 1200mm", "Recyclability: 100%"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQIycdiMvav8fC9UwhNC8hPJpm21GT92LtJYEDuczKhbunk0gskZD7whC2TGa9O0X_Nd7tCE_CyC1pm78GZDgGgsqOaoozyjUgB8MXrSaiRJXhStcmk4-p6JkD41AwJwyvh0oI1BiSC1A037dtsgI4IrOp5eu_8hlmJTYoHf-ca2tvttXRSWALZEQ04VmlzDuD7SV_Qq4QibX9WIPFO9lnk3XvE0Y3ffy1RUGaGHes7P7_pqq3xcdWNUXjbOSuj8SOjfdIzn6VHw"
    }
  ];

  return (
    <main className="pt-32 min-h-screen px-margin-page pb-24">
      {/* Section Header */}
      <div className="mb-24 flex flex-col items-center">
        <h1 className="font-headline-lg text-headline-lg uppercase text-center border-b border-primary pb-4 mb-2 text-primary">
          PRODUCT MATERIAL.
        </h1>
        <div className="font-label-xs text-label-xs uppercase tracking-[0.2em] opacity-60 text-on-secondary-fixed-variant">
          Volume 04 / Material Study
        </div>
      </div>

      {/* Material Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-grid">
        {materials.map((mat) => (
          <div
            key={mat.code}
            onClick={() => setSelectedMaterial(mat)}
            className="flex flex-col group cursor-pointer"
          >
            <div className="aspect-[3/4] overflow-hidden mb-6 relative border border-outline-variant bg-surface-container">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale"
                alt={mat.title}
                src={mat.img}
              />
              <div className="absolute top-4 left-4 bg-primary text-on-primary px-2 py-1 font-label-xs text-label-xs">
                {mat.code}
              </div>
            </div>
            <div className="border-t border-outline-variant pt-4">
              <h3 className="font-label-sm text-label-sm uppercase mb-2 text-primary group-hover:underline">
                {mat.title}
              </h3>
              <p className="font-body-md text-sm leading-relaxed text-on-surface-variant max-w-[240px]">
                {mat.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary Information Block */}
      <div className="mt-section-gap grid grid-cols-12 gap-gutter-grid border-t border-outline-variant pt-16">
        <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
          <div className="border-t border-primary pt-8">
            <span className="font-label-xs text-label-xs text-primary mb-4 block uppercase tracking-widest font-mono">
              PROCESS NOTE
            </span>
            <p className="font-body-md text-sm leading-relaxed text-on-surface-variant">
              Each material selected for the DORTH product line undergoes rigorous environmental and aesthetic testing. Our commitment is to the marriage of functional longevity and visual silence.
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-8 overflow-hidden aspect-video border border-outline-variant bg-surface-container relative">
          <img
            className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-1000"
            alt="Minimalist design studio grid workspace"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDruIJb1vp0DJukGdBTDnal99Npmw6jLjQwGEraEmd2hFSJhKPOZS3tQAGCKmIzxHE9Qo3ReMrT4EwAZkzxz8iFOmP2-0HaXPzzWOlYuUlWOSWwhIrlpLn9xVTI130UEJQKhYMw8H9BpB_531pIutAAK3X56BGoD27CHTUYti3rIvjCo60SL2HDcF16h7QAI3gFpGC7EOMAQL8kTQdQWH8kjjOTXLDtOnG1ItAYvKSpIULxt2h0g6e4YYvzulg9iak57mO6n2Sfhw"
          />
        </div>
      </div>

      {/* Material Spec Detail Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn">
          <div className="bg-background border border-outline-variant p-8 max-w-xl w-full relative">
            <button
              onClick={() => setSelectedMaterial(null)}
              className="absolute top-6 right-6 text-primary hover:opacity-60"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="font-label-xs text-label-xs uppercase tracking-widest text-primary mb-2 font-mono">
              {selectedMaterial.code}
            </div>
            <h2 className="font-headline-lg text-headline-lg uppercase mb-4 text-primary">
              {selectedMaterial.title}
            </h2>
            <div className="aspect-video w-full mb-6 overflow-hidden border border-outline-variant">
              <img className="w-full h-full object-cover grayscale" src={selectedMaterial.img} alt={selectedMaterial.title} />
            </div>
            <p className="font-body-md text-sm text-on-surface-variant mb-6 leading-relaxed">
              {selectedMaterial.detail}
            </p>
            <div className="border-t border-outline-variant pt-4 space-y-2">
              <div className="font-label-xs text-label-xs uppercase text-primary font-bold mb-2">Technical Specifications</div>
              {selectedMaterial.specs.map((spec, i) => (
                <div key={i} className="flex justify-between text-xs font-mono text-on-secondary-fixed-variant border-b border-outline-variant/40 pb-1">
                  <span>SPEC_{i + 1}</span>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
