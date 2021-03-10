function animal(janwar) {
  switch (janwar) {
    case "cat":
    case "dog":
      console.log("this is pet animal");
      break;

    case "lion":
    case "tiger":
      console.log("this is zoo animal");
      break;

    default:
      console.log("not an animal");
      break;
  }
}

animal("lion");
