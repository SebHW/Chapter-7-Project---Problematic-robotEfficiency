// Modify these definitions...
// Triple dot notation will spread each element of a string or object
// then pass each individual element as the argument to that arrow function
// which returns each element
topScope.array = (...values) => values;

// Passes the javascript array to this arrow function and returns the length
// of that array
topScope.length = array => array.length;

// Takes array and n as arguments. Returns the nth value in the array
topScope.element = (array, n) => array[n];;

run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6