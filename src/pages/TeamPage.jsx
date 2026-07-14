import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Elena Vork",
      role: "Founder / CD",
      bio: "With over a decade of experience in architectural visualization and brand identity, Elena leads the creative direction of DORTH, focusing on structural purity and spatial harmony.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCXsn0u2i44hH0Aj68K0qkjHEIkERS-APLQlqB8Z09SnMGmSFPr6J-kocYsXfnYp9BFjEZljPvAhbpOHe1eYCre0kLPoqacmRwIZRXnOwav7Fo2Hl9pyF1U0rQiEV_n6jg2Mt8axxPkRDqIPbx--Jb3zNDU9JJ3FSEKA4NEytaIb3SqQAZON7632gtsifxUDUGNyNk3InZJAk9OemDd0Qo2005ufiWOgfnv2mAhJ2xVNna8lDP6fen6i4h3IlnnVPlU2qc4S1Xew",
    },
    {
      name: "Marcus Thorne",
      role: "Lead Architect",
      bio: "Marcus specializes in the intersection of physical materials and digital environments. His work explores how traditional craftsmanship can be translated into interactive experiences.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl89-4wCcM8390A-JOs-29u5oRrZ4cY65JpYLeRmesYDaVwS3wX3QHK47NbDP6tOTwj751Z_K9m-jfNVyBHrpZQBOXHzxKx7UMbe-FFoxbnWtRjsl76Uenm7EmvfQmGHtrmtul0obte58wU5wheDgdUcmb9R39PCF1NsPw1FyhWtstmRlp6obF-XP1CcPfHlsN-CYqhLh2RzlOV1Of8Yx6S5dNZFxeEc1a_lrgmr_IAaRLMv7I4gkWhQMeb1ZTqLXg8kJoXZ0aaA",
    },
  ];

  return (
    <main className="min-h-screen px-margin-page pt-32 pb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-grid">
        {/* Left Column: Heading & Intro */}
        <section className="md:col-span-5 flex flex-col justify-start">
          <div className="mb-12">
            <span className="font-label-xs text-label-xs uppercase tracking-widest text-on-secondary-container mb-4 block">
              Section 02 — People
            </span>
            <h1 className="font-display-lg text-display-lg text-primary uppercase leading-none">THE TEAM.</h1>
          </div>
          <div className="max-w-xs">
            <div className="thin-hairline mb-8"></div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Our multidisciplinary team combines architectural precision with digital fluidity. We believe in the power of quiet luxury and intentional design to transform brand narratives.
            </p>
            <Link to="/studio" className="flex items-center gap-2 group cursor-pointer text-primary">
              <span className="font-label-sm text-label-sm uppercase tracking-widest group-hover:pr-2 transition-all">Join the studio</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </section>

        {/* Right Column: Profile Rows */}
        <section className="md:col-span-7 flex flex-col gap-16">
          {teamMembers.map((member, idx) => (
            <article key={idx} className="grid grid-cols-1 sm:grid-cols-10 gap-8 group border-t border-outline-variant pt-8 first:border-0 first:pt-0">
              <div className="sm:col-span-4 relative aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out border border-outline-variant bg-surface-container">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt={member.name}
                  src={member.img}
                />
              </div>
              <div className="sm:col-span-6 flex flex-col justify-end pb-4">
                <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-4">
                  <h2 className="font-headline-lg text-headline-lg text-primary uppercase">{member.name}</h2>
                  <span className="font-label-xs text-label-xs text-on-tertiary-container uppercase tracking-widest font-mono">
                    {member.role}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {member.bio}
                </p>
                <div className="flex gap-4">
                  <button onClick={() => alert(`Viewing ${member.name}'s portfolio`)} className="font-label-xs text-label-xs uppercase border border-primary px-4 py-2 hover:bg-primary hover:text-on-primary transition-colors text-primary">
                    Portfolio
                  </button>
                  <button onClick={() => alert(`Contacting ${member.name}`)} className="font-label-xs text-label-xs uppercase border border-outline-variant px-4 py-2 hover:border-primary transition-colors text-on-secondary-fixed-variant">
                    Contact
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
