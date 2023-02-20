// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


const isIsogram = (str) => {
    if (str.length === 0) {
        return true
    }

    // .indexOf returns the FIRST index at which the given element can be found in the array. Duplicates will not be filtered into new array.
    return str.toLowerCase().split('').filter((elem, index, arr) => arr.indexOf(elem) === index).length === str.length
}


console.log(isIsogram("Dermatoglyphics")) // true
console.log(isIsogram('aba')) //false