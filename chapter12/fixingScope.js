specialForms.set = (args, scope) => {
    // Your code here.
    let name = args[0].name;
    let value = evaluate(args[1], scope);
    while (scope) {
        // While loop continues until the getPrototypeOf(scope) does not return
        // anything meaningful (null) at which point throws an error
        if (Object.prototype.hasOwnProperty.call(scope, name)) {
            scope[name] = value;
            return value;
        }
        scope = Object.getPrototypeOf(scope);
    }
    throw new ReferenceError(`Binding is undefined, binding name: ${name}`);
};

run(`
  do(define(x, 4),
     define(setx, fun(val, set(x, val))),
     setx(50),
     print(x))
  `);
// → 50
run(`set(quux, true)`);
  // → Some kind of ReferenceError