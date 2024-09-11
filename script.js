console.group('Exercise 1 & 4');

class Subject {
    constructor() {
        this.observers = [];
    }

    add(observer) {
        this.observers.push(observer);
    }

    remove(observer) {
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    notify(data) {
        this.observers.forEach(Observer => Observer.update(data));
    }

    async fetchAndNotify() {
        let url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
        try {
            let response = await fetch(url);
            let respond = await response.json();
            let firstPosts = respond.slice(0,10);
            this.notify(firstPosts);
        } catch (error) {
            console.error('Error:', error);
        }
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    update(data) {
        if (Array.isArray(data)) {
            let [firstPost] = data;
            console.log(`${this.name} has been notified with the first post title: ${firstPost.title}`);
        } else {
            console.log(`${this.name} received an error message: ${data}`);
        }
    }
}

let subject = new Subject();

let observerAlpha = new Observer('Observer Alpha');
let observerBeta = new Observer('Observer Beta');

subject.add(observerAlpha);
subject.add(observerBeta);

subject.notify(observerAlpha);
subject.notify(observerBeta);


console.group('Exercise 2');

let person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};

let fruits = ['apple', 'banana', 'cherry', 'date'];
let [first, second, third , fourth] = fruits;
console.log(person.name);
console.log(`${person.name} is ${person.age} years old`);
console.log(second);
console.log(fourth);

console.group('Exercise 3');

async function fetchPosts() {
    let url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    
    try {
        let responce = await fetch(url);
        let posts = await responce.json();
        let tenPosts = posts.slice(0,10);
        console.log(tenPosts)
    } catch (error) {
        console.error(error);
    }
}

fetchPosts();