const developersData = [
    {
      name: "Alice Johnson",
      programmingLanguage: "JavaScript",
      available: "Yes",
      pricePerHour: 50
    },
    {
      name: "Bob Smith",
      programmingLanguage: "Python",
      available: "No",
      pricePerHour: 60
    },
    {
      name: "Charlie Wang",
      programmingLanguage: "Java",
      available: "Yes",
      pricePerHour: 55
    },
    {
      name: "David Rodriguez",
      programmingLanguage: "Ruby",
      available: "Yes",
      pricePerHour: 45
    },
    {
      name: "Eva Gonzalez",
      programmingLanguage: "C#",
      available: "No",
      pricePerHour: 65
    },
    {
      name: "Frank Chen",
      programmingLanguage: "PHP",
      available: "Yes",
      pricePerHour: 40
    },
    {
      name: "Grace Kim",
      programmingLanguage: "Swift",
      available: "Yes",
      pricePerHour: 55
    },
  ];

  const developersWidget = document.getElementById("developers");

    developersData.forEach(developer => {
        const developerDiv = document.createElement("div");
        developerDiv.innerHTML = 
        `<h3>${developer.name}</h3>
        <p>${developer.programmingLanguage}</p>
        <p>${developer.available}</p>
        <p>${developer.pricePerHour}</p>
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
