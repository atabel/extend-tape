export default function addAssertions (tape, assertions) {
    return function (name, opts, callback) {
        const overrideCb = cb => t => {
            for (let prop in assertions) {
                t[prop] = assertions[prop].bind(t);
            }

            t.test = addAssertions(t.test, assertions);

            cb.call(t, t);
        };

        switch (arguments.length) {
            case 1: return tape(overrideCb(name));
            case 2: return tape(name, overrideCb(opts));
            case 3: return tape(name, opts, overrideCb(callback));
            default: return tape.apply(this, arguments);
        }
    };
}
