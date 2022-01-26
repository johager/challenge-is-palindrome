/*
Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

isPalindrom("a")
returns true

isPalindrom("noon")
returns true

isPalindrom("hello")
returns false

Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter.

isPalindrom("Racecar")
// returns false

isPalindrom("racecar")
// returns true
*/

// Write your code below

function isPalindrome(str) {
    const endIndex =  str.length - 1
    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
        //console.log("index:", i, "char:", str[i], str[endIndex-i])
        if(str[i] !== str[endIndex-i]) {
            return false
        }
    }
    return true
}

function run(callback, str) {
    //console.log("---", str, "---")
    console.log(`isPalindrome('${str}'):`, callback(str))
}

console.log("=== test isPalindrome ===")
run(isPalindrome, 'a')
run(isPalindrome, 'noon')
run(isPalindrome, 'hello')
run(isPalindrome, 'Racecar')
run(isPalindrome, 'racecar')


const isPalindrome2 = (str) => {
    let rts = [] 
    str.split(``).forEach(ele => rts.unshift(ele))
    return rts.join('') === str
}

console.log("=== test isPalindrome2 ===")
run(isPalindrome2, 'a')
run(isPalindrome2, 'noon')
run(isPalindrome2, 'hello')
run(isPalindrome2, 'Racecar')
run(isPalindrome2, 'racecar')