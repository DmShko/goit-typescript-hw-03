
class Key {
    constructor(private signature: number = Math.trunc(Math.random()*1000)){}
  
    getSignature(){
        return this.signature;
    }
  }
  
  class Person {
    constructor(private person: Key){}
  
    getKey(){
        return this.person;
    }
  }
  
  abstract class House {
  
    protected tenants: number[] = [];
  
    constructor(protected door: boolean, protected key: number){}
  
    comIn(person: number){
        this.key = person;
        if(this.door) {
            this.tenants.push(this.key);
            console.log(`The ${this.tenants} inside!`)
        }
    }
  
    public abstract openDoor(data: number): void;
  }
  
  class MyHouse extends House {
    constructor( key: number) {
        super(false, key)
    }
  
    public openDoor(data: number) {
  
        data === this.key ?  this.door = true :  this.door = false;
        this.door ? console.log('The door is opened!'): console.log('The door is closed!');
        this.comIn(data);
    }
  }
  
  const key = new Key();
  const person = new Person(key);
  
  // first configuration, save tenant to access list
  const house = new MyHouse(person.getKey().getSignature());
  
  // open the door and add tenant to 'tenants'
  house.openDoor(key.getSignature());

  
  export {};