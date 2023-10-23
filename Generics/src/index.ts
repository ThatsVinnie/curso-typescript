console.log('________________')

function somaOuConcatena(x: number | string, y:number | string){
    return (typeof x ==="number" && typeof y === "number") ? x + y : x + "" + y
}

function somaOuConcatenaGenerics<T extends number | string>(x: T, y: T){
    return (typeof x ==="number" && typeof y === "number") ? x + y : x + "" + y
}

somaOuConcatenaGenerics(1, 2)
//somaOuConcatenaGenerics('1', 2) -> não permite que dois tipos sejam diferentes