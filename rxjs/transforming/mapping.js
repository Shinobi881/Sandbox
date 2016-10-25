const Rx = require('rxjs/Rx');

const arr = ['1', 'bob', '3', 4, 'hello', 5, 6];
const arrLength = arr.length;

const source = Rx.Observable
  .interval(1000)
  .take(arrLength)
  .map(i => arr[i]);

const result = source
        .map(e => Number(e))
        .filter(f => !isNaN(f))
        .reduce((a, b) => a + b);

result.subscribe(x => console.log(x))

