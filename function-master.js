//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////




function objectValues(object) { // num 13
//   Should take an object and return its values in an array
// return statement
    return Object.values(object);
  
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 
function keysToString(object) { // num 14
// Should take an object and return all its keys in a string each separated with a space"
// use join method to return keys
return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { // num 15
    // Should take an object and return all its string values in a string each separated with a space"
    // create loop
    let result = '';
    // create loop
    for (const key in object) {

        // type of value secured
        if (typeof object [key] === 'string') {
            // if statement
            if ( result.length > 0 ) {
                // result
                result += ' ';

            }
            // result
                result += object[key];
            }
        }
        // return result
        return result;
}


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { // num 16
    // Should take one argument and return 'array' if its an array and 'object' if its an object"
    // array.isarray method to see if true or false
    if(Array.isArray(collection)){
        // return array
        return 'array';
        // else statement
    }else{
        // return object 
    return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) { // num 17
 // Should take a string of one word, and return the word with its first letter capitalized"
 // acces the index
 return string.charAt(0).toUpperCase() + string.slice(1);
}




//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { // num 18
    //  Should take a string of words and return a string with all the words capitalized 
    // capitalize words and join them back in single string
    const words = string.split(' ');
    // create loop
    for (let i = 0; i < words.length; i++) {
        // .slice method
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    // return join
    return words.join(' ');
}



//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { // num 19
// Should take an object with a name property and return 'Welcome <Name>!'"
const name = object.name;
//const capitalizedName = toUpperCase() + name.slice(1);
const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
return `Welcome ${capitalizedName}!`;
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) { // num 20
// Should take an object with a name an a species and return '<Name> is a <Species>'"


 const capitalizedName = object.name.charAt(0).toUpperCase() + object.name.slice(1);
 // capitalize first letter of name and species in the obj
 // code is returning a string
 const capitalizedSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1);
 // return
return `${capitalizedName} is a ${capitalizedSpecies}`;


//return capitalizedName + " is a " + object.species;
//return object.name[0]
//concat( " is a ", object.species);

//return `${object.name} is a  ${object.species}`;
}



//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) { // num 21
//  Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'",
if (object && object.noises && Array.isArray(object.noises) && object.noises.length > 0) {
    // return & join
    return object.noises.join(' ');
    // else
} else {
    // return
return "there are no noises";
}
}






//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { // num 22
//  Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
// use include method to return true
return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) { // num 23
// Should take a name and an object and add the name to the object's friends array then return the object
// create if statemnt 
if (!object.friends) {
    // emotyy array
    object.friends = [];
}
// push methid
object.friends.push(name);
// return object
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { // num 24
// Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
// access friend list to make sure if its true or false using include
// declar if statemnt with obj and array method
if (object && object.friends && Array.isArray(object.friends)) {
    // return statement
return object.friends.includes(name);
}
// return 
return false;
}




//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) { // num 25
//  Should take a name and a list of people, and return a list of all the names that <name> is not friends with

const notFriendsList = [];
// for statemnt
for (let i = 0; i < array.length; i++) {
    // if statmen
    //
   // create var
    const person = array[i];
    
        // if statemnt using the persons name
        //-- old note name is stricty unequal to the value name
        if (person.name !== name && !person.friends.includes(name)) {
        
            notFriendsList.push(person.name);

       // notFriendsList.push using push method);
       
    }
}
// return
return notFriendsList;
}




//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { // num26
// Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
object[key] = value;
// return
return object;

}




//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) { // num 27
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>"
// cretate loop
for (let i = 0; i < array.length; i++) {
    // delete
delete object[array[i]];
}
}



//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) { // num 28
// Should take an array and return an array with all the duplicates removed"
return Array.from(new Set(array));
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}