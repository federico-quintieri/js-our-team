const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// Prendiamo la row
const rowElement = document.querySelector(".row");
// console.log(rowElement);

// Cicliamo l'array oggetti
for (let i = 0; i < teamMembers.length; i++) {
  const currObject = teamMembers[i];
  // console.log(currObject);

  // Destructuring
  const { name, role, email, img } = currObject;
  // console.log(name, role, email, img);

  console.log(img);

  // Ora ho le variabili da passare ad un elemento html
  // Compongo la stringa HTML
  const stringaElementoHtml = `
  <div class="card">
            <div><img src="./${img}" alt="" /></div>
            <div class="cardText">
              <h2>${name}</h2>
              <h5>${role}</h5>
              <a href="">${email}</a>
            </div>
          </div>`;

  rowElement.innerHTML += stringaElementoHtml;
}
