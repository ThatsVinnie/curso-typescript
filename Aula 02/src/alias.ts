type testeAlias = number | string | boolean

type User = {
    nome: string,
    idade?: number
}

type Sizes = '12px' | '18px' | '24px'

//-----------------------------------------

let teste: testeAlias = 10

const Vinicius: User = {
    nome: 'Vinícius',
    idade: 22
}

const small: Sizes = '12px'
const normal: Sizes = '18px'

export default Sizes