function shout(string) {
   return string.toUpperCase()

}

function whisper(string) {
  return string.toLowerCase()

}

function sayHiToGrandma(string) { //defining function, parameter is string
  var lowercase = string.toLowercase(); //define variable to hold lower version of string
  var uppercase = string.toUpperCase();
      if (lowercase === string){ // testing if  stringn is lower case
        return "I can't hear you!";
      }
      else if (uppercase === string){
         return "YES INDEED!";
      }
      else if (string == "I love you, Grandma.") {
        return "I love you, too."

      }
}
