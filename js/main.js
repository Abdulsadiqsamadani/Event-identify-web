document.addEventListener('DOMContentLoaded', () => {
  console.log("JS connected");

  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn")
  const nav = document.querySelector(".nav")

  closeBtn.addEventlistener("click", () =>{nav.style.display = "none";});
  closeBtn.addEventlistener("click", () =>{nav.style.display = "none";});

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
      image: "Asset/sheu.jpg",
    },
    {
      name: "Sahalu Aminu KOKO",
      role: "Software Developer",
      description: "Sahalu is a fullstack developer experienced in building scalable web applications. He is skilled in both frontend and backend technologoes and enjoys mentoring emerging developers in practical coding solution.",
      image: "Asset/sahalu.JPG",
       },
    {
      name: "Aliyu Dahiru",
      role: "Cybersecurity Expert",
      description: "Secuirity expert specializing in digital infrastrucutre protection and ethical hacking education across Nigeria.",
      image: "asset/aliyu.jpg",
    },
    {
      name: "Sadiq Abdulbasid Abdussamad",
      role: "Software Developer",
      description: "Host",
      image: "asset/sadiq.jpg",
    },
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
          <h3>${speaker.name}</h3>
          <p><strong>${speaker.role}</strong></p>
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