const developersData = [
    {
      name: "Alice James",
      programmingLanguage: "JavaScript",
      available: "Yes",
      pricePerHour: 50,
      image: "./images/AliceJames.jpg",
      bio: "I am Alice James, an experienced JavaScript developer with a passion for creating dynamic and responsive web applications..."
    },
    {
      name: "James Roedan",
      programmingLanguage: "Python",
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
      available: "Yes",
      pricePerHour: 45,
      image: "./images/DavidRoberts.jpg",
      bio: "Greetings! I'm David Roberts, a Ruby developer with a passion for building elegant and maintainable code..."
    },
    {
      name: "Xavi Gonzalez",
      programmingLanguage: "C#",
      available: "No",
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
