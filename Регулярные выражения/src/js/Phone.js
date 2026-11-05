function phone(number) {
    let newNumber = number.replace(/[()\s/.-]/g, '');
    if(newNumber.length === 11 && newNumber[0] === '8') {
        newNumber = newNumber.replace(/^8/, '7');
    } 
    return `+${newNumber}`;
}
