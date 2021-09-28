"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([444, 6, -8, 0.12, 45, 77]);
numbersCollection.sort();
console.log(numbersCollection.data);
