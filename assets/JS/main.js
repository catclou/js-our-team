// OUR TEAM: per la pagina "Chi siamo" del nostro sito aziendale,
// dobbiamo sviluppare la sezione "Il nostro team".
// Definiamo un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare la relativa card:
// Nome, Ruolo e Foto.
// Milestone 1: stampare in console l'elenco dei membri del team, scrivendo
// separatamente i dettagli di ciascun componente.
// Milestone 2: stampare i dati all'interno di un contenitore nella pagina
// html in modo dinamico, creando per ciascun membro del team un elemento
// che conterrà i suoi dati.
// BONUS: stilizziamo la sezione realizzando le card di ciascun membro
// del team, come nel mockup allegato.

// 1) Creo un array di oggetti in cui ogni oggetto è un membro del team
let membriTeam = [

    {
        'Nome': 'Wayne Barnett',
        'Ruolo': 'Founder & CEO',
        'Img': 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'Nome': 'Angela Caroll',
        'Ruolo': 'Chief Editor',
        'Img': 'angela-caroll-chief-editor.jpg'
    },

    {
        'Nome': 'Walter Gordon',
        'Ruolo': 'Office Manager',
        'Img': 'walter-gordon-office-manager.jpg'
    },

    {
        'Nome': 'Angela Lopez',
        'Ruolo': 'Social Media Manager',
        'Img': 'angela-lopez-social-media-manager.jpg'
    },

    {
        'Nome': 'Scott Estrada',
        'Ruolo': 'Developer',
        'Img': 'scott-estrata-developer.jpg'
    },

    {
        'Nome': 'Barbara Ramos',
        'Ruolo': 'Graphic Designer',
        'Img': 'barbara-ramos-graphic-designer.jpg'
    }

]

console.log(membriTeam);


// 2) Stampo in console l'elenco dei membri del team
// scrivendo separatamente i dettagli di ciascun membro
for (let i=0; i<membriTeam.length; i++) {
	for (let key in membriTeam[i] ) {
		console.log( `${key}: ${membriTeam[i][key]}` );

        // 3) Stampo in maniera dinamica in un contenitore HTML
        document.getElementById("membri-team").innerHTML += `<p class="border"><span class="fw-bold">${key}:</span> ${membriTeam[i][key]}</p>`;
	}
}