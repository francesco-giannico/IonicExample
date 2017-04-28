export class Person{
    private name:string;
    private surname:string;

    constructor(name:string, surname:string ){
            this.name=name;
            this.surname=surname;
    }

    setName(name:string){
        this.name=name;
    }

    setSurname(surname:string){
        this.surname=surname;
    }

    getSurname():string{
        return this.surname;
    }
    getName():string{
        return this.name;
    }
}