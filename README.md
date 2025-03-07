# Ryan Bevins Portfolio Website

A modern, responsive portfolio website for Ryan Bevins, a game developer specializing in Unreal Engine and Unity.

## Features

- Modern and responsive design with dark theme
- Interactive portfolio showcasing game development projects
- Contact form for potential clients
- Custom cursor effects and smooth animations
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3 (with CSS variables and modern layout techniques)
- JavaScript (vanilla JS, no frameworks)
- Font Awesome for icons
- Google Fonts (Poppins and Montserrat)

## Project Structure

```
portfolio/
├── index.html              # Main portfolio page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # JavaScript functionality
└── images/                 # Image assets
```

## Setup and Usage

1. Clone or download the repository
2. Open `index.html` in your web browser to view the portfolio
3. No build process or dependencies required - it's a simple static website

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --primary-color-dark: #5649c0;
    --secondary-color: #00cec9;
    /* other variables */
}
```

### Adding Projects

To add new projects to the portfolio, you can either:

1. Edit the HTML directly in `index.html` to add new portfolio items
2. Use the "Load More Projects" functionality by adding projects to the `additionalProjects` array in `main.js`

## Browser Compatibility

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Fonts: Google Fonts (Poppins and Montserrat)
- Icons: Font Awesome
- Design & Development: AI Assistant

## License

This project is available for personal and commercial use.

---

© 2025 Ryan Bevins. All rights reserved. 