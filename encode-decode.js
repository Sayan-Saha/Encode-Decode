//global Dictionary to store key as the sentence + method to encrypt and value as encrypted sentence
var Dict = {};

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value).slice(0,-3);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

function pigLatin(str) {
  // Convert string to lowercase
  str = str.toLowerCase();
  // Initialize array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // Initialize vowel index to 0
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    // If first letter is a vowel
    return str + "yay";
  } else {
    // If the first letter isn't a vowel i.e is a consonant
    for (let char of str) {
      // Loop through until the first vowel is found
      if (vowels.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = str.indexOf(char);
        break;
      }
    }
    // Compose final string
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}

function pigLatin_Sentence(str){

    var sen = str;
    var res = "";
    str = str.split(" ");
    for ( let i = 0; i < str.length; i++){
      var x = pigLatin(str[i]);
      res += x + " ";
    }
    //"_01" for pig Latin encryption
    Dict[sen+"_01"] = res.trimRight();
    return res.trimRight();
}

function decrypt_pigLatin(str){

  return getKeyByValue(Dict,str);

}
//console.log(pigLatin_Sentence("Chips are yummy"));
//console.log(decrypt_pigLatin(pigLatin_Sentence("Chips are yummy")));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function shuffle(str) {
  var newArr = [];
  var neww = '';
  var text = str.replace(/[\r\n]/g, '').split(' ');
  
  text.map(function(v) {
    v.split('').map(function() {
      var hash = Math.floor(Math.random() * v.length);
      neww += v[hash];
      v = v.replace(v.charAt(hash), '');
    });
    newArr.push(neww);
    neww = '';
  });
  var res = newArr.map(v => v.split('').join('')).join(' ');
  //"_02" for shuffle encryption
  Dict[str+"_02"] = res.trimRight();
  return res;
}

function decrypt_shuffle(str){

  return getKeyByValue(Dict,str);

}
var shuffle_result = shuffle("chips are yummy");
console.log(shuffle_result);
console.log(decrypt_shuffle(shuffle_result));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(Dict);

