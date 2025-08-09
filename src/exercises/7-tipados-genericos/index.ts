/*

Introducción:

    Se ha eliminado completamente el filtrado del proyecto.
    Resultó que esta característica no era necesaria
    para el usuario final y pasamos mucho tiempo solo porque
    nuestro gerente de oficina nos dijo que lo hiciéramos. La próxima vez deberíamos
    en su lugar escuchar a la gestión del producto.

    De todos modos tenemos un nuevo plan. amigo del CEO Nick nos dijo
    que si intercambiamos aleatoriamente nombres de usuario de vez en cuando
    en la comunidad, sería muy divertido y el proyecto
    Definitivamente tendría éxito!

Ejercicio:

    Implementar intercambio que recibe 2 personas y los devuelve en
    el orden inverso. La función en sí ya es
    allí, en realidad. Solo tenemos que proporcionarle los tipos adecuados.
    Además, esta función no debería limitarse necesariamente a
    Tipos de persona, vamos a escribirlo para que funcione con cualquier dos tipos
    especificado.

*/

interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function logUser(user: User) {
    const pos = users.indexOf(user) + 1;
    console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
    const pos = admins.indexOf(admin) + 1;
    console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
    {
        type: 'admin',
        name: 'Will Bruces',
        age: 30,
        role: 'Overseer'
    },
    {
        type: 'admin',
        name: 'Steve',
        age: 40,
        role: 'Steve'
    }
];

const users: User[] = [
    {
        type: 'user',
        name: 'Moses',
        age: 70,
        occupation: 'Desert guide'
    },
    {
        type: 'user',
        name: 'Superman',
        age: 28,
        occupation: 'Ordinary person'
    }
];

export function swap<T,U>(v1 : U, v2 : T) : [T,U] {
    return [v2, v1];
}

function test1() {
    console.log('test1:');
    const [secondUser, firstAdmin] = swap(admins[0], users[1]);
    logUser(secondUser);
    logAdmin(firstAdmin);
}

function test2() {
    console.log('test2:');
    const [secondAdmin, firstUser] = swap(users[0], admins[1]);
    logAdmin(secondAdmin);
    logUser(firstUser);
}

function test3() {
    console.log('test3:');
    const [secondUser, firstUser] = swap(users[0], users[1]);
    logUser(secondUser);
    logUser(firstUser);
}

function test4() {
    console.log('test4:');
    const [firstAdmin, secondAdmin] = swap(admins[1], admins[0]);
    logAdmin(firstAdmin);
    logAdmin(secondAdmin);
}

function test5() {
    console.log('test5:');
    const [stringValue, numericValue] = swap(123, 'Hello World');
    console.log(` - String: ${stringValue}`);
    console.log(` - Numeric: ${numericValue}`);
}

[test1, test2, test3, test4, test5].forEach((test) => test());

// In case you are stuck:
// https://www.typescriptlang.org/docs/handbook/2/objects.hy stml#tuple-types
// https://www.typescriptlang.org/docs/handbook/2/generics.html
