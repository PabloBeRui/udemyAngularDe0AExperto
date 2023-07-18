export class Person {
  //   public name: string;
  //   private address: string;

  constructor(public name: string, private address: string = "No address") {
    // this.name = name;
    // this.address = address;
  }
}

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName,'Betanzos');
  }
}

const ironman = new Hero("Ironman", 43,'tony');

console.log(ironman);