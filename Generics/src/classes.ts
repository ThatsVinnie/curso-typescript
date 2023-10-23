class Pessoa<T> {
    constructor(private nome: T){

    }

    setNome(nome: T): void {
        this.nome = nome
    }
}

class List<T>{
    private list: T[] = []

    getList(index: number): T | null{
        
        const len = this.list.length
        
        if(len === 0) return null
        if(index > len || index < 0) return null

        return this.list[index]
    }

    add2List(element: T): this{
        this.list.push(element)
        return this
    }
}

const listPessoas = new List()

listPessoas
    .add2List(new Pessoa('Vinicius'))
    .add2List(new Pessoa('João'))
    .add2List(new Pessoa('Carolina'))