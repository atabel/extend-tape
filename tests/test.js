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

test('New assertion definitions are available in the t instance', t => {
    t.different(1, 2);
    t.biggerThan(4, 5);
    t.end();
});

test('Can use destructuring with new assertions', ({biggerThan, end}) => {
    biggerThan(4, 5);
    end();
});

test('Subtests', (t) => {
    t.test('New assertions are available in subtests', st => {
        st.biggerThan(4, 5);
        st.end();
    });
    t.end();
});

test(t => {
    t.biggerThan(4, 5);
    t.end();
}, 'Works with different params order');

test.skip('can skip tests', t => {
    t.fail();
    t.end();
});


test.skip('works with options', {skip: false}, t => {
    t.fail();
    t.end();
});
