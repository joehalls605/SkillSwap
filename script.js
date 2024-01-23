const developersData = [
  {
    name: "Alice James",
    programmingLanguage: "Javascript",
    interviewCoaching: true,
    resumeHelp: true,
    developmentStrategy: true, // Add or update this property
    available: "Yes",
    pricePerHour: 50,
    image: "./images/AliceJames.jpg",
    bio: "I am Alice James, an experienced JavaScript developer with a passion for creating dynamic and responsive web applications..."
  },
  {
    name: "James Roedan",
    programmingLanguage: "Python",
    interviewCoaching: true,
    resumeHelp: true,
    developmentStrategy: true, // Add or update this property
    available: "No",
    pricePerHour: 60,
    image: "./images/JamesRoedan.jpg",
    bio: "Hello, I'm James Roedan, a Python enthusiast specializing in backend development and data science..."
  },
  {
    name: "Charlie Wano",
    programmingLanguage: "Java",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/CharlieWano.jpg",
    bio: "I'm Charlie Wano, a seasoned Java developer with a focus on enterprise-level applications..."
  },
  {
    name: "David Roberts",
    programmingLanguage: "Ruby",
    interviewCoaching: true,
    developmentStrategy: true, // Add or update this property
    available: "Yes",
    pricePerHour: 45,
    image: "./images/DavidRoberts.jpg",
    bio: "Greetings! I'm David Roberts, a Ruby developer with a passion for building elegant and maintainable code..."
  },
  {
    name: "Xavi Gonzalez",
    programmingLanguage: "C#",
    available: "No",
    resumeHelp: true,
    developmentStrategy: true, // Add or update this property
    pricePerHour: 65,
    image: "./images/XaviGonzalez.jpg",
    bio: "Hello, I'm Xavi Gonzalez, a dedicated C# developer specializing in Windows application development and .NET technologies..."
  },
  {
    name: "Frank Jackson",
    programmingLanguage: "PHP",
    available: "Yes",
    pricePerHour: 40,
    image: "./images/FrankJackson.jpg",
    bio: "I am Frank Jackson, an experienced PHP developer with a strong foundation in backend web development..."
  },
  {
    name: "Henrich Burchards",
    programmingLanguage: "Swift",
    available: "Yes",
    pricePerHour: 55,
    image: "./images/HenrichBurchards.jpg",
    bio: "Hey there! I'm Henrich Burchards, a Swift developer passionate about crafting delightful iOS applications..."
  },
];


  // DEVELOPERS LIST


  const developersWidget = document.getElementById("developers");

    developersData.forEach(developer => {
        const developerDiv = document.createElement("div");
        developerDiv.classList.add("developer");

        developerDiv.innerHTML = 
        `<h3>${developer.name}</h3>
        <p>${developer.bio}</p>
        <p>Skill: ${developer.programmingLanguage}</p>
        <p>Available: ${developer.available}</p>
        <p>From £${developer.pricePerHour}</p>
        <img src="${developer.image}">
        `
        developersWidget.append(developerDiv);
    });

  // DEVELOPERS FILTER

    function filterDevelopers(){

      const programmingLanguageFilter = document.getElementById("programmingLanguage").value;
      const interviewCoachingFilter = document.getElementById("interviewCoaching").checked;
      const resumeHelpFilter = document.getElementById("resumeHelp").checked;
      const developmentStrategyFilter = document.getElementById("developmentStrategy").checked;
      const availabilityFilter = document.getElementById("availability").value;

      const filteredDevelopers = developersData.filter(developer => {
        return (
            // Check if programmingLanguageFilter is empty or matches developer's programming language
            (programmingLanguageFilter === '' || developer.programmingLanguage === programmingLanguageFilter) &&
            // Check if interviewCoachingFilter is not selected or developer offers interview coaching
            (!interviewCoachingFilter || developer.interviewCoaching) &&
            // Check if resumeHelpFilter is not selected or developer offers resume help
            (!resumeHelpFilter || developer.resumeHelp) &&
            // Check if developmentStrategyFilter is not selected or developer offers development strategy support
            (!developmentStrategyFilter || developer.developmentStrategy) &&
            // Check if availabilityFilter is empty or matches developer's availability
            (availabilityFilter === '' || developer.available === availabilityFilter)
        );
    });

 // RENDERING THE FILTERED DEVELOPERS
   
    renderDevelopers(filteredDevelopers);
    }

    function renderDevelopers(filteredDevelopers) {
      const developersWidget = document.getElementById("developers");
      // Clear existing content
      developersWidget.innerHTML = "";
  
      // Render filtered developers
      filteredDevelopers.forEach(developer => {
          const developerDiv = document.createElement("div");
          developerDiv.classList.add("developer");
  
          developerDiv.innerHTML =
              `<h3>${developer.name}</h3>
              <p>${developer.bio}</p>
              <p>Skill: ${developer.programmingLanguage}</p>
              <p>Available: ${developer.available}</p>
              <p>From £${developer.pricePerHour}</p>
              <img src="${developer.image}">
              `;
  
          developersWidget.appendChild(developerDiv);
      });
  }





    // CONTACT FORM SUBMIT

    function submitForm() {
        const currentSkills = document.getElementById("currentSkills");
        const desiredSkills = document.getElementById("desiredSkills");
        const availability = document.getElementById("availability");

        if (!currentSkills || !desiredSkills || !availability) {
            const error = document.createElement("p");
            error.textContent = "All fields have to be completed";
            const notice = document.getElementById("notice");
            notice.append(error);
        }
    }
