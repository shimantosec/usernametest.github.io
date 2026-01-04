# Level Designer Portfolio Website

A professional, immersive portfolio website designed for a Level Designer to showcase their work, experience, and design philosophy. This project features a modern, responsive design with dark/light mode support, smooth animations, and a focus on visual storytelling.

## 🚀 Features

*   **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
*   **Dark & Light Mode**: Built-in theme switcher to toggle between a sleek dark mode (default) and a clean light mode.
*   **Interactive UI**:
    *   **Glassmorphism Effects**: Modern frosted glass navigation bar.
    *   **Smooth Scrolling**: Enhanced navigation experience.
    *   **Micro-animations**: Hover effects and transitions for engaging user interaction.
    *   **AOS (Animate On Scroll)**: Elements fade and slide in as you scroll down the page.
*   **Video Background**: Immersive full-screen video background on the hero section.
*   **Project Showcase**: Dedicated sections and pages to display level design projects with details and case studies.
*   **Blog Section**: A place to share thoughts, tutorials, and industry insights.

## 🛠️ Technologies Used

*   **HTML5**: Semantic markup for accessibility and structure.
*   **Tailwind CSS**: Utility-first CSS framework for rapid and custom styling.
    *   Uses Tailwind via CDN for easy setup without a build step (for this specific version).
    *   Custom configuration for colors, fonts, and dark mode.
*   **JavaScript (Vanilla)**:
    *   Theme toggling logic (persisted via `localStorage`).
    *   Mobile menu functionality.
    *   AOS initialization.
*   **AOS (Animate On Scroll)**: Library for scroll animations.
*   **Google Fonts**: 'Inter' for body text and 'Poppins' for headings.

## 📂 Project Structure

```text
/
├── index.html           # Landing page with hero, featured projects, and about section
├── projects.html        # Comprehensive list of all projects
├── project-details.html # Detailed case study view for a single project
├── blog.html            # Blog listing page
├── contact.html         # Contact form and information
├── script.js            # Main JavaScript file (theme toggle, mobile menu, animations)
├── media/               # Directory for images and video assets
└── README.md            # Project documentation
```

## ⚡ How to Run

1.  **Clone or Download** the repository to your local machine.
2.  **Open `index.html`** directly in your modern web browser (Chrome, Firefox, Edge, Safari).
    *   No build process or server installation is strictly required for viewing, as it uses CDN links for Tailwind and AOS.
    *   *Note: For the best experience with local video loading and strict browser security settings, running a simple local server (like Live Server in VS Code) is recommended.*

## 🎨 Customization

*   **Colors & Fonts**: Modified within the `tailwind.config` script block in the `<head>` of each HTML file.
*   **Content**: Update the HTML files to replace placeholder text and images with your own portfolio content.
*   **Images/Video**: Place your assets in the `media/` folder and update the `src` attributes in the HTML.

## 📄 License

This project is open source and available for personal and educational use.
