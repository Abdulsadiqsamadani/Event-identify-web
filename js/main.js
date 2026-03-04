document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");
  const nav = document.querySelector(".mobile");

  menuBtn.addEventListener("click", () => { nav.classList.add("active"); });
  closeBtn.addEventListener("click", () => { nav.classList.remove("active"); });

  const container = document.getElementById('speakers-container');
  const toggleBtn = document.getElementById('toggle-btn');

  if (!container || !toggleBtn) {
    console.error("container or toggleBtn button missing");
    return;
  }
 
  const speakers = [
    {
      name: "Dr shehu S-Tudu",            
      role: "AI Engineer",
      description: "Dr shehu S Tudu is a senior lecturer in sokoto state university and software development expert building innovative and ethical solutions for Africa. He focus in creating scalable applications that solve real world problems while empowering local tech commuinities.",
      image: "Asset/shehu.jpg",
    },
    {
      name: "Sahalu Aminu Koko",
      role: "Software Developer",
      description: "Sahalu is a fullstack developer experienced in building scalable web applications. He is skilled in both frontend and backend technologoes and enjoys mentoring emerging developers in practical coding solution.",
      image: "Asset/sahalu.png",
       },
    {
      name: "Aliyu Dahiru",
      role: "Cybersecurity Expert",
      description: "Secuirity expert specializing in digital infrastrucutre protection and ethical hacking education across Nigeria.",
      image: "Asset/aliyu.jpg",
    },
    {
      name: "Sadiq Abdulbasid Abdussamad",
      role: "Software Developer",
      description: "Host",
      image: "Asset/sadiq.jpg",
    },
    {
      name: "Abdulaziz Sadiq",
      role: "Data Scientist",
      description: "Data scientist with a passion for leveraging data to drive inisight and informed decision makinng in the tech industry ",
      image: "Asset/abdulaziz.jpg",
    },
    {
      name: "Abdurrahman muhammad bashir",
      role: "Ai Researcher",
      description: "AI researcher focused on dev",
      image: "Asset/abdurrahman.jpg",
    }
  ];

  let showAll = false;

  function displaySpeakers() {
    container.innerHTML = "";

    const speakersToShow = showAll ? speakers : speakers.slice(0, 2);

    speakersToShow.forEach((speaker) => {
      const card = document.createElement("div");
      card.classList.add("speaker-card");

      card.innerHTML = `
        <img src="${speaker.image}" alt="${speaker.name}">
        <div>
          <h1>${speaker.name}</h1>
          <h2>${speaker.role}</h2>
          <p>${speaker.description}</p>
        </div>
      `;

      container.appendChild(card);
    });

    toggleBtn.textContent = showAll ? "Less" : "More";
  }

  toggleBtn.addEventListener("click", () => {
    showAll = !showAll;
    displaySpeakers();
  });

  displaySpeakers();
});

  const joinBtn = document.querySelector(".join-btn");
  const joinSection = document.querySelector(".join-section");

  if (joinBtn && joinSection) {
    joinBtn.addEventListener("click", (e) => {
      e.preventDefault();
      joinSection.classList.toggle("active");
    });
  }
