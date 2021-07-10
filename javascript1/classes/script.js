class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return`Estou lendo => ${this.title}`
    }
}

class ITBook extends Book{
    constructor(title, author, pages, technology){
        super(title, author, pages);
        this.technology = technology;
    }
}

class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }
}


let book = new Book('Algiritmos para viver', 'Brian', 500);
let otherBook = new Book('Um Exu em Nova York', 'Cidinha da Silva', 100);
let itBook = new ITBook('Algiritmos para viver', 'Brian', 500, 'Algoritmo');
let person = new Person('Alexandre');

console.log(book)
console.log(book.read())
console.log(otherBook.read())
console.log(otherBook)

console.log(itBook)
console.log(itBook.title)

console.log(person.name)
person.name = "Ale";
console.log(person.name)