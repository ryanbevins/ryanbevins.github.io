/**
 * Site Content Data
 * This file contains all editable content for the portfolio site
 */

// Hero Section Data
const heroData = {
    title: "Ryan Bevins",
    subtitle: "Game Development",
    introText: "I am a software engineer with years of experience in Unreal Engine and Unity programming/game development, and I'd love to help out with your next project!",
    statusText: "Currently open for freelance projects."
};

// Studios Data
const studiosData = [
    {
        id: 1,
        name: "SimulaM",
        description: "Currently work as lead programmer on various projects for SimulaM.",
        logo: "images/simulam-logo.png"
    },
    {
        id: 2,
        name: "Vexle Studios",
        description: "Worked as character programmer for Vexle Studios on Landieval: Survive to Play.",
        logo: "images/vexle-logo.png"
    },
    {
        id: 3,
        name: "Exiled Republic Studios",
        description: "Worked for Exiled Republic Studios on Tales of Forgotten Heroes. Assistant/AI Programming work.",
        logo: "images/exiled-logo.png"
    }
];

// Skills Data
const skillsData = [
    {
        id: 1,
        name: "Unreal Engine",
        description: "Years of experience developing Unreal Engine games/experiences using C++ and Blueprint. Firm understanding of C++ API and Blueprint.",
        icon: "fab fa-unreal",
        progressPercentage: 100
    },
    {
        id: 2,
        name: "Unity 3D",
        description: "Years of experience developing personal projects in Unity 3D. Firm understanding of C# API.",
        icon: "fab fa-unity",
        progressPercentage: 90
    },
    {
        id: 3,
        name: "C++",
        description: "Years of experience as a software engineer using C++, primarily for game development/general programming purposes.",
        icon: "fas fa-code",
        progressPercentage: 92
    },
    {
        id: 4,
        name: "C#",
        description: "Years of experience as a software engineer using C#, primarily for game development/reverse engineering/general programming purposes.",
        icon: "fas fa-hashtag",
        progressPercentage: 88
    },
    {
        id: 5,
        name: "Reverse Engineering",
        description: "Able to do basic reverse engineering work, and create tools for importing data structures into modern game engines.",
        icon: "fas fa-cogs",
        progressPercentage: 85
    },
    {
        id: 6,
        name: "Git/Version Control",
        description: "I am able to setup version control systems for your project.",
        icon: "fab fa-git-alt",
        progressPercentage: 90
    }
];

// Contact Data
const contactData = {
    title: "Get in Touch",
    subtitle: "Reach out for collaborations or inquiries",
    email: {
        label: "Email",
        value: "ryanbevins@ryanbevinsdev.com",
        icon: "fas fa-envelope"
    },
    discord: {
        label: "Discord",
        value: "akosiryan.",
        icon: "fab fa-discord"
    }
};

// Export the data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        heroData, 
        studiosData, 
        skillsData, 
        contactData 
    };
} 