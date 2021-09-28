import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([444, 6, -8, 0.12, 45, 77]);
numbersCollection.sort();
console.log(numbersCollection.data);
