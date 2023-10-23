import axios, {AxiosResponse} from 'axios'

console.log("rodando ^-^")

//utilizando generics promises

export type RespUser = { name: string, id: number, email: string }

//método get com axios
axios
    .get<Array<RespUser>>("http://localhost:3001/users")
    .then((res) =>{
        console.log("-----------response data-------------")
        console.log(res.data)
        const response = res.data

        console.log(response[0].email)
    })

    
//método post com axios

axios
    .post<RespUser>("http://localhost:3001/users", {name: 'vinnie', email: 'vini@mail.com'})
    .then((resp) =>{
        console.log('--------post exec----------')
        console.log(resp.data.id)
    })

//Tipando função que retorna promise em Axios
const getUser = (id: number): Promise<AxiosResponse<RespUser>> =>{
    return axios.get('http://localhost:3001/users/'+ id)
}

getUser(2)
    .then((resp) =>{
        console.log(resp.data.name)
    })