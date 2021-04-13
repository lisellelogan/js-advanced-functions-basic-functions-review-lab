// Your code here

//saturdayFun function
    //returns string like "This Saturday I want to ..."
    //fill in the blank with the argument passed
    //make default 'roller-skate'
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

//mondayWork function
    //should return a string like "This Monday, I will..."
    //fill in blank with argument passed
    //default "go to the office"
function mondayWork(plan="go to the office"){
    return `This Monday, I will ${plan}.`;
}

//wrapAdjective function
//takes in parameter of string that will be used to create visual flair
//default value of string should be '*'
//should return a function
//inner function:
    //take single parameter that defaults to 'special'
    //return string of the form "You are..."

function wrapAdjective(effect="*"){
    return function(adjective="special"){
        return `You are ${effect}${adjective}${effect}!`
    }
}

//define object called Calculator 
// has function called add 
const Calculator = {
    add: function(a,b){
       return a+b;
    },

    subtract: function(a,b){
        return a-b;
    },

    multiply: function(a,b){
        return a*b;
    },

    divide: function(a,b){
        return a/b;
    }
}

//actionApplyer function
//takes in 2 arguments: starting integer, array of functions
//returns starting integer unchanged when array empty

function actionApplyer(startInteger, arr){
   let start = startInteger

   for(let i = 0; i < arr.length; i++){
        start = arr[i](start)
   }
}