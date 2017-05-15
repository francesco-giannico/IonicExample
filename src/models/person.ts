export class Person{
    private name:string;
    private surname:string;
    private email:string;
    private key: string;

    constructor(key:string,name:string, surname:string, email:string){
            this.name=name;
            this.surname=surname;
            this.email=email;
            this.key= key;
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

     getKey():string{
        return this.key;
    }
}