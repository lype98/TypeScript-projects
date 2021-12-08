export class Matrix {
  
  results: number[][] = [];
  lastCol = this.collumn-1; lastRow = this.row-1;
  firstCol = 0; firstRow = 0;
  currentCol = -1; // start out of bounds to allow first print to be equal to the others
  currentRow = 0;  
  currentNumber = 1;
  currentDir = 0;

  constructor(public collumn: number, public row: number) {
    this.matrixBlank(collumn, row);
    this.run();
    this.read(this.results);
  }

  matrixBlank(collumn: number, row: number): void { // create 2D array from the rows given
    for(let i=0; i < row; i++) {
      this.results.push([]);
    };
    for(const array of this.results) {
      for(let i=0; i < this.collumn; i++) { // fill collumns with 0s
        array.push(0);
      };
    };
  };

  populateIterate (cRow: number, cCol: number): void {
    this.results[cRow][cCol] += this.currentNumber; // populate the collumns with the current number
    this.currentNumber++; // increment to next number  
  }

  CurrentIsLessThanMatrix(): boolean {
    return this.currentNumber <= this.collumn * this.row;
  }

  run(): void {
    let shrink = false;
    let currentLoop = 0;
    let current: { colOrRow: string[], lastColOrRow: string[], shrink: [string, number][]} = {      
      colOrRow: ['currentCol', 'currentRow', 'currentCol', 'currentRow'],
      lastColOrRow: ['lastCol', 'lastRow', 'firstCol', 'firstRow'],
      shrink: [['lastRow',-1], ['firstCol',1], ['firstRow',1], ['lastCol',-1]]
    };

    const printDirection = (direction: number, shrink: boolean) => {

      let matrixColOrRow = current.colOrRow[this.currentDir];
      let lastMatrixColOrRow = current.lastColOrRow[this.currentDir];
      
      const shrinkFunc = (direction) => {
        if(direction === 0) this.lastRow--;
        else if(direction === 1) this.firstCol++;
        else if(direction === 2) this.firstRow++;
        else if(direction === 3) this.lastCol--;
      }
      
      if(direction === 0 || direction === 1) { // if direction is Right or Down
          for(this[matrixColOrRow]++; this[current.colOrRow[this.currentDir]] <= this[lastMatrixColOrRow]; this[current.colOrRow[this.currentDir]]++) { // move one and iterate currentCol till last Collumn  
            this.populateIterate(this.currentRow, this.currentCol); // populate the collumns with the current number + increment currentNumber
          };
          this[current.colOrRow[this.currentDir]]--; // move back to last inbounds collumn
      }

      if(direction === 2 || direction === 3) { // if direction is Left or Up
        for(this[current.colOrRow[this.currentDir]]--; this[current.colOrRow[this.currentDir]] >= this[lastMatrixColOrRow]; this[current.colOrRow[this.currentDir]]--) { // move one and iterate currentCol till last Collumn  
          this.populateIterate(this.currentRow, this.currentCol); // populate the collumns with the current number + increment currentNumber
        };
        this[current.colOrRow[this.currentDir]]++; // move back to last inbounds collumn        
      }
      if(shrink) shrinkFunc(direction);
    };

    while(this.CurrentIsLessThanMatrix()) {

      if(this.currentDir === 4) this.currentDir = 0; // reset direction to R after it reaches U
      if(currentLoop === 2) { // start shrinking after the second loop
        shrink = true;
      }
      printDirection(this.currentDir, shrink);

      this.currentDir++;
      currentLoop++;
    }
  };

  read(matrix: number[][]): number[] {
    const matrixC = matrix.map((arr) => arr.slice()); // copy the matrix
    let results: number[] = [];  
    
    while(results.length < this.collumn*this.row) {      
      results.push(        
        ...matrixC.shift(),
        ...matrixC.map(array => array.pop()),
        ...(matrixC.pop() || []).reverse(),
        ...matrixC.map(array => array.shift()).reverse()
      );
    }  
    return results.filter(e => e !== undefined); // remove undefined
  }
};