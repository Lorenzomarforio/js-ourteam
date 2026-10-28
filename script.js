    const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "https://picsum.photos/id/334/300/300"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "https://picsum.photos/id/334/300/300"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "https://picsum.photos/id/334/300/300"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "https://picsum.photos/id/334/300/300"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "https://picsum.photos/id/334/300/300"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "https://picsum.photos/id/334/300/300"
  }
]
  // renderTeam(teamMembers)
 
  const containerEl = document.getElementById("container");
const nameEl = document.getElementById("newname");
const roleEl = document.getElementById("newrole");
const emailEl = document.getElementById("newemail")
const formEl = document.querySelector("form");
console.log(formEl)
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
const newMember={
  name: newname.value,
  role: newrole.value,
  email: newemail.value
}
teamMembers.push(newMember)
    containerEl.innerHTML += `
        <div class="card">
            <img src="https://picsum.photos/id/334/300/300" alt="">
                <h3 class="name">${nameEl}</h3>
                <p class="role">${roleEl}</p>
                <a href="${emailEl}">${emailEl}</a>
        </div>
        `
  }
      )


   
