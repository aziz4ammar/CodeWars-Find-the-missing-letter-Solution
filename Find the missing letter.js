const findMissingLetter = (array) => {
    for (let j = 1; j < array.length; j++) {
        const prev = array[j - 1].charCodeAt();
        const current = array[j].charCodeAt();
        if (current - prev !== 1) {
            return String.fromCharCode(prev + 1);
        }
    }
    
    return null;
}
