export class Person{
    private name:string;
    private surname:string;
    private email:string;

    constructor(name:string, surname:string, email:string){
            this.name=name;
            this.surname=surname;
            this.email=email;
    }

    setName(name:string){
        this.name=name;
    }

    setSurname(surname:string){
        this.surname=surname;
    }
    setEmail(email:string){
        this.email=email;
    }

    getSurname():string{
        return this.surname;
    }
    getName():string{
        return this.name;
    }

    getEmail():string{
        return this.email;
    }
}