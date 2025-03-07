/**
 * Site Content Renderer
 * This script handles rendering the dynamic content on the portfolio site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all dynamic sections
    renderHeroSection();
    renderStudiosSection();
    renderSkillsSection();
    renderContactSection();
});

/**
 * Get site data from localStorage or use default
 */
function getSiteData() {
    const storedHeroData = localStorage.getItem('heroData');
    const storedStudiosData = localStorage.getItem('studiosData');
    const storedSkillsData = localStorage.getItem('skillsData');
    const storedContactData = localStorage.getItem('contactData');
    
    return {
        hero: storedHeroData ? JSON.parse(storedHeroData) : heroData,
        studios: storedStudiosData ? JSON.parse(storedStudiosData) : studiosData,
        skills: storedSkillsData ? JSON.parse(storedSkillsData) : skillsData,
        contact: storedContactData ? JSON.parse(storedContactData) : contactData
    };
}

/**
 * Render the hero section
 */
function renderHeroSection() {
    const heroTitle = document.querySelector('.hero-content h1');
    const heroSubtitle = document.querySelector('.hero-content h2');
    const heroIntro = document.querySelector('.hero-content .intro-text');
    const heroStatus = document.querySelector('.hero-content p:not(.intro-text)');
    
    if (!heroTitle || !heroSubtitle || !heroIntro || !heroStatus) return;
    
    const data = getSiteData().hero;
    
    heroTitle.textContent = data.title;
    heroSubtitle.textContent = data.subtitle;
    heroIntro.textContent = data.introText;
    heroStatus.textContent = data.statusText;
}

/**
 * Render the studios section
 */
function renderStudiosSection() {
    const studiosGrid = document.querySelector('.studios-grid');
    
    if (!studiosGrid) return;
    
    // Clear existing content
    studiosGrid.innerHTML = '';
    
    // Get studios data
    const studios = getSiteData().studios;
    
    // Render each studio
    studios.forEach(studio => {
        const studioHTML = `
        <div class="studio-item" data-studio-id="${studio.id}">
            <div class="studio-logo">
                <img src="${studio.logo}" alt="${studio.name}">
            </div>
            <div class="studio-info">
                <h3>${studio.name}</h3>
                <p>${studio.description}</p>
            </div>
        </div>
        `;
        
        studiosGrid.insertAdjacentHTML('beforeend', studioHTML);
    });
}

/**
 * Render the skills section
 */
function renderSkillsSection() {
    const skillsGrid = document.querySelector('.skills-grid');
    
    if (!skillsGrid) return;
    
    // Clear existing content
    skillsGrid.innerHTML = '';
    
    // Get skills data
    const skills = getSiteData().skills;
    
    // Render each skill
    skills.forEach(skill => {
        // Set default values for scale, color, and offsets if not present
        const svgScale = skill.svgScale || 60;
        const svgColor = skill.svgColor || '#6c5ce7';
        const svgOffsetX = skill.svgOffsetX || 0;
        const svgOffsetY = skill.svgOffsetY || 0;
        const colorFilter = getColorFilter(svgColor);
        
        // Determine what to display for the icon
        let iconDisplay;
        if (skill.customIcon && skill.customIcon.trim()) {
            // If it's a path to an SVG file
            if (skill.customIcon.endsWith('.svg')) {
                // Calculate transform with scale and offsets centered from top/left 50%
                const transformValue = `translate(calc(-50% + ${svgOffsetX}px), calc(-50% + ${svgOffsetY}px)) scale(${svgScale/100})`;
                iconDisplay = `<img src="${skill.customIcon}" alt="${skill.name} icon" class="custom-svg-icon" style="transform: ${transformValue}; filter: brightness(0) saturate(100%) ${colorFilter};">`;
            } 
            // If it's inline SVG code
            else if (skill.customIcon.startsWith('<svg')) {
                iconDisplay = skill.customIcon;
            }
            // Fallback to Font Awesome icon
            else {
                iconDisplay = `<i class="${skill.icon}"></i>`;
            }
        } else {
            iconDisplay = `<i class="${skill.icon}"></i>`;
        }

        const skillHTML = `
        <div class="skill-item" data-skill-id="${skill.id}">
            <div class="skill-icon">
                ${iconDisplay}
            </div>
            <div class="skill-info">
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
                <div class="skill-level">
                    <div class="skill-progress" style="width: ${skill.progressPercentage}%;"></div>
                </div>
            </div>
        </div>
        `;
        
        skillsGrid.insertAdjacentHTML('beforeend', skillHTML);
    });
}

/**
 * Convert a hex color to CSS filter (approximate)
 * @param {string} hexColor - Hex color code
 * @returns {string} CSS filter string
 */
function getColorFilter(hexColor) {
    // Default to primary color filter if no color provided
    if (!hexColor || hexColor === '#6c5ce7') {
        return 'invert(44%) sepia(96%) saturate(2066%) hue-rotate(233deg) brightness(86%) contrast(93%)';
    }
    
    // Convert hex to RGB
    let r = parseInt(hexColor.slice(1, 3), 16) / 255;
    let g = parseInt(hexColor.slice(3, 5), 16) / 255;
    let b = parseInt(hexColor.slice(5, 7), 16) / 255;
    
    // Calculate brightness and hue
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let d = max - min;
    let h = 0;
    let s = max === 0 ? 0 : d / max;
    let v = max;
    
    if (d !== 0) {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h = h / 6;
    }
    
    // Convert to filter parameters (approximation)
    const hueRotate = Math.round(h * 360);
    const saturate = Math.round(s * 100);
    const brightness = Math.round(v * 100);
    
    return `invert(50%) sepia(100%) saturate(${saturate}%) hue-rotate(${hueRotate}deg) brightness(${brightness}%) contrast(90%)`;
}

/**
 * Render the contact section
 */
function renderContactSection() {
    const contactSection = document.querySelector('.contact');
    
    if (!contactSection) return;
    
    // Get contact data
    const data = getSiteData().contact;
    
    // Update section title and subtitle
    const sectionTitle = contactSection.querySelector('.section-header h2');
    const sectionSubtitle = contactSection.querySelector('.section-header p');
    
    if (sectionTitle) sectionTitle.textContent = data.title;
    if (sectionSubtitle) sectionSubtitle.textContent = data.subtitle;
    
    // Update email contact
    const emailIcon = contactSection.querySelector('.contact-method:first-child .contact-icon i');
    const emailLabel = contactSection.querySelector('.contact-method:first-child .contact-details h3');
    const emailValue = contactSection.querySelector('.contact-method:first-child .contact-details p a');
    
    if (emailIcon) emailIcon.className = data.email.icon;
    if (emailLabel) emailLabel.textContent = data.email.label;
    if (emailValue) {
        emailValue.textContent = data.email.value;
        emailValue.href = `mailto:${data.email.value}`;
    }
    
    // Update discord contact
    const discordIcon = contactSection.querySelector('.contact-method:nth-child(2) .contact-icon i');
    const discordLabel = contactSection.querySelector('.contact-method:nth-child(2) .contact-details h3');
    const discordValue = contactSection.querySelector('.contact-method:nth-child(2) .contact-details p');
    
    if (discordIcon) discordIcon.className = data.discord.icon;
    if (discordLabel) discordLabel.textContent = data.discord.label;
    if (discordValue) discordValue.textContent = data.discord.value;
} 