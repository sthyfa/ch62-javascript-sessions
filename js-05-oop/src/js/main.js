// document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";
import {changePrincipalTitle} from "../js/modules/changePrincipalTitle.js";
import { changeLogo } from "./modules/changeLogo.js";
import { aliceUser } from "../js/modules/literalObject.js";
import { User } from "../models/User.js";

changePrincipalTitle("title");
changeLogo("cat.jpg");

console.log( aliceUser );
console.log( aliceUser.stringify() );

const fatima = new User("Fatima", "Orozco", 25, "fatima@gmail.com");
console.log(fatima.greet());

