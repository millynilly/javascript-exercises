const repeatString = function(str, num) {
    if (num < 0) {
        return 'ERROR'
    } else {
        let newStr = ""
        for (let i = 0; i < num; i++) {
            newStr = newStr.concat(str)
        }
        return newStr
    }
};

// Do not edit below this line
module.exports = repeatString;
