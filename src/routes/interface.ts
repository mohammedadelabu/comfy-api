// export interface UserInt { 
//     id?: number;
//     fullname: string; 
//     email: string
//     gender: string; 
//     phone: string; 
//     address: string; 
//     notes: string; 
// }

export interface User{
    [x: string]: any,
    id: number,
    username: string,
    email: string,
    password: string,
    authData: any,
    token: string,
    jwt: string,
    hash: any,
    err: any,
    accessToken: string,
    success:boolean,
    status:number,
    message: string, 
    data: object
}