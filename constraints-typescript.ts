{
  // constraints in typescript

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 112,
    name: "Jamil",
    email: "jamil@mail.com",
    devType: "Full-Stack",
  });

  const student2 = addCourseToStudent({
    id: 113,
    name: "Aktar",
    email: "aktar@mail.com",
    hasIpad: "Apple iPad Pro",
  });

  const student3 = addCourseToStudent({
    id: 124,
    name: "Rohan",
    email: "rohan@mail.com",
    nothing: "nothing",
  });

  //
}
