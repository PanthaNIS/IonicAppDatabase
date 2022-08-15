// Reference: unit content HTTP,AJAX and REST page.
export class PetRecord {
    name:string;
    age:number;
    species:string;
    sex:string;
    phone:string;
   
    constructor(n: string, a:number, sp:string, s:string, ph:string ) {
      this.name = n;
      this.age = a;
      this.sex= s;
      this.species=sp;
      this.phone=ph;

      
    }
  } 