{
  // generic - interface

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type AppleWatchPro = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<AppleWatchPro> = {
    name: "Jamil Dev",
    computer: {
      brand: "Apple",
      model: "MacBook Pro",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch Pro",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface Bike {
    brand: string;
    engineCC: string;
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Ifat Dev",
    computer: {
      brand: "Apple",
      model: "MacBook Air",
      releaseYear: 2023,
    },
    smartWatch: {
      brand: "Apple",
      model: "Apple Watch 9",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Royal Enfield",
      engineCC: "350CC",
    },
  };

  //
}
