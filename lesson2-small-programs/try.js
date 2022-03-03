let format = /[ `!@#%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
//            ^                                       ^   
// document.write(format.test("My@string-with(some%text)") + "<br/>");    //true
// document.write(format.test("My string with spaces") + "<br/>");        //true 
// document.write(format.test("MyStringContainingNoSpecialChars"));       //false


console.log(format.test('!'));