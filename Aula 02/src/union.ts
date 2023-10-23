const add = (x:number, y?:number) =>{
    if(y === undefined){
        return null
    }
    return x + y
}

let teste: number | string
teste = 10

const User: {
    nome: string,
    idade?: number
} = {
    nome: 'vinicius'
}

export default add