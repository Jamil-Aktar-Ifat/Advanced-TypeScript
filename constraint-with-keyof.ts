{
  // generic contraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually
  type Owner2 = keyof Vehicle; // using keyof

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Jamil",
    age: 22,
    address: "London",
  };

  const car = {
    model: "mustang",
    year: 2023,
  };

  const result1 = getPropertyValue(car, "model");

  //   const User = {
  //     name: "Jamil",
  //     age: 22,
  //     address: "London",
  //   };

  //   User.address;
  //   User["name"];

  //
}
