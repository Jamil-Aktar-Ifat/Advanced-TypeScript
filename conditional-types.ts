{
  // conditional types

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false;

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Jamil = {
    bike: string;
    car: string;
    ship: string;
  };

  // check
  //   type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Jamil ? true : false;

  type HasBike = CheckVehicle<"bike">; // output --> true
  type HasBus = CheckVehicle<"bus">; // output --> false

  //
}
