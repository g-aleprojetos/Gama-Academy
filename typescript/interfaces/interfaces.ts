interface Usuario{
    nome: string;
    email:string;
    address?:string;
}

function getUser(): Usuario{
    return{
        nome:'Alexandre',
        email: 'ale@ale.com.br'
    }
}

function setUser(usuarios: Usuario){
    //...
}