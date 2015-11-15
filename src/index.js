export default function addAssertions (tape, assertions) {
    return (testName, testBody) => tape(testName, t => {
        for (let prop in assertions) {
            t[prop] = assertions[prop].bind(t);
        }

        t.test = addAssertions(t.test, assertions);

        testBody.call(t, t);
    });
}
