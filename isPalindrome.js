function isPalindrome(x) {
    let lowerCase = x.toLowerCase()
    let string = lowerCase
    
    if (string.length == 1){
      return true
    } else if (lowerCase === string.split("").reverse().join("")){
      return true
    } 
    return false
}
  