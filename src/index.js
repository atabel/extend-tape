export default function addAssertions (tape, assertions) {
    return (testName, testBody) => tape(testName, (t) => {
        Object.assign(t, assertions);
        testBody(t);
    });
}
