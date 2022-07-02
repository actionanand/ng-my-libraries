
export const  TAB = 9,
LEFT_ARROW =	37,
RIGHT_ARROW = 39,
BACKSPACE = 8,
DELETE = 46;

export const SPECIAL_CHARACTERS = [' ', '/', '(', ')', '+', '\\', '-', ','];

export function overWriteCharAtPosition(input:HTMLInputElement, position:number, key: string) {
  const currentVal = input.value;
  input.value = currentVal.slice(0, position) + key + currentVal.slice(position + 1);
}