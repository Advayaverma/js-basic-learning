class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}advayaS`
    }

    set password(value){
        this._password = value
    }
}

const advaya = new User("av@advaya.ai", "abc")
console.log(advaya.email);