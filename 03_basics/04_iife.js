// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);  //THIS IS NAMED IIFE
})();

//ek iife ke baad dusra iife likhne ke liye first iife ke baad ; lagate hai otherwise error show karta hai  imp*
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


//globle scope se polution nhi chhiye 0r immediately execute ho jaye so we ues iife  [()()]**