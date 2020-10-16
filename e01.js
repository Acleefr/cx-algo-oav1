function howManyCamelCase(str = ' ') {
    let count = 0

    for(let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i)

        if (i != 0 && code >= 65 && code <= 90) {
            count++
        }
    }
    return count
}

console.log(howManyCamelCase('testHowManyCamelCase'))