
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
  
    protected tenants: Person[] = [];
    protected door: boolean = false;
  
    constructor( protected key: Person){}
  
    comIn(person: Person){
        
        if(this.door) {
            
            this.key = person;
            this.tenants.push(this.key);
            console.log(`The ${this.key.getKey().getSignature()} inside!`)
        }
    }
  
    public abstract openDoor(data: Key): void;
  }
  
  class MyHouse extends House {
    constructor( key: Person) {
        super(key)
    }
  
    public openDoor(data: Key) {
  
        data.getSignature() === this.key.getKey().getSignature() ?  this.door = true :  this.door = false;
        this.door ? console.log('The door is opened!'): console.log('The door is closed!');
  
    }
  }
  
  const key = new Key();
  const person = new Person(key);
  
  // first configuration, save tenant to access list
  const house = new MyHouse(person);
  
  // open the door 
  house.openDoor(key);
  
  // add tenant to 'tenants'
  house.comIn(person);
  
  export {};