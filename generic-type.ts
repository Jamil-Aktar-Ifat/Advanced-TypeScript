{
  // generic type

  type GenericArray<T> = Array<T>;

  //   const rollNumbers: number[] = [3, 4, 5];
  //   const rollNumbers: Array<number> = [3, 4, 5];
  const rollNumbers: GenericArray<number> = [3, 4, 5];

  //   const mentors: string[] = ["Jamil", "Aktar", "Ifat"];
  //   const mentors: Array<string> = ["Jamil", "Aktar", "Ifat"];
  const mentors: GenericArray<string> = ["Jamil", "Aktar", "Ifat"];

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Jamil",
      age: 100,
    },
    {
      name: "Ifat",
      age: 21,
    },
  ];

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];
  const names: GenericTuple<number, { name: string; email: string }> = [
    1234,
    {
      name: "Jamil",
      email: "jamil@mail.com",
    },
  ];
}
