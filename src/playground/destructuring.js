// const person ={
//     name: 'Sakari',
//     age:56,
//     location: {
//         city: 'Tampere',
//         temp: 0.5
//     }
// };

//const {name, age} = person;
//const name = person.name;
//const age = person.age;

//console.log(`${name} is ${age}.`);

//const {city, temp:temperature} = person.location

// if (person.location.city && person.location.temp) {

// console.log(`It's ${person.location.temp} in ${person.location.city}.`)

// if (city && temperature) {
//     console.log(`it's ${temperature} in ${city}.`)
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const {title, author} = book;
const {name:publisherName='Self-Published'} = book.publisher;

if (publisherName) {
    console.log(`it is ${publisherName}`)
}