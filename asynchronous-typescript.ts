// promise

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};
const getTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  // console.log(data);
  return data;
};

type Something = { something: string };

const createPromise = (): Promise<Something> => {
  return new Promise<Something>((resolve, reject) => {
    const data: Something = { something: "something" };
    if (data) {
      resolve(data);
    } else {
      reject("Failed to load data!");
    }
  });
};

// calling create promise function

const showData = async (): Promise<Something> => {
  try {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

showData();
