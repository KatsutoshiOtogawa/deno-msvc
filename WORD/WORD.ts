
type WORD = number;

/**
 * 
 * @param num 
 * @returns {boolean}
 */
function type_gurad_WORD(num: number): num is WORD {
    return Number.isInteger(num) && 0 <= num && num <= (2 ** 16) -1;
}

export {
    type_gurad_WORD,
    type WORD
}


