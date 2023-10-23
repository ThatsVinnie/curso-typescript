type User = {
    nome: string,
    id: number
}

type Admin = {
    isAdmin: true,
    level: 0 | 1 | 2
}

type UserAdmin = User & Admin

const vinnie : UserAdmin = {
    nome: 'vinicius',
    id: 0,
    isAdmin: true,
    level: 2
}

type IsAdmin = (user: User) => boolean

const isAdmin: IsAdmin = (user) => !!(user as UserAdmin).isAdmin

