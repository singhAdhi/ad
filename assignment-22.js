// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals.
//The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs

// The farmer has counted his animals and he gives you a
//subtotal for each species.
//You have to implement a function that returns the total number of legs of all the animals.

//The order of animals passed is animals(chickens, cows, pigs).

//Examples
function animals(chickens,cows,pigs){
    const total=(chickens*2+cows*4+pigs*4)
    console.log(`so the total no of legs of all animal is ${total}`)
}
animals(2, 3, 5) 

  animals(1, 2, 3)  

 animals(5, 2, 8)  
