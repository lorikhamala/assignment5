
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. 
//But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

let num1 = parseInt( prompt("Please enter a number.") );
let num2 = parseInt( prompt("Please enter another number.") );
let result;

 

const multiplication = (num1, num2) => {
  result = 0;
  for (let i = 0; i < num2; i++){
    result += num1;
  }
  return result;
}
multiplication(num1, num2);
alert( `The result of ${num1} added ${num2} times is ${result}.`);
console.log( `The result of ${num1} added ${num2} times is ${result}.`);


const answer1 = multiplication(num1, num2);
console.log('answer1', answer1);

const htmlTarget = document.getElementById('a-1');
htmlTarget.innerHTML = answer1;



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if 
//the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the 
//other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first 
//in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
// vowelOrConsonant = () => {
//   return
// }

//+++++++++++++++++++++++++++++++++++

//set variables:
// - a prompt that accepts a phrase from the user
// - a variable creating an array of letters from the user generated phrase
// - variables to hold the arrays for vowels and consonants
// - variable to hold a final message to return

let words = prompt("Please tell me a song that you like.");
let wordsArray = Array.from(words);
let vowels = [ ];
let consonants = [ ];
let message;

// create a function that takes the array of letters from the user inputted phrase, 
// loop through each letter to determine if it is a vowel or consonant
// push the vowels into the vowels array, and push the consonants into the consonant array

function vowelOrConsonant(letters)  {
  for( let i= 0; i<=letters.length; i++) {
    let letter = letters[i];
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowels.push(letter);
    }else {
      consonants.push(letter);
    }
  }
}

// call the function

vowelOrConsonant(wordsArray);

// create arrays combining the vowels and consonants, one with vowels first, one with consonants

let vowelsFirst = [...vowels, ...consonants];
let consonantsFirst = [...consonants, ...vowels];

// ask the user which to display first, vowels or consonants, and return the array as requested
// then send  an alert displaying the message

whichFirst = prompt("Which would you like to display first, the vowels or the consonants? Please answer   vowels  or   consonants  ");
if (whichFirst === "vowels") {
    message = ` Vowels: ${vowels}. Consonants: ${consonants}. All letters, with vowels first: ${vowelsFirst}. ` ;
} else if (whichFirst === "consonants") {
    message = `Consonants: ${consonants}.  Vowels: ${vowels}. All letters, with consonants first: ${consonantsFirst}.`
} else {
    message = "You were supposed to write  vowels   or   consonants."
}


alert(message); 

//problem: what is the best way to test if the user is only submitting letters and not other datatypes? 
//problem: the code is running but keeps returning undefined at the end and i'm not sure why.
//problem: had problems with converting .toLowerCase

const answer2 = vowelOrConsonant(wordsArray);

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 
//oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player 
//finds the number, then the program must show a congratulations message (alert) with the name of the player in 
//upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following 
//Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. 
//Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins

// guessTheNumber  = () => {
//   return
// }



const randomNum = Math.floor(Math.random() *(50 - 10 + 1) ) + 10 ; 

const name = prompt("Welcome to the Guessing Game! What's your name?");

let failNumbers = [ ];

for (let i = 3; i >=1; i--) {

  let guess = parseInt( prompt(` Hi ${name}! Please guess the random number between 10 and 50!`) ) ;

  if (guess === randomNum) {
    alert("CONGRATULATIONS, ${name.toUpperCase()}!! You guessed it!");
    break;
  } else {
    alert(`Sorry, ${name}, that wasn't the number.  You have ${i-1} tries left.`)
    failNumbers.push(guess);
  }
} 

alert(`GAME OVER. You guessed these numbers: ${failNumbers}. The real number was ${randomNum}.`);

//Problem: I'm not sure how to say, on the last try,  end it.





const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user 
//for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria 
//to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. 
//finally, the return value has to be the string sorted of the property selected separeted with a semicolon. 
//Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; 
//Walter Isaacson; The Road Ahead"


//Note- I'm not really sure what I'm supposed to do here and I don't know how to sort. 
//I'm gonna go ahead and turn this in and maybe come baack to it later!  --LFK

sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

  return
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
