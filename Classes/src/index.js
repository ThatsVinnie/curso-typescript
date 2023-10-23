"use strict";
console.log('________________');
console.log('teste de entrada');
//mais longa
//class Animal {
//    category: string
//    constructor(category:string){
//        this.category = category
//    }
//}
//mais curta
class Animal {
    constructor(category) {
        this.category = category;
    }
}
class Animal_2 {
    constructor(category) {
        this.category = category;
    }
}
class Animal_3 {
    constructor(category) {
        this.category = category;
    }
    showCategory() {
        console.log('A categoria é:' + this.category);
    }
}
class Animal_4 {
    constructor(category) {
        this.category = category;
    }
    showCategory() {
        console.log('A categoria é:' + this.category);
    }
}
class Gato extends Animal_4 {
    constructor(nome) {
        super('mamífero');
        this.nome = nome;
    }
    showDetails() {
        console.log(this.nome, this.category);
    }
}
class Cachorro extends Animal_4 {
    constructor(nome) {
        super('mamífero');
        this.nome = nome;
    }
    showDetails() {
        console.log(this.nome + "é um" + this.category);
    }
}
class Passaro extends Animal_4 {
    constructor(_nome) {
        super('mamífero');
        this._nome = _nome;
    }
    get nome() {
        console.log('get chamado');
        return this._nome;
    }
    set nome(n) {
        console.log('set chamado');
        this._nome = n;
    }
    showDetails() {
        console.log(this._nome + "é um" + this.category);
    }
}
//lista de animais
class Cliente {
    constructor() {
        this._listaAnimais = [];
    }
    addAnimals(...animais) {
        this._listaAnimais.push(...animais);
    }
}
const dog = new Cachorro('doggo');
const cat = new Gato('Mingau');
const vini = new Cliente();
vini.addAnimals(dog, cat);
console.log(vini);
