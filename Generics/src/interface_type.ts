interface Action<T = string> {
    action: T
}

const step: Action<number> = {
    action: 0
}

step.action = 20


const _step: Action<boolean> = {
    action: true
}

_step.action = false

//Utilizando um valor default em generic
const step_2: Action = {
    action: 'olá'
}

step_2.action = 'Olá!'

//Utilizando mais de um generic e constrain
interface _Action<T extends number | string = string, U = number>{
    action: T,
    timestamp: U
}

const step_3: _Action = {
    action: 'delete',
    timestamp: 123
}


const historyActions: Array<_Action> = []

// Esta função nos permite fazer uma adição com objs que ao menos
//tenham as propriedade de nosso Generic, não limitando APENAS a isso.

const addAction = <T extends _Action>(obj: T) =>{
    historyActions.push(obj)
}