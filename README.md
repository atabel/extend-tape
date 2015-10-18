[![npm version](https://badge.fury.io/js/extend-tape.svg)](https://badge.fury.io/js/extend-tape)
# extend-tape
Extends [Tape](https://github.com/substack/tape) with new assertions
## Install
```console
npm install --save-dev extend-tape
```
## How to use
```javascript
import tape from 'tape';
import addAssertions from 'extend-tape';

// add a new assertion: biggerThan
const test = addAssertions(tape, {
    biggerThan (a, b) {
        this.ok(b > a, `is bigger than ${a}`);
    }
});

test('5 is bigger than 4', (t) => {
    t.biggerThan(4, 5);
    t.end();
});
```

## Run tests
```console
npm install
npm test
```
