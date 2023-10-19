
type UINT = number;

/**
 * 
 * @param num 
 * @returns {boolean}
 */
function type_gurad_UINT(num: number): num is UINT {
    return Number.isInteger(num) && 0 <= num && num <= (2 ** 32) -1;
}

export {
    type_gurad_UINT,
    type UINT
}
