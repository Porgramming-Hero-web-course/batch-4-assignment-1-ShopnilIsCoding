
### Why Type Guards Are Necessary in TypeScript

TypeScript offers great benefits by adding static types to JavaScript, but it can't always determine a variable's type at runtime. This is where **type guards** come in. Type guards help TypeScript narrow down the type of a variable so that we can safely access its properties or methods without risking runtime errors.

### Types of Type Guards

1. **`typeof` for Primitive Types**

   `typeof` is useful for checking primitive types like `string`, `number`, and `boolean`.

   ```typescript
   function printLength(value: string | number) {
     if (typeof value === 'string') {
       console.log(value.length); 
     } else {
       console.log(value.toString()); 
     }
   }

   // Example usage:
   printLength("Hello"); // Output: 5
   printLength(123); // Output: "123"
   ```

2. **`instanceof` for Objects**

   Use `instanceof` when it is needed to check if an object is an instance of a class or constructor.

   ```typescript
   class Dog {
     bark() {
       console.log("Woof!");
     }
   }

   class Cat {
     meow() {
       console.log("Meow!");
     }
   }

   function talk(animal: Dog | Cat) {
     if (animal instanceof Dog) {
       animal.bark();
     } else {
       animal.meow();
     }
   }

   // Example usage:
   const dog = new Dog();
   const cat = new Cat();

   talk(dog); // Output: Woof!
   talk(cat); // Output: Meow!
   ```

3. **Using Custom Type Guards**

    Can create custom type guard functions when built-in checks don’t meet expected needs.

   ```typescript
   interface Car {
     type: 'car';
     drive(): void;
   }

   interface Bike {
     type: 'bike';
     pedal(): void;
   }

   function isCar(vehicle: Car | Bike): vehicle is Car {
     return (vehicle as Car).drive !== undefined;
   }

   function operate(vehicle: Car | Bike) {
     if (isCar(vehicle)) {
       vehicle.drive(); 
     } else {
       vehicle.pedal(); 
     }
   }

   // Example usage:
   const car: Car = { type: 'car', drive: () => console.log("Driving") };
   const bike: Bike = { type: 'bike', pedal: () => console.log("Pedaling") };

   operate(car); // Output: Driving
   operate(bike); // Output: Pedaling
   ```

4. **Using `in` Operator**

   The `in` operator checks if an object has a certain property.

   ```typescript
   interface Bird {
     type: 'bird';
     fly(): void;
   }

   interface Fish {
     type: 'fish';
     swim(): void;
   }

   function isBird(animal: Bird | Fish): animal is Bird {
     return 'fly' in animal;
   }

   function move(animal: Bird | Fish) {
     if (isBird(animal)) {
       animal.fly(); 
     } else {
       animal.swim(); 
     }
   }

   // Example usage:
   const eagle: Bird = { type: 'bird', fly: () => console.log("Flying") };
   const salmon: Fish = { type: 'fish', swim: () => console.log("Swimming") };

   move(eagle); // Output: Flying
   move(salmon); // Output: Swimming
   ```

