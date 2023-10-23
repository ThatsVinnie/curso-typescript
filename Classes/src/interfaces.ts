export abstract class Animal{
    constructor(protected readonly categoria: string){}

    showCategory():void{
        console.log('A categoria é:' + this.categoria)
    }

    abstract showDetails():void
    abstract idade: number
}


class Gato extends Animal{

    constructor(public nome: string, public idade: number){
        super('mamífero')
    }
    
    showDetails(): void {
        console.log('show details foi chamado')
    }
}

const cat = new Gato('mingau', 12)


interface AnimalInterface{
    categoria: string;
    showDetails():void;
    idade?: number;
}

class Cachorro implements AnimalInterface{

    constructor(public categoria: string, public readonly nome: string, public idade?: number){}

    showDetails(): void {
        console.log('mostrar detalhes de dog')
    }
}