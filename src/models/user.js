// Clase de modelo de usuario
export class User {
    constructor(id, name, email, password, secret) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.secret = secret;
    }
}

// Array para almacenar usuarios (esto es solo un ejemplo, en una aplicación real usarías una base de datos)
export const users = [];
