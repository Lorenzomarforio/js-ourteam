const inizialeTeamMembers = [
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
const newTeamMembers = [];

const containerEl = document.getElementById("our-team");
const nameEl = document.getElementById("newname");
const roleEl = document.getElementById("newrole");
const emailEl = document.getElementById("newemail");
const imageEl = document.getElementById("newimage");
const formEl = document.getElementById("team-form");

let teamMembers = JSON.parse(localStorage.getItem("inizialeTeamMembers"));
  localStorage.setItem("inizialeTeamMembers", JSON.stringify("inizialeTeamMembers"));



function renderTeam() {

  inizialeTeamMembers.forEach((member) => {
    containerEl.innerHTML +=`
      <div class="team-card">
        <div class="card-img">
          <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="card-info">
          <h3>${member.name}</h3>
          <p class="role">${member.role}</p>
          <a class="email" href="mailto:${member.email}">${member.email}</a>
        </div>
      </div>
    `;
  });
}


// renderTeam();



formEl.addEventListener("submit", (event) => {
  event.preventDefault();
 
  const newMember = {
    name: nameEl.value,
    role: roleEl.value,
    email: emailEl.value,
    img: imageEl.value
  };
 
  inizialeTeamMembers.push(newMember);
  localStorage.clear("inizialeTeamMembers");
  containerEl.innerHTML = "";
  renderTeam();
console.log(newMember)
 
  localStorage.setItem("inizialeTeamMembers", JSON.stringify(inizialeTeamMembers));
  function renderNewTeam() {

/*CARICA PAGINA OUR TEAM CON 6 CARD**/



  newTeamMembers.forEach((member) => {
    containerEl.innerHTML += `
      <div class="team-card">
        <div class="card-img">
          <img src="${member.img}" alt="${member.name}">
        </div>
        <div class="card-info">
          <h3>${member.name}</h3>
          <p class="role">${member.role}</p>
          <a class="email" href="mailto:${member.email}">${member.email}</a>
        </div>
      </div>
    `;
  });
}
 
 
  

});