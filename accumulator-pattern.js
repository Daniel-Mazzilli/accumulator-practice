/*
  SUM ALL NUMBERS
  ---------------
  Write a function that sums all numbers in an array.
*/
function sumAllNumbers(numbers) {
    let sum = 0;
    for(const num of numbers) {
        sum += num;
    }
    return sum;
}

// console.log(sumAllNumbers([10, 20, 30])); //> 60
// console.log(sumAllNumbers([10 - 10])); //> 0
// console.log(sumAllNumbers([])); //> 0

/*
  PRESENT ALL STATES
  ---------------
  Write a function that adds all of the states below to a string. The string should be prefixed with "STATES: " and all states should be separated by a comma and a space.

  If there are no states, just print "STATES: ".
*/
function presentAllStates(states) {
    let str = ``;
    for(const state of states) {
        str += state + `, `;
    }
    return `STATES: ${str.slice(0, str.length-2)}`;
}

// console.log(presentAllStates(["Alaska", "New York", "Florida"]));
// //> "STATES: Alaska, New York, Florida, "
// console.log(presentAllStates([]));
// //> "STATES: "

/*
  HAS SPACE
  ---------------
  Write a function that determines whether or not any of the states provided include a space (i.e. " ") in their name.
*/
function hasSpace(states) {
    let hasSpace = false;
    for(const state of states) {
        if(state.includes(` `)) {
            hasSpace = true;
            return hasSpace;
        }
    }
    return hasSpace;
}

// console.log(hasSpace(["Alaska", "New York", "Florida"])); //> true
// console.log(hasSpace(["Alaska", "Montana", "Florida"])); //> false

/*
  IS VALID
  ---------------
  Write a function that returns false if any state abbreviation is longer than two characters.
*/
function isValid(states) {
    let isLessThanTwo = true;
    for(const state of states) {
        if(state.length > 2){
            isLessThanTwo = false;
            return isLessThanTwo;
        }
    }
    return isLessThanTwo;
}

// console.log(isValid(["AK", "NYC", "FL"])); //> false
// console.log(isValid(["AK", "WA", "FL"])); //> true

/*
  KEBAB CASE
  ---------------
  Write a function that returns a new array of all the states in kebab casing.
*/
function kebabCase(states) {
    let stateUpdate = [];
    for(const state of states) {
        stateNew = state.replace(` `, `-`)
        stateUpdate.push(stateNew.toLowerCase());
    }
    return stateUpdate;
}

// console.log(kebabCase(["Alaska", "New York", "Florida"]));
// //> [ "alaska", "new-york", "florida" ]
// console.log(kebabCase([]));
// //> []

/*
  FIND
  ---------------
  Write a function that looks for a state by name. If that state is found, return the state name. If it is not found, return `null`.
*/
function find(states, name) {
    let targetState = null;
    for(const state of states) {
        if(state === name){
            targetState = name;
            return targetState;
        }
    }
    return targetState;
}

console.log(find(["Alaska", "New York", "Florida"], "Alaska")); //> "Alaska"
console.log(find(["Alaska", "New York", "Florida"], "Montana")); //> null

/*
  FILTER ABBREVIATIONS
  ---------------
  Write a function that filters out all strings equal to or longer than 3 characters. Return a new array with just the valid abbreviations.
*/
function filterAbbreviations(states) {
    let abbr = [];
    for(const state of states) {
        if(state.length < 3) {
            abbr.push(state);
        }
    }
    return abbr;
}

console.log(filterAbbreviations(["AK", "MT", "WA", "NYC"]));
//> [ "AK", "MT", "WA" ]
console.log(filterAbbreviations(["Alaska", "New York", "Florida"]));
//> []