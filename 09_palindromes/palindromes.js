const palindromes = function (str) {
    let str2 = str.toLowerCase().replace(/[^a-z]/g, '')
    
    return str2.split('').reverse().join('') == str2
};

// Do not edit below this line
module.exports = palindromes;
