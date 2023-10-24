//Partial

type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200
}

const square2: Partial<Square> = {x: 44}


type UpdtSquare = (a: Square, b: Partial<Square>) => Square

const updtSquare: UpdtSquare = (a, b) =>{
    return Object.assign({}, a, b)
}


const square3: Square = updtSquare(square, square2)


console.log('------------------------')

console.log(square3)

console.log('------------------------')

//Pick

type Position = Pick<Square, "x" | "y">

const position: Position = {
    x: 20,
    y: 55
}

//Omit

type Size = Omit<Square, "x" | "y">

const size: Size = {
    width:100,
    height: 200
}


//Exclude<T, U>

type SquareColor = "red" | "blue" | "green" | "black" | "white"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

//Extract

type SadColor = "black" | "white" | "grey" | "blue dark"

type SadSquareColor = Extract<SquareColor, SadColor>



//Required

type User = {
    name: string,
    email: string,
    id?: number
}

type UserGet = Required<User>


//ReadOnly

type UserRead =  Readonly<User>


//NonNullable

type Cpf = {cpf: string}
type Cnpj = {cnpj: string}

type User2 = Cnpj| Cpf| null | undefined

const user: NonNullable<User2> = {
    cpf: "123"
}


//Record

