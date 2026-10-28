const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "https://picsum.photos/id/1005/300/300"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "https://picsum.photos/id/64/300/300"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "https://picsum.photos/id/1025/300/300"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "https://picsum.photos/id/338/300/300"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "https://picsum.photos/id/342/300/300"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "https://picsum.photos/id/334/300/300"
  }
];

// Selezioniamo gli elementi corretti basati sul tuo HTML
const containerEl = document.querySelector(".team-grid");
const nameEl = document.getElementById("newname");
const roleEl = document.getElementById("newrole");
const emailEl = document.getElementById("newemail");
const imageEl = document.getElementById("newimage");
const formEl = document.getElementById("team-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const newMember = {
    name: nameEl.value,
    role: roleEl.value,
    email: emailEl.value,
    img: imageEl.value
  };

  
  teamMembers.push(newMember);


  containerEl.innerHTML += `
    <div class="team-card">
      <div class="card-img">
        <img src="${newMember.img}" alt="${newMember.name}">
      </div>
      <div class="card-info">
        <h3>${newMember.name}</h3>
        <p class="role">${newMember.role}</p>
        <a class="email" href="mailto:${newMember.email}">${newMember.email}</a>
      </div>
    </div>
  `;

  // 4. Ripuliamo i campi del form dopo l'invio
  formEl.reset();
});
   
