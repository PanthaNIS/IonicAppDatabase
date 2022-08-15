// Reference: unit content HTTP,AJAX and REST page.
export class PetRecord {
    name:string;
    age:number;
    species:string;
    sex:string;
    phone:string;
   
    constructor(name: string, age:number, species:string, sex:string, phone:string ) {
      this.name = name;
      this.age = age;
      this.sex= sex;
      this.species=species;
      this.phone=phone;

      
    }
  } 