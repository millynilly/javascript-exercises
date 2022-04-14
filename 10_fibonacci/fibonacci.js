const fibonacci = function(num) {
    let f = [0, 1]
    let fib
    let i = 0

    num = +num
    
    if (num < 1) { return 'OOPS' }
    if (num == 1) { return 1}

    while (i < num - 1) {
        fib = f[0] + f[1]
        f[0] = f[1]
        f[1] = fib
        i++
    }  
    return fib
}

// Do not edit below this line
module.exports = fibonacci
