//1Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values

function changeArray(arr) {
    const firstFour = arr.slice(0, 4).map(item => item * item);
    const lastTwo = arr.slice(-2).map(item => item + 10);
    const newArr = firstFour.concat(lastTwo);
    console.log(newArr);
   }
   changeArray([5,6,7,8,9,3,4,2,1]);

   //2Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
   let arrNum=[1,2,3,4,,5,6,7,8,9]
   let i=0
   while(i<arrNum.length){
if(arrNum[i]===arrNum[4]){
    break;
}
console.log(arrNum[i])
i++;
   }
   
//3Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

function arrayOfFruits(fruits){
    for (let j=0;j<fruits.length;j++){
        if(j===1){
            continue;
            
        }
        console.log(fruits[j]);
}
    }
    let fruits= ['apple','plum','banana','strawberries','kiwi'];
    arrayOfFruits(fruits);
    

//4Write a function that accepts an array of strings and console.logs each element using a for loop.
function arrayString(name){
    for(let i=0;i<=name.length; i++){
        console.log(name [i])
    }
}
arrayString(["Purity","Nancy","Jane","Joan","Faith","Tabby"])


//5Write a JavaScript function that takes a string as input and reverses it using a while loop. The function 
//should return the reversed string. 

function reverseString(word){
    let = i=word.length
    while(i--){
        console.log(word[i])
    }
}
reverseString("Cynthia")