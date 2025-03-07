// Portfolio Projects Data
const portfolioProjects = [
    {
      "id": 1,
      "title": "I Am Jesus Christ",
      "role": "Lead Programmer & Game Director",
      "image": "images/i-am-jesus-christ.jpg",
      "showViewButton": true,
      "projectUrl": "https://store.steampowered.com/app/1198970/I_Am_Jesus_Christ/"
    },
    {
      "id": 2,
      "title": "Dragon Ball: Demon Breaker",
      "role": "Lead Programmer",
      "image": "images/dragon-ball-demon-breaker.webp",
      "showViewButton": true,
      "projectUrl": "https://www.youtube.com/watch?v=eetGAOet2a8&t=220s"
    },
    {
      "id": 3,
      "title": "Protodroid DeLTA",
      "role": "Boss AI Assistance",
      "image": "images/protodroid-delta.jpg",
      "showViewButton": true,
      "projectUrl": "https://store.steampowered.com/app/1276740/Protodroid_DeLTA/"
    },
    {
      "id": 4,
      "title": "Project Borealis",
      "role": "Interim Lead Programmer",
      "image": "images/project-borealis.jpg",
      "showViewButton": true,
      "projectUrl": "https://store.steampowered.com/app/2215490/Project_Borealis_Prologue/"
    },
    {
      "id": 7,
      "title": "GoWang: Clash on Demonhead",
      "role": "Lead Programmer",
      "image": "images/gowang.jpg",
      "showViewButton": true,
      "projectUrl": "https://store.steampowered.com/app/1900500/Gowang_Clash_On_Demonhead/"
    },
    {
      "id": 1741293508243,
      "title": "Yakuza Shadows of New York",
      "role": "Lead Programmer",
      "image": "images/yakuza.jpg",
      "showViewButton": true,
      "projectUrl": "https://store.playstation.com/en-us/product/UB0859-CUSA51854_00-0006259631461352"
    }
];

// Additional projects that load when clicking "Load More"
const additionalProjects = [
];

// Export the data for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioProjects, additionalProjects };
} 