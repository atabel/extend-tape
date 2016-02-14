import extend from 'object-assign';

const addAssertions = (tape, assertions) => {
    const myTape = (...args) => {
        args = args.map(arg => {
            if (typeof arg === 'function') {
                return t => {
                    Object.keys(assertions).forEach(assertName =>
                        t[assertName] = assertions[assertName].bind(t)
                    );

                    t.test = addAssertions(t.test, assertions);

                    arg.call(t, t);
                };
            } else {
                return arg;
            }
        });
        tape(...args);
    };

    return extend(myTape, tape);
};

export default addAssertions;
