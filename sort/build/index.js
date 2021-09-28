"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numbersCollection = new NumbersCollection_1.NumbersCollection([444, 6, -8, 0, 45, 77]);
numbersCollection.sort();
const charactersCollection = new CharactersCollection_1.CharactersCollection('zyxwvutsrqponmlkjlhgfedcba');
charactersCollection.sort();
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(455);
linkedList.add(78);
linkedList.add(3);
linkedList.add(-4);
console.log(`Numbers sort: ${numbersCollection.data}
Characters sort: ${charactersCollection.data}`);
linkedList.print();
