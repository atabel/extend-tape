# extend-tape

[![npm](https://img.shields.io/npm/v/extend-tape.svg)](https://www.npmjs.com/package/extend-tape)
[![npm](https://img.shields.io/npm/l/extend-tape.svg)](https://www.npmjs.com/package/extend-tape)
[![Build Status](https://travis-ci.org/atabel/extend-tape.svg)](https://travis-ci.org/atabel/extend-tape)

Extends [Tape](https://github.com/substack/tape) with new assertions

## Install
```
$ npm install --save-dev extend-tape
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
```
$ npm install
$ npm test
```
