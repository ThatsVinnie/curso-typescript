type ArrUniqueTypes<T> = T[]

const teste: ArrUniqueTypes<number> = [1, 2]
const teste2: ArrUniqueTypes<string> = ["1", "2"]
const teste3: ArrUniqueTypes<string | number> = [1, "2"]

const arrNum: Array<number> = [1, 2, 3]