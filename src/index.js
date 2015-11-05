export default function addAssertions (tape, assertions) {
    return (testName, testBody) => tape(testName, function (t) {
        for(let prop in assertions) {
            t[prop] = assertions[prop].bind(t);
        }
        testBody.call(this, t);
    });
}
