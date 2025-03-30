# Learnet - Modern E-Learning Platform

<div align="center">
  <img src="images/logos/learnet-logo.png" alt="Learnet Logo" width="200px">
  <br><br>
  
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![FontAwesome](https://img.shields.io/badge/Font_Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)

  <p>A comprehensive e-learning platform delivering engaging and interactive educational experiences</p>
</div>

## 📋 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Design System](#-design-system)
- [Responsive Design](#-responsive-design)
- [Accessibility](#-accessibility)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Roadmap](#-roadmap)
- [License](#-license)

## 🚀 Overview

Learnet is a state-of-the-art e-learning platform designed to provide an engaging and interactive online learning experience. The platform features a modern, responsive interface with intuitive navigation and a rich set of features for both students and instructors.

Built with modern web technologies and best practices, Learnet offers a seamless learning experience across desktop and mobile devices, with a focus on accessibility, performance, and user engagement.

## ✨ Features

### For Students
- **📹 Interactive Video Player**: Custom-built player with playback controls, bookmarking, and progress tracking
- **📊 Personalized Dashboard**: Dynamic dashboard showing enrolled courses, progress, and recommendations
- **📈 Progress Tracking**: Visual indicators and detailed statistics on course completion
- **📝 In-Video Notes**: Take timestamped notes while watching video lectures
- **💬 Discussion Forums**: Course-specific Q&A sections for student interaction
- **📚 Resource Library**: Access to downloadable course materials and supplementary resources
- **📱 Fully Responsive**: Consistent experience across all devices and screen sizes

### For Instructors
- **🧰 Course Management**: Comprehensive tools to create, edit, and manage course content
- **📤 Content Uploading**: Streamlined process for uploading videos, documents, and resources
- **📊 Student Analytics**: Detailed insights into student engagement and performance metrics
- **🛡️ Moderation Tools**: Efficient management of course discussions and student questions

## 📸 Screenshots

<div align="center">
  <img src="images/screenshots/homepage.jpg" alt="Learnet Homepage" width="80%">
  <p><em>Homepage showcasing featured courses and platform benefits</em></p>
  <br>
  
  <img src="images/screenshots/video-player.jpg" alt="Learnet Video Player" width="80%">
  <p><em>Interactive video player with course content sidebar</em></p>
  <br>
  
  <img src="images/screenshots/dashboard.jpg" alt="Learnet Dashboard" width="80%">
  <p><em>Student dashboard with progress tracking and course recommendations</em></p>
</div>

## 🛠 Tech Stack

### Frontend
- **HTML5**: Semantic markup for improved accessibility and SEO
- **CSS3**: Modern styling with custom properties, flexbox, and grid layouts
- **JavaScript (ES6+)**: Enhanced interactivity and dynamic content
- **Font Awesome 6**: Comprehensive icon library for visual elements
- **Inter Font Family**: Clean, modern typography for improved readability

### Design Principles
- **Mobile-First**: Responsive design that works flawlessly on all devices
- **WCAG Compliance**: Adhering to Web Content Accessibility Guidelines 2.1
- **Consistent Theming**: Unified color scheme and visual hierarchy
- **Performance Optimization**: Minimized resources and optimized asset delivery

## 📁 Project Structure

```
/
├── css/                      # Stylesheets
│   ├── styles.css            # Main stylesheet
│   ├── video-player.css      # Video player specific styles
│   └── dashboard.css         # Dashboard specific styles
├── js/                       # JavaScript files
│   ├── script.js             # Main JavaScript file
│   ├── video-player.js       # Video player functionality
│   └── dashboard.js          # Dashboard functionality
├── images/                   # Image assets
│   ├── logos/                # Brand logos and identity
│   ├── icons/                # UI icons
│   ├── avatars/              # User avatars
│   ├── banners/              # Banner images
│   ├── courses/              # Course thumbnail images
│   ├── categories/           # Category images
│   └── testimonials/         # User testimonial images
├── videos/                   # Course video content
├── index.html                # Landing page
├── dashboard.html            # User dashboard
├── course-catalog.html       # Course browsing interface
├── course-details.html       # Individual course information
├── video-player.html         # Video lesson player
├── profile.html              # User profile page
└── README.md                 # Project documentation
```

## 📄 Pages

### Landing Page (index.html)
The landing page serves as the gateway to the platform, showcasing its value proposition and core offerings:
- Dynamic hero section with compelling call-to-action
- Interactive course category navigation
- Curated selection of featured and trending courses
- Social proof through student testimonials
- Featured instructor profiles and credentials
- Platform benefits and unique selling points

### Dashboard (dashboard.html)
The personalized student hub providing at-a-glance insights into learning progress:
- Current and recently accessed courses
- AI-powered course recommendations
- Learning activity timeline
- Achievement tracking and gamification elements
- Personalized learning statistics and goals

### Course Catalog (course-catalog.html)
A comprehensive course discovery interface with powerful filtering options:
- Advanced category and subcategory navigation
- Real-time search functionality with suggestions
- Multiple sorting options (popularity, rating, date, etc.)
- Detailed course cards with key information
- Filter by difficulty level, duration, and price

### Course Details (course-details.html)
In-depth course information to help students make informed decisions:
- Comprehensive course overview and learning objectives
- Detailed curriculum with lesson previews
- Instructor biography and expertise
- Student reviews and ratings
- Related and complementary courses

### Video Player (video-player.html)
The core learning environment with advanced functionality:
- Custom video player with adaptive streaming
- Course content sidebar with progress indicators
- Integrated note-taking system with timestamps
- Downloadable resources and materials
- Threaded discussion forum for questions and answers

### Profile (profile.html)
User account management and personalization:
- Profile information and preferences
- Learning achievements and certificates
- Course enrollment history
- Account settings and notifications management

## 🎨 Design System

### Color Scheme
- **Primary**: #3b82f6 (Blue) - Used for primary actions, links, and emphasis
- **Secondary**: #22c55e (Green) - Used for success states and completions
- **Text**: #1e293b (Dark Blue) - Primary text color for optimal readability
- **Background**: #f8fafc (Light Gray) - Clean, neutral background
- **Accents**: #e2e8f0, #64748b (Medium Gray) - Used for subtle separations and secondary elements

### Typography
- **Primary Font**: Inter (Sans-serif) - Modern, highly readable typeface
- **Headings**: 700 weight - Bold for clear visual hierarchy
- **Body Text**: 400 weight - Optimal readability for content
- **UI Elements**: 500 weight - Enhanced visibility for interface elements

### UI Components
- **Cards**: Subtle shadows with rounded corners for content containers
- **Gradients**: Linear and radial gradients for visual emphasis
- **Avatars**: Circular frames for user and instructor images
- **Progress Indicators**: Visual feedback for course completion
- **Interactive Elements**: Hover and active states for all controls
- **Iconography**: Consistent icon system for intuitive navigation

## 📱 Responsive Design

The platform implements a true mobile-first design approach with carefully considered breakpoints:
- **Mobile**: 0-768px - Optimized for smartphone viewing
- **Tablet**: 768px-1024px - Enhanced layouts for medium-sized screens
- **Desktop**: 1024px+ - Full-featured experience for larger displays

Key responsive features include:
- Fluid grid layouts that adapt to screen size
- Responsive typography with appropriate scaling
- Collapsible navigation for smaller screens
- Touch-optimized controls for mobile devices
- Responsive images that adapt to viewport size and resolution

## ♿ Accessibility

Learnet prioritizes accessibility with strict adherence to WCAG 2.1 AA standards:
- **Semantic HTML**: Proper document structure and landmark elements
- **ARIA Attributes**: Enhanced screen reader support where needed
- **Keyboard Navigation**: Full functionality without requiring mouse input
- **Color Contrast**: WCAG AA-compliant contrast ratios throughout
- **Alternative Text**: Descriptive alt attributes for all images
- **Focus States**: Clear visual indicators for keyboard navigation

## ⚡ Performance Optimization

The platform is optimized for speed and efficiency:
- Asset optimization with modern image formats and compression
- Minimal and efficient CSS with optimized selectors
- Modular JavaScript with efficient DOM manipulation
- Lazy loading for images and video content
- Strategic resource bundling to minimize HTTP requests
- Server response optimization and caching strategies

## 🌐 Browser Support

Learnet is thoroughly tested and optimized for:
- **Chrome**: Latest 2 major versions
- **Firefox**: Latest 2 major versions
- **Safari**: Latest 2 major versions
- **Edge**: Latest 2 major versions
- **Mobile Browsers**: iOS Safari and Android Chrome (latest versions)

## 🔮 Roadmap

Future platform enhancements planned for upcoming releases:
- **Live Learning**: Real-time video sessions with WebRTC integration
- **Gamification**: Comprehensive badge and rewards system
- **Payment System**: Flexible subscription models and course bundles
- **Instructor Tools**: Course creation studio with analytics
- **Mobile Apps**: Native iOS and Android applications
- **Offline Access**: Download courses for offline viewing
- **Advanced Analytics**: AI-powered learning insights dashboard

## 📝 License

© made with ❤️ Abhishek.

---

<div align="center">
  <p>Designed and developed with ❤️ by the abhishek</p>
</div> 