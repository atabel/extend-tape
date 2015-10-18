import tape from 'tape';
import addAssertions from '../src/';

const test = addAssertions(tape, {
    different (a, b, msg) {
        this.ok(a !== b, msg);
    },

    biggerThan (a, b) {
        this.ok(b > a, `is bigger than ${a}`);
    }
});

test('New assertion definitions are available in the t instance', (t) => {
    t.different(1, 2);
    t.biggerThan(4, 5);
    t.end();
});