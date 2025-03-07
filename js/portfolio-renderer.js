/**
 * Portfolio Renderer
 * This script handles rendering the portfolio projects from the data source
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio if the grid exists
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        renderPortfolioItems(portfolioGrid);
        
        // Initialize Load More button
        initLoadMoreButton();
    }
});

/**
 * Renders all portfolio items in the main grid
 */
function renderPortfolioItems(grid) {
    // Clear existing content
    grid.innerHTML = '';
    
    // Get projects from localStorage or use default data
    const projects = getProjectsFromStorage();
    
    // Add each project to the grid
    projects.main.forEach(project => {
        const projectHTML = createProjectHTML(project);
        grid.insertAdjacentHTML('beforeend', projectHTML);
    });
    
    // Re-initialize the animations for the new elements
    initializeAnimations();
}

/**
 * Get projects from localStorage or use default data
 */
function getProjectsFromStorage() {
    const storedProjects = localStorage.getItem('portfolioProjects');
    
    if (storedProjects) {
        return JSON.parse(storedProjects);
    }
    
    // Default structure
    return {
        main: portfolioProjects, // From projects-data.js
        additional: additionalProjects // From projects-data.js
    };
}

/**
 * Creates HTML for a single project
 */
function createProjectHTML(project) {
    // Create the view project button only if showViewButton is true
    const viewProjectButton = project.showViewButton 
        ? `<a href="${project.projectUrl}" class="btn view-project">View Project</a>`
        : '';
    
    return `
    <div class="portfolio-item" data-project-id="${project.id}">
        <div class="portfolio-image">
            <img src="${project.image}" alt="${project.title}">
            <div class="portfolio-overlay">
                <div class="portfolio-info">
                    <h3>${project.title}</h3>
                    <p>${project.role}</p>
                    ${viewProjectButton}
                </div>
            </div>
        </div>
        <div class="portfolio-details">
            <h3>${project.title}</h3>
        </div>
    </div>
    `;
}

/**
 * Initialize Load More button functionality
 */
function initLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more');
    const viewMoreContainer = document.querySelector('.view-more');
    
    if (!loadMoreBtn || !viewMoreContainer) return;
    
    // Get projects from localStorage
    const projects = getProjectsFromStorage();
    
    // Hide button if there are no additional projects
    if (!projects.additional || projects.additional.length === 0) {
        viewMoreContainer.style.display = 'none';
        return;
    }
    
    let projectsLoaded = false;
    
    loadMoreBtn.addEventListener('click', function() {
        if (projectsLoaded) {
            return;
        }
        
        const portfolioGrid = document.querySelector('.portfolio-grid');
        
        if (!portfolioGrid) return;
        
        // Show loading state
        loadMoreBtn.textContent = 'Loading...';
        loadMoreBtn.disabled = true;
        
        // Simulate loading delay
        setTimeout(function() {
            // Add additional projects to the grid
            projects.additional.forEach(project => {
                const projectHTML = createProjectHTML(project);
                portfolioGrid.insertAdjacentHTML('beforeend', projectHTML);
                
                // Get the newly added element
                const addedElement = portfolioGrid.lastElementChild;
                addedElement.style.opacity = '0';
                
                // Trigger fade in animation
                setTimeout(() => {
                    addedElement.style.transition = 'opacity 0.5s ease';
                    addedElement.style.opacity = '1';
                }, 100);
            });
            
            // Update button state
            loadMoreBtn.textContent = 'All Projects Loaded';
            loadMoreBtn.disabled = true;
            projectsLoaded = true;
            
            // Initialize any animations or events on the new items
            initializeAnimations();
            
            // Optionally hide the button after loading all projects
            setTimeout(() => {
                viewMoreContainer.style.display = 'none';
            }, 2000);
            
        }, 800); // Simulate network delay
    });
}

/**
 * Initializes animations for the newly added elements
 */
function initializeAnimations() {
    const fadeElements = document.querySelectorAll('.portfolio-item');
    
    if (fadeElements.length) {
        const fadeInOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const fadeInObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fadeIn');
                    observer.unobserve(entry.target);
                }
            });
        }, fadeInOptions);
        
        fadeElements.forEach(element => {
            // Only observe elements that don't already have the fadeIn class
            if (!element.classList.contains('fadeIn')) {
                fadeInObserver.observe(element);
            }
        });
    }
} 