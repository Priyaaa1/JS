// Immediately Invoked Function Expression (IIFE)

(function one() {
    // named IIFE
    console.log(`DB Connected`);
})(); // DB Connected

// global scope k pollution ko htane k liye IIFE use krte h

(function two() {
    // named IIFE
    console.log(`DB Connected 2`);
})();  // DB Connected 2


( (name) => {
    console.log(`DB Connected 2 ${name}`);
})("priya");  // DB Connected priya