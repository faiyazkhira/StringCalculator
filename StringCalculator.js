function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /,|\n/; // Default delimiters
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        let delimiterStr = numbers.substring(2, delimiterEndIndex);
        delimiterStr = delimiterStr.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape special characters
        delimiter = new RegExp(delimiterStr);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }
    const numArray = numbers.split(delimiter).map(Number);
    console.log(`Split numbers: ${numArray}`);
    return numArray.reduce((sum, num) => sum + num, 0);
    
}

module.exports = add;
