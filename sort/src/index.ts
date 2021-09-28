import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([444, 6, -8, 0, 45, 77]);
numbersCollection.sort();

const charactersCollection = new CharactersCollection(
  'zyxwvutsrqponmlkjlhgfedcba'
);
charactersCollection.sort();

const linkedList = new LinkedList();
linkedList.add(455);
linkedList.add(78);
linkedList.add(3);
linkedList.add(-4);

console.log(`Numbers sort: ${numbersCollection.data}
Characters sort: ${charactersCollection.data}`);
linkedList.print();
