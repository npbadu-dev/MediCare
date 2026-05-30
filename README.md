# MediCare Hospital

A modern, responsive static landing page for a healthcare facility, built with HTML5, CSS3, and vanilla JavaScript. This project showcases a professional hospital-branded website with comprehensive sections including hero content, services, departments, doctor profiles, appointment booking, and mobile-friendly navigation.

![MediCare Hospital](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## � Live Demo

**View the live site**: [https://medi-care-sable-gamma.vercel.app/](https://medi-care-sable-gamma.vercel.app/)

## �🚀 Project Overview

MediCare Hospital is a professionally designed single-page website tailored for medical and healthcare institutions. The website features a clean, modern aesthetic with a teal (#0f9e99) primary color scheme, emphasizing trust and medical professionalism. It includes comprehensive sections for hospital information, medical services, specialist doctors, appointment booking, and contact details.

### Design Philosophy

- **Patient-Centered**: Designed with user experience in mind, making it easy for patients to find information
- **Mobile-First**: Fully responsive design that works seamlessly across all devices
- **Professional Aesthetic**: Clean, modern design with medical-themed color palette
- **Accessible**: Semantic HTML and clear navigation for better accessibility

## 🧩 Key Features

### Navigation

- **Sticky Navigation Bar**: Always accessible while scrolling
- **Mobile Menu Toggle**: Smooth slide-in menu for mobile devices
- **Quick Access Links**: Direct navigation to all major sections
- **Contact Information**: Phone number prominently displayed in navigation

### Sections

- **Hero Section**: Eye-catching banner with hospital imagery and call-to-action buttons
- **About Us**: Hospital mission, values, and key features (Quality Care, 24/7 Service, Expert Team, Patient Safety)
- **Services**: Four medical specialties with detailed service lists:
  - Cardiology (Heart Disease evaluation, Advanced Cardiac diagnostics, Preventive Cardiology)
  - Neurology (Brain and Spine Care, Neurological disorder Treatment, Stroke Care and Rehabilitation)
  - Pediatric (Newborn and Child Care, Growth Monitoring, Vaccination programs)
  - Orthopedics (Joint Pain and Spine Care, Sports Injury Treatment, Joint Replacement)
- **Doctors**: Profile cards for four specialist doctors with experience, contact, and qualifications
- **Appointment Booking**: Interactive form with department and doctor selection
- **Contact Section**: Phone, email, and address information with visual icons
- **Footer**: Comprehensive footer with quick links, services, contact info, working hours, and social media

### Technical Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation experience with smooth scroll behavior
- **Hover Effects**: Interactive card animations and button transitions
- **Font Awesome Icons**: Professional iconography throughout the site
- **Modular CSS**: Organized stylesheet structure for maintainability

## 🛠️ Technology Stack

### Core Technologies

- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Styling with custom properties and modern CSS features
- **Vanilla JavaScript**: Mobile menu functionality and interactivity

### Frameworks & Libraries

- **Tailwind CSS v4.3.0**: Utility-first CSS framework for rapid development
- **Font Awesome 6.5.2**: Comprehensive icon library for UI elements

### Development Tools

- **Node.js & npm**: Package management for Tailwind CSS dependencies
- **Tailwind CLI**: Build tool for compiling CSS

## 📁 Project Structure

```
MediCare/
├── index.html                 # Main HTML file with complete page structure
├── package.json              # Node.js dependencies (Tailwind CSS)
├── package-lock.json         # Locked dependency versions
├── src/                      # Source files
│   ├── nav.js               # Mobile menu toggle functionality
│   ├── input.css            # Tailwind input file with custom CSS variables
│   ├── output.css           # Compiled Tailwind CSS output
│   ├── nav.css              # Navigation styling (desktop & mobile)
│   ├── hero.css             # Hero section styling
│   ├── about.css            # About section styling
│   ├── speciality.css       # Services/specialities section styling
│   ├── doctor.css           # Doctor profiles section styling
│   ├── cta.css              # Call-to-action/contact section styling
│   └── footer.css           # Footer section styling
├── assests/                  # Image assets
│   ├── lobby.jpg            # Hospital lobby image for hero section
│   ├── hospital-room.avif   # Hospital room image for about section
│   ├── doctor-1-removebg-preview.png   # Dr. Michael Smith
│   ├── doctor-2-removebg-preview.png   # Dr. David Brown
│   ├── doctor-3-removebg-preview.png   # Dr. Sarah Johnson
│   ├── doctor-4-removebg-preview.png   # Dr. Emily Davis
│   └── need-help-removebg-preview.png # Nurse image for contact section
└── README.md                # Project documentation
```

## 🎨 Color Scheme

The project uses a carefully selected color palette:

- **Primary Color**: `#0f9e99` (Teal) - Used for buttons, links, and accents
- **Secondary Color**: `#0b1c39` (Dark Blue) - Used for text and headings
- **Text Color**: `#555` (Gray) - Body text
- **Background Light**: `#f7fbfc` (Light Blue-Gray) - Section backgrounds
- **White**: `#ffffff` - Card backgrounds and navigation

## ⚙️ Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Setup Steps

1. **Clone the repository**

```bash
git clone <repository-url>
cd MediCare
```

2. **Install dependencies**

```bash
npm install
```

This will install:

- `@tailwindcss/cli@^4.3.0`
- `tailwindcss@^4.3.0`

## ▶️ Running the Project

### Quick Start (No Build Required)

Simply open `index.html` in your web browser. The project includes pre-compiled CSS in `src/output.css`.

```bash
# On Linux/Mac
open index.html

# On Windows
start index.html
```

### Development Mode (With Live CSS Compilation)

To enable live CSS compilation during development:

1. **Start Tailwind CSS watch mode**

```bash
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

2. **Open index.html in a browser**
   Changes to `src/input.css` will automatically recompile to `src/output.css`

### Using a Local Development Server (Recommended)

For a better development experience with live reload:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server (install globally first)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## 📝 Customization

### Modifying Colors

Edit the CSS variables in `src/input.css`:

```css
:root {
  --primary-color: #0f9e99; /* Change primary accent color */
  --secondary-color: #0b1c39; /* Change secondary color */
  --text-color: #555; /* Change text color */
  --bg-light: #f7fbfc; /* Change background color */
}
```

### Adding New Sections

1. Create a new CSS file in `src/` (e.g., `newsection.css`)
2. Link it in `index.html` in the `<head>` section
3. Add the HTML structure in the body
4. Add navigation link in the nav menu

### Updating Doctor Information

Edit the doctor cards in `index.html` (lines 504-689). Each card includes:

- Doctor image path
- Name and specialization
- Experience, email, and qualifications
- Profile link

### Modifying Services

Edit the service cards in `index.html` (lines 289-479). Each service card includes:

- Service icon (Font Awesome)
- Service name
- Service list items
- Learn More link

## 🚀 Deployment

### Static Hosting Options

This project can be deployed to any static hosting service:

**GitHub Pages**

```bash
# Push to GitHub repository
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Then enable GitHub Pages in repository settings.

**Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Vercel**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**AWS S3**
Upload the entire project directory to an S3 bucket configured for static website hosting.

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ✨ Development Notes

### CSS Architecture

- **Modular Approach**: Each section has its own CSS file for maintainability
- **Tailwind Integration**: Utility classes combined with custom CSS
- **Custom Properties**: CSS variables for easy theming
- **Responsive Design**: Mobile-first approach with media queries

### JavaScript Functionality

- **Mobile Menu**: Simple event-based menu toggle
- **No Dependencies**: Pure vanilla JavaScript for lightweight implementation
- **Smooth Scrolling**: CSS-based smooth scroll behavior

### Performance Considerations

- **Optimized Images**: Use appropriate image formats (AVIF for modern browsers)
- **CSS Optimization**: Tailwind removes unused styles in production builds
- **Minimal JavaScript**: Only essential interactivity included

## 🐛 Known Issues & Limitations

- Appointment form is UI-only (no backend integration)
- Doctor profile links are placeholders
- Social media links are placeholders
- No form validation currently implemented
- Images are local assets (replace with CDN for production)

## 🔮 Future Enhancements

Potential improvements for the project:

- **Backend Integration**: Connect appointment form to a database
- **Doctor Profiles**: Create individual doctor profile pages
- **Blog Section**: Add health tips and medical articles
- **Patient Portal**: Login system for patient records
- **Online Consultation**: Video consultation booking
- **Multi-language Support**: Internationalization (i18n)
- **Dark Mode**: Add theme toggle functionality
- **Accessibility**: Enhanced ARIA labels and keyboard navigation
- **SEO Optimization**: Meta tags, structured data, and sitemap
- **Analytics**: Integrate Google Analytics or similar

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Areas

- Design improvements and UI enhancements
- Accessibility improvements
- Bug fixes
- Documentation updates
- New features and sections
- Performance optimizations

## 📄 License

This project is currently without a license. If you wish to use, modify, or distribute this project, please contact the repository owner or add an appropriate license file.

Recommended licenses for this type of project:

- MIT License (permissive, widely used)
- Apache License 2.0 (permissive with patent protection)
- GNU GPL v3 (copyleft, requires derivative works to be open source)

## 📞 Support

For questions, issues, or suggestions:

- Open an issue on GitHub
- Contact the project maintainer
- Check existing documentation

## 🙏 Acknowledgments

- **Font Awesome**: For the comprehensive icon library
- **Tailwind CSS**: For the utility-first CSS framework
- **Medical Community**: For inspiring the healthcare-focused design

---

**Built with ❤️ for better healthcare accessibility**
