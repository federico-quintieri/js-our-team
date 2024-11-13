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

  // console.log(img);

  // Ora ho le variabili da passare ad un elemento html
  // Compongo la stringa HTML
  const stringaElementoHtml = `
  <div class="card">
            <div><img src="./${img}" alt="" /></div>
            <div class="cardText">
              <span class="spanNome">${name}</span>
              <p class="spanRole">${role}</p>
              <a href="">${email}</a>
            </div>
          </div>`;

  // Ad ogni iterazione aggiungo la stringaElementoHtml alla pagina
  rowElement.innerHTML += stringaElementoHtml;
}

// Faccio funzione che aggiunge card
const aggiungoCard = (p_nome, p_ruolo, p_mail) => {
  // console.log(p_nome, p_ruolo, p_mail);

  const stringaElementoHtml = `
  <div class="card">
            <div><img src="./img/D4c_sbr69.jpg" alt="" /></div>
            <div class="cardText">
              <span class="spanNome">${p_nome}</span>
              <p class="spanRole">${p_ruolo}</p>
              <a href="">${p_mail}</a>
            </div>
          </div>`;

  rowElement.innerHTML += stringaElementoHtml;
};

// Prendo variabile form
const formElement = document.querySelector("form");
// console.log(formElement);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  // Prendo array di elementi input e lo scompongo in variabili contenenti un elemento input
  const [nome, ruolo, mail] = document.querySelectorAll("form input");
  // console.log(nome, ruolo, mail);

  // Metto in un oggetto questi valori in un oggetto
  const newCardObject = {
    Nome: nome.value,
    Ruolo: ruolo.value,
    Mail: mail.value,
  };
  // console.log(newCardObject);

  aggiungoCard(newCardObject.Nome, newCardObject.Ruolo, newCardObject.Mail);

  // Resetta i campi delle form
  formElement.reset();
});
