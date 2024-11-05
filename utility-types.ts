{
  // utility types
  // Pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // Pick
  type NameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  // Partial
  type PersonPartial = Partial<Person>;

  // Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "JAMIL",
    age: 21,
    contactNo: "07890",
  };

  person1.age = 23;

  // Record Type
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };
  type MyObj = Record<string, string>;
  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: 3,
  };

  //
}
