// Portfolio Projects Data
const portfolioProjects = [
    {
        id: 1,
        title: "I Am Jesus Christ",
        role: "Lead Programmer & Game Director",
        image: "images/i-am-jesus-christ.jpg",
        showViewButton: true,
        projectUrl: "#"
    },
    {
        id: 2,
        title: "Dragon Ball: Demon Breaker",
        role: "Lead Programmer",
        image: "images/dragon-ball.jpg",
        showViewButton: true,
        projectUrl: "#"
    },
    {
        id: 3,
        title: "Protodroid DeLTA",
        role: "Assistant Programmer",
        image: "images/protodroid.jpg",
        showViewButton: true,
        projectUrl: "#"
    },
    {
        id: 4,
        title: "Project Borealis",
        role: "Interim Lead Programmer",
        image: "images/project-borealis.jpg",
        showViewButton: true,
        projectUrl: "#"
    },
    {
        id: 5,
        title: "Tales of Forgotten Heroes",
        role: "Assistant/AI Programmer",
        image: "images/forgotten-heroes.jpg",
        showViewButton: false,
        projectUrl: "#"
    },
    {
        id: 6,
        title: "Project Notebook",
        role: "Lead Programmer",
        image: "images/project-notebook.jpg",
        showViewButton: false,
        projectUrl: "#"
    }
];

// Additional projects that load when clicking "Load More"
const additionalProjects = [
    {
        id: 7,
        title: "GoWang: Clash on Demonhead",
        role: "Lead Programmer",
        image: "images/gowang.jpg",
        showViewButton: false,
        projectUrl: "#"
    },
    {
        id: 8,
        title: "Landieval: Survive to Play",
        role: "Character Programmer",
        image: "images/landieval.jpg",
        showViewButton: false,
        projectUrl: "#"
    }
];

// Export the data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioProjects, additionalProjects };
} 