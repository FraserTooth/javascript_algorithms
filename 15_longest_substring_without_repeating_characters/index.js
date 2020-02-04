// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 

// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    if(typeof s !== "string"){
        return 0
    }
    let longest = 0;
    if(s.length === 0){
        return 0
    }else if(s.length === 1){
        return 1
    }

    const dequeue = [];

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if(!dequeue.includes(letter)){
            dequeue.push(letter)
        } else {
            while(dequeue.includes(letter)){
                dequeue.shift()
            }
            dequeue.push(letter)
        }
        longest = dequeue.length > longest ? dequeue.length : longest
    }
    return longest
};


module.exports = { lengthOfLongestSubstring };
