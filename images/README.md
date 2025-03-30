# Image Organization Structure

## Directory Structure

```
images/
├── logos/
│   ├── learnet-logo.png
│   ├── learnet-logo-white.png
│   └── favicon.ico
├── icons/
│   ├── search.svg
│   ├── menu.svg
│   ├── user.svg
│   ├── notification.svg
│   ├── settings.svg
│   ├── play.svg
│   ├── download.svg
│   ├── bookmark.svg
│   ├── heart.svg
│   └── share.svg
├── avatars/
│   ├── default-user.png
│   ├── instructor-1.jpg
│   ├── instructor-2.jpg
│   ├── instructor-3.jpg
│   ├── student-1.jpg
│   ├── student-2.jpg
│   └── student-3.jpg
├── banners/
│   ├── hero-banner.jpg
│   ├── promo-banner-1.jpg
│   └── promo-banner-2.jpg
├── courses/
│   ├── web-development.jpeg
│   ├── mobile-development.jpeg
│   ├── data-science.jpeg
│   ├── machine-learning.jpeg
│   ├── javascript.jpeg
│   ├── python.jpeg
│   └── react.png
├── categories/
│   ├── web-dev.jpg
│   ├── mobile-dev.jpg
│   ├── data-science.jpg
│   ├── machine-learning.jpg
│   ├── design.jpg
│   └── business.jpg
└── testimonials/
    ├── testimonial-1.jpg
    ├── testimonial-2.jpg
    └── testimonial-3.jpg
```

## Image Specifications

### Logos
- Main logo: 200x50px, PNG with transparency
- White logo: 200x50px, PNG with transparency
- Favicon: 32x32px, ICO format

### Icons
- All icons: SVG format for scalability
- Recommended size: 24x24px

### Avatars
- User avatars: 150x150px, JPG
- Square aspect ratio
- Centered faces with some padding

### Banners
- Hero banner: 1920x600px, JPG
- Promo banners: 1200x400px, JPG
- Optimized for web (file size < 200KB)

### Course Images
- Thumbnail size: 600x400px, JPG/PNG
- 16:9 aspect ratio
- File size < 100KB

### Category Images
- Size: 400x300px, JPG
- 4:3 aspect ratio
- File size < 80KB

### Testimonial Images
- Size: 300x300px, JPG
- Square aspect ratio
- High-quality headshots

## Usage Guidelines

1. Always use the appropriate image format:
   - SVG for icons and simple graphics
   - PNG for logos and images requiring transparency
   - JPG for photographs and complex images
   
2. Optimize all images for web use:
   - Compress images appropriately
   - Use modern formats when possible (WebP with fallbacks)
   - Consider lazy loading for better performance

3. Maintain consistent naming conventions:
   - Use lowercase letters
   - Separate words with hyphens
   - Be descriptive but concise
   - Include dimensions in filename if relevant

4. Accessibility:
   - Always provide alt text in HTML
   - Ensure sufficient color contrast
   - Consider reduced motion preferences 