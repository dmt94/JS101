function DinoError(message) {
  this.name = "DinoError";
  this.message = message;
}
DinoError.prototype = new Error();

function cloneDinosaur(name, type) {
  var validTypes = ["Apatosaurus", "Dilophosaurus", "Tyrannosaurus Rex", "Stegosaurus"];
  
  try {
    if (validTypes.indexOf(type) === -1) {
      throw new DinoError("We don't know how to clone the dinosaur type: " + type);
    }
    
    var myDinosaur = {
      name: name,
      type: type,
      dangerMessage: name.toUpperCase() + " IS COMING!!!",
    };
  
    return myDinosaur;
  } catch (e) {
  // when we use the instanceof keyword on a DinoError we will get back “DinoError” rather than simply “Error”
    if (e instanceof DinoError) {
      console.log("You experienced a DinoError!"); //console.log is for indication
    } else {
      console.log("You experienced a standard error.");
    }
    console.log(e.name + ": " + e.message);
    
    return undefined; //return value if this is the case
  } finally { //finally always runs
    console.log("Dinosaur clone function complete.");
  }
}

var dino = cloneDinosaur("Dino", "Brachiosaurus"); //function would return undefined, so dino is undefined
  // Logs:  You experienced a DinoError!
  // Logs:  DinoError: We don't know how to clone the dinosaur type: Brachiosaurus
  // Logs:  Dinosaur clone function complete.
console.log(dino);
  // Logs:  undefined
  
var spike = cloneDinosaur(null, "Stegosaurus");
  // Logs:  You experienced a standard error.
  // Logs:  TypeError: Cannot read property 'toUpperCase' of null
        //what causes this TypeError is the implementation of toUpperCase method on a null name
  // Logs:  Dinosaur clone function complete.
console.log(spike);
  // Logs:  undefined

var rex = cloneDinosaur("Rex", "Tyrannosaurus Rex");
  // Logs:  Dinosaur clone function complete.
console.log(rex);
  // Logs:  { name: 'Rex', type: 'Tyrannosaurus Rex', dangerMessage: 'REX IS COMING!!!' }


