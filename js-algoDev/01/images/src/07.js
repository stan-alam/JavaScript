/*
@param {number} number
@param {number} to the power
@return {numbner}
*/

export function iterativePower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i += 1) {
    result *= number;
  }

  return result;
}
