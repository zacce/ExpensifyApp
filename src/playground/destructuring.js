//
//Object destructuring
//
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

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const {title, author} = book;
// const {name:publisherName='Self-Published'} = book.publisher;

// if (publisherName) {
//     console.log(`it is ${publisherName}`)
//}
//
// Array destructuring
// 
// const address = ['Pikkusaarenkuja 6 A 4','33410', 'Tampere','Finland'];

// const [street,zipcode,city,country ] = address;

// console.log(`You are in ${street} ,  ${zipcode} , ${city} , ${country}`);

const item = ['Coffee (hot)', '€2.00','€2.50','€2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A Medium ${itemName} costs ${mediumPrice}`);