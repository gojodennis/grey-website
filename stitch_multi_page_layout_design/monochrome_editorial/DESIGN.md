---
name: Monochrome Editorial
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e1dfdf'
  on-secondary-container: '#626263'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e4e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: '1.2'
spacing:
  margin-page: 4rem
  gutter-grid: 1.5rem
  section-gap: 8rem
  element-gap: 1rem
---

## Brand & Style

This design system is built upon a foundation of high-end editorial minimalism. It prioritizes clarity, structural integrity, and a sophisticated atmosphere. The target audience includes design-conscious professionals, architecture firms, and luxury brands that value "quiet luxury"—where the content is elevated through purposeful negative space rather than decorative elements.

The visual style is characterized by:
- **Asymmetric Balance:** Intentional use of whitespace to create focus and tension.
- **Architectural Layouts:** A rigid underlying grid that allows for expansive, breathing room.
- **Monochromatic Sophistication:** A palette stripped of color to emphasize form, texture, and typography.
- **Precision:** Thin hairlines and sharp edges that convey a sense of technical mastery and attention to detail.

## Colors

The color strategy is purely grayscale, relying on extreme contrast to establish hierarchy.

- **Primary (Black):** Used for headlines, heavy blocks of content, and primary CTA backgrounds. It represents the "ink" on the page.
- **Secondary (Dark Gray):** Reserved for body text and secondary labels to reduce visual vibration against stark white backgrounds.
- **Neutral (Soft Gray/White):** The canvas. While pure white (#FFFFFF) is the primary background, subtle light grays are used for section dividers and subtle UI containers.
- **Accents:** Depth is achieved through the use of photography (grayscale imagery) rather than color tokens.

## Typography

The typography system uses a pairing of a sharp, contemporary neo-grotesque for most communication and a monospaced font for utility and meta-data.

- **Headlines:** Set in Hanken Grotesk with tight tracking. Headlines often utilize "all caps" or "sentence case" with a heavy weight to act as anchors for the layout.
- **Body:** Prioritizes readability with generous line heights. The slightly wider stance of the sans-serif ensures clarity in long-form editorial content.
- **Utility (Labels):** JetBrains Mono is used for page numbers, breadcrumbs, and technical details (like image captions) to reinforce the "studio" or "architectural" aesthetic.
- **Alignment:** Consistent use of "flush left, ragged right" for body text to maintain the editorial feel.

## Layout & Spacing

This design system uses a **Fixed Grid** model inspired by print magazines.

- **The 12-Column Grid:** Content is mapped to a 12-column grid on desktop. Large imagery typically spans 8-12 columns, while text blocks are often constrained to 4-6 columns to prevent excessively long line lengths and to create asymmetric whitespace.
- **Margins:** Large, consistent outer margins (64px+) act as a frame for the content, ensuring the design feels intentional and uncrowded.
- **Vertical Rhythm:** Spacing between sections is aggressive (double or triple the standard height) to signal clear transitions between topics.
- **Hairlines:** Horizontal and vertical lines (0.5pt to 1pt thickness) are used to separate global navigation from the content area, mimicking the look of architectural drawings.

## Elevation & Depth

Hierarchy in this system is achieved through **Tonal Contrast** and **Scale** rather than shadows or blurs.

- **Flat Surfaces:** There are no drop shadows. Elements exist on a single flat plane.
- **Inversion:** Depth is signaled by color inversion. For example, a "raised" element or a primary call-to-action is a solid black block with white text placed on a white background.
- **Overlays:** Imagery may occasionally have a slight 5% black tint overlay to ensure white text remains legible when placed directly over photographs.
- **Low-Contrast Outlines:** Very thin #E0E0E0 borders are used only when necessary to define the bounds of a white element against a white background (e.g., input fields).

## Shapes

The shape language is strictly **Sharp (0)**. 

Every UI element—from buttons and cards to image containers—uses 90-degree corners. This reinforces the disciplined, professional, and architectural tone of the system. Circles are used exclusively for icons or very specific profile avatars to create a deliberate point of contrast against the otherwise rectangular world.

## Components

- **Buttons:** Rectangular with no radius. Primary buttons are solid black with white uppercase text. Secondary buttons use a 1px black border with black text.
- **Input Fields:** Minimalist. Only a bottom border (1px black) is used for the resting state, with the label positioned in a monospaced font above the line.
- **Cards:** Defined by whitespace and hairlines rather than shadows. A card is a simple container with a thin top border to separate it from the previous element.
- **Chips/Labels:** Small, rectangular boxes with thin 1px borders, using the `label-xs` monospaced font.
- **Lists:** Bullet points are replaced by thin horizontal lines (hairlines) that span the width of the text container, creating a "row" effect similar to an index.
- **Imagery:** Always high-resolution, frequently grayscale. Images should be cropped to architectural ratios (16:9 or 4:3) and never have rounded corners.