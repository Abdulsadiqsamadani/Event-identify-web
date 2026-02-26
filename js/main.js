document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const nav = document.querySelector('.nav');

  menuBtn.addEventListener('click', () => {
    nav.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
  });

  const speakers = [
    {
      name: "Dr shehu S-Tudu",
      role: "AI Engineer",
      description: "Dr shehu S Tudu is a senior lecturer in sokoto state university and software development expert building innovative and ethical solutions for Africa. He focus in creating scalable applications that solve real world problems while empowering local tech commuinities.",
    },
    {
      name: "Sahalu Aminu KOKO",
      role: "Software Developer",
      description: "Sahalu is a fullstack developer experienced in building scalable web applications. He is skilled in both frontend and backend technologoes and enjoys mentoring emerging developers in practical coding solution.",
    },
    {
      name: "Aliyu Dahiru",
      role: "Cyber secuirity Expert",
      description: "Mal Aliyu is a cybersecurity expert with over 10 years of experience in securing digital infrastructures across Africa, mal ALiyu dahiru specialize in securing infratructure and protecting orgniazation against cyber threats. He trains young developers on best secuirity practices and ethical hacking to build a safer online ecosystem",
    },
    {
      name: "Sadiq Abdulbasid Abdussamad",
      role: "software developer",
      description: "host",
    },
  ];
  

  const container = document.getElementById('speakers-container');

  speakers.forEach((speaker) => {
    const card = document.createElement('div');
    card.innerHTML = `
      <img src="${speaker.image}" al
      <h2>${speaker.name}</h2>
      <p><strong>${speaker.role}</strong></p>
      <p>${speaker.description}</p>
    `;
    container.appendChild(card);
  });
});