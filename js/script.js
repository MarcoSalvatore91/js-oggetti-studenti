console.log('JS OK!');

// Descrizione:

/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente! */

// 1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
const student = {
    name: "Nome: Marco",
    surname: "Cognome: Salvatore",
    age: "Età: 30",
};

// 2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (let key in student) {
    console.log(student[key]);
};

// 3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
const classi = [
    {
        students: [
            { name: 'Alessio', surname: 'Garifo', age: '29'},
            { name: 'Martina', surname: 'Polimeno', age: '26'},
            { name: 'Guido', surname: 'Rossi', age: '22'},
        ]
    }
    ];

// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

for (let i = 0; i < classi.length; i++) {
    const currentClass = classi[i].students;
    const nameSurname = currentClass[i].name + ' ' + currentClass[i].surname;
    console.log(nameSurname);
}