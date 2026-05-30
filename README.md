# MediCare Hospital

A responsive static landing page for a healthcare facility, built with HTML, CSS, and vanilla JavaScript. This project showcases a hospital-branded website with hero content, services, departments, patient features, and mobile-friendly navigation.

## 🚀 Project Overview

MediCare Hospital is a modern, responsive single-page website designed for a medical or healthcare brand. It includes a clean navigation layout, hero section, service highlights, an about section, speciality overview, doctor profiles, call-to-action area, and a footer with contact details.

## 🧩 Key Features

- Responsive desktop and mobile layout
- Mobile menu toggle with smooth open/close behavior
- Sectioned landing page including:
  - Hero/banner
  - About Us
  - Services
  - Departments
  - Patient care focus
  - Contact area
- Font Awesome icon integration
- Prebuilt CSS modules for layout, navigation, hero, speciality, doctor, CTA, footer, and about sections

## 🛠️ Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Tailwind CSS (development dependency)
- Font Awesome for icons

## 📁 Project Structure

- `index.html` — main landing page structure
- `src/` — styles and JavaScript logic
  - `nav.js` — mobile menu toggle functionality
  - `input.css` / `output.css` — Tailwind input/output styles
  - `hero.css`, `about.css`, `speciality.css`, `doctor.css`, `cta.css`, `footer.css`, `nav.css` — section-specific styling
- `assests/` — image assets used by the page
- `package.json` — Tailwind dependencies

## ⚙️ Installation

1. Clone or copy the repository into your local workspace.
2. Install dependencies:

```bash
npm install
```

## ▶️ Run / Preview

Open `index.html` directly in a browser to preview the site.

If you want to rebuild Tailwind styles manually, use the Tailwind CLI and your own build command. Example:

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

## ✨ Development Notes

- The page uses a mobile menu controlled by `src/nav.js`.
- The `src/output.css` file appears to contain compiled Tailwind styles and is included directly by `index.html`.
- Additional page sections are styled via separate CSS files for modular organization.

## 📌 Recommendations

- Add `scripts` to `package.json` for easier Tailwind builds.
- Consider adding a local development server for faster previews.
- Add more semantic content sections if the site is extended into a full multi-page medical portal.

## 🙌 Contribution

This is a static portfolio-style project. Contributions are welcome for design refinement, accessibility improvements, or expanded page sections.

## 📄 License

This repository does not currently include a license file. Add one if you want to share or publish the project openly.
