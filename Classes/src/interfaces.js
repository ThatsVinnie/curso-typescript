"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    showCategory() {
        console.log('A categoria é:' + this.categoria);
    }
}
exports.Animal = Animal;
class Gato extends Animal {
    constructor(nome, idade) {
        super('mamífero');
        this.nome = nome;
        this.idade = idade;
    }
    showDetails() {
        console.log('show details foi chamado');
    }
}
const cat = new Gato('mingau', 12);
