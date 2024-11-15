const getProperty = <X, Y extends keyof X>(obj: X, property: Y): X[Y] => {
    return obj[property];
  };
  
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name")); // Output: Alice
  console.log(getProperty(person, "age"));  // Output: 30  