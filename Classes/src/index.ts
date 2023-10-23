console.log('________________')
console.log('teste de entrada')

//mais longa
//class Animal {
//    category: string
//    constructor(category:string){
//        this.category = category
//    }
//}

//mais curta
abstract class Animal {
    constructor(public category : string){ }
}

class Animal_2 {
    constructor(readonly category : string){ }
}

class Animal_3 {
    constructor(private category : string){ }

    showCategory(): void{
        console.log('A categoria é:' + this.category)
    }
}

class Animal_4 {
    constructor(protected readonly category : string){ }

    showCategory(): void{
        console.log('A categoria é:' + this.category)
    }
}

class Gato extends Animal_4{
    private nome: string
    constructor(nome: string){
        super('mamífero')
        this.nome = nome
    }

    showDetails():void{
        console.log(this.nome, this.category)
    }
}

class Cachorro extends Animal_4{
    constructor(protected readonly nome:string){
        super('mamífero')
    }
    showDetails():void{
        console.log(this.nome + "é um" + this.category)
    }
}

class Passaro extends Animal_4{
    constructor(private _nome:string){
        super('mamífero')
    }

    get nome(){
        console.log('get chamado')
        return this._nome
    }

    set nome(n:string){
        console.log('set chamado')
        this._nome = n
    }
    showDetails():void{
        console.log(this._nome + "é um" + this.category)
    }
}

//lista de animais
class Cliente {
    protected readonly _listaAnimais: Animal_4[] = []

    addAnimals(...animais: Animal_4[]):void{
        this._listaAnimais.push(...animais)
    }
}


const dog = new Cachorro('doggo')
const cat = new Gato('Mingau')
const vini = new Cliente()

vini.addAnimals(dog, cat)

console.log(vini)