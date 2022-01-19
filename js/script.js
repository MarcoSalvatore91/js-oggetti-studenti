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

// 0. Creare delle variabili

const firstStudent = document.getElementById('first-student');
const otherStudents = document.getElementById('other-students');
const userName = document.getElementById('user-name');
const userSurname = document.getElementById('user-surname');
const userAge = document.getElementById('user-age');
const userInfo = document.getElementById('user-info');
const sendForm = document.getElementById('send');

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
const students = [
    
    { name: 'Alessio', surname: 'Garifo', age: '29'},
    { name: 'Martina', surname: 'Polimeno', age: '26'},
    { name: 'Guido', surname: 'Rossi', age: '22'},
    
];
console.log(students);

const allStudent = [];

// 4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.

for (let i = 0; i < students.length; i++) {
    const current = students[i];
    const nameSurname = `<strong>Nome</strong>: ${current.name} <strong>Cognome</strong>: ${current.surname} </br>`;
    allStudent.push(nameSurname)
}

const result = allStudent.join('')
otherStudents.innerHTML = result;

/* 5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza,
un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età. */
//BONUS: Usiamo il DOM per stampare e chiedere le informazioni all'utente! 

sendForm.addEventListener('click', function(){
    const userAdd = {
        name: userName.value,
        surname: userSurname.value,
        age: userAge.value,
    }
    console.log(userAdd);
    students.push(userAdd); 
    userInfo.innerHTML = `<strong>Nome:</strong> ${userName.value} </br><strong>Cognome:</strong> ${userSurname.value} </br><strong>Età:</strong> ${userAge.value}`;
})

firstStudent.innerHTML = `${student.name} </br> ${student.surname} </br> ${student.age}`;