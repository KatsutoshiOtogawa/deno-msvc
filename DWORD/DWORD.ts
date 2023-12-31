
type DWORD = number;

/**
 * 
 * @param num 
 * @returns {boolean}
 */
function type_gurad_DWORD(num: number): num is DWORD {
    return Number.isInteger(num) && 0 <= num && num <= (2 ** 32) -1;
}

export {
    type_gurad_DWORD,
    type DWORD
}


