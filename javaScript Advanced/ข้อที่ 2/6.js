const string1 = "test"
const string2 = "tset"

const isTheSameAnagram = ( string1 , string2 ) => {

 if(!string1 || !string2 || string1.length !== string2.length){return false;}

 let lS1 = string1.toLowerCase();
 let lstring2 = string2.toLowerCase();

 if(lS1 === lstring2) {return false;}

 let rS1 = lS1.split('').sort().join('');
 let rstring2 = lstring2.split('').sort().join('');

 return rS1 === rstring2;
}



const result = isTheSameAnagram(string1, string2);

console.log(result);