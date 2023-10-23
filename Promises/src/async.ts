import axios from 'axios'
import { RespUser } from './index'
console.log('----------------------------------------')
console.log('Rodando async')


async function Fn(){
    return 10
}

const fn = Fn()

console.log('----------------------------------------')



fn.then(n=> console.log('valor de n:' + n))


async function getUser(id: number): Promise<RespUser>{
    try{
        const resp = await axios.get<RespUser>('http://localhost:3001/users/'+id)
        return resp.data
    }catch(err){
        throw new Error('Error:' + err)
    }
}

getUser(2)
    .then(
        dado => {
            console.log("dado")
            console.log(dado)
    })
    .catch(
        e => {
            console.log('deu ruim')
            console.log(e)
    })