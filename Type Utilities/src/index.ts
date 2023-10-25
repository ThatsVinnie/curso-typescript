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


type Midias = "facebook" | "instagram"

type Url = { url: string}

const midias: Record<Midias, Url> = {
    facebook: { url: "facebook.com"},
    instagram: { url: "instagram.com"}
}

// Conditional types

type MyString = string

type MyType = MyString extends string | number ? string : boolean

function myFn<T>(param: T extends string ? string : number){

}

myFn<number>(2)


function myFn2<T>(param: T){
    return function(param2: T extends number ? boolean : MyString){

    }
}

const _myFn = myFn2("")

type NumberOrNever<T> = T extends number ? number : never

//const teste: NumberOrNever<boolean> = 2


//KeyOf

let OnePropOfSquare: keyof Square = 'width'


//mapped types

type Props = "x"| "y"| "z"

type MappedProps = {
    [P in Props] : number
}

type MappedProps2<T extends string | number> = {
    [P in T]: P
}


type MyMappedType = MappedProps2<Props>

type MappedProps3<T> = {
    readonly [P in keyof T]: T[P]
}

type Teste = MappedProps3<{a: boolean, b: "b"}>