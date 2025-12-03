<<<<<<< HEAD
// document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";
import {changePrincipalTitle} from "../js/modules/changePrincipalTitle.js";
import { changeLogo } from "./modules/changeLogo.js";
import { aliceUser } from "../js/modules/literalObject.js";
import { User } from "../models/User.js";

changePrincipalTitle("title");
changeLogo("cat.jpg");

=======
// importanción nombrada
import { User } from "../models/User.js";
import { changeLogo } from "./modules/changeLogo.js";
import { changePrincipalTitle } from "./modules/changePrincipalTitle.js";
import { aliceUser } from "./modules/literalObject.js";


changePrincipalTitle("title");

// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"
changeLogo("cat.jpg");

console.log( aliceUser.getFullName() );
>>>>>>> main
console.log( aliceUser );
console.log( aliceUser.stringify() );

const fatima = new User("Fatima", "Orozco", 25, "fatima@gmail.com");
<<<<<<< HEAD
console.log(fatima.greet());
=======
const juan = new User("Juan", "Perez", 28, "juan@gmail.com");
const luis = new User("Luis", "Ramirez", 32, "luis@gmail.com");

console.log( luis.greet() ); // Hello, I'm Luis Ramirez, 32 years old.
console.log( juan.greet() ); // Hello, I'm Luis Ramirez, 32 years old.
console.log( fatima.greet() ); // Hello, I'm Luis Ramirez, 32 years old.
>>>>>>> main

