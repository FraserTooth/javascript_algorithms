
// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...

// Example 1:

// Input: "A"
// Output: 1

// Example 2:

// Input: "AB"
// Output: 28

// Example 3:

// Input: "ZY"
// Output: 701


/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
    let output = 0
    if(typeof s !== "string" || s.length === 0){
        return output
    }

    
    const asciiStart = 64
    const numbers = [...s].map(letter => {
        return letter.charCodeAt(0)-asciiStart
    })

    numbers.forEach((num,index) => {
        const charPow = s.length - index - 1
        output += (Math.pow(26,charPow))*num
    })
    return output
};

module.exports = {titleToNumber}