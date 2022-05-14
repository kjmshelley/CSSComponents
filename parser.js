const input = `
<div>
    <h1>Hello</h1>
</div>`;

console.log(input);

const CONSTANTS = {
    SPACE: 32,
    QUOTE: 34, // "
    SINGLE_QUOTE: 39, // '
    LT: 60, // <
    EQUAL: 61, // =
    GT: 62, // >
};

const isWhitespace = (c) => c.charCodeAt(0) === CONSTANTS.SPACE;
const isInvalidChar = (c) => c.charCodeAt(0) <= 31;
const isAlpha = (c) => (c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90) || (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122);
const isTag = (c) => ["div"].includes(c);

const tokens = [];
function parse (input) {
    for (let c = 0; c <= input.length - 1; c++) {
        let char = input[c];
        if (isInvalidChar(char)) continue;
        
        if (isWhitespace(char)) {
            tokens.push({ type: "space", html: '<span class="lc-tag space"> </span>' });
        } else if (char.charCodeAt(0) == CONSTANTS.LT) {
            tokens.push({ type: "lt", html: '<span class="lc-tag tag">&lt</span>' });
        } else if (char.charCodeAt(0) === CONSTANTS.GT) {
            tokens.push({ type: "gt", html: '<span class="lc-tag tag">&gt</span>' });
        } else if (char.charCodeAt(0) === CONSTANTS.EQUAL) {
            tokens.push({ type: "eq", html: "=" });
        } else if ([CONSTANTS.QUOTE, CONSTANTS.SINGLE_QUOTE].includes(char.charCodeAt(0))) {
            
        } else if (isAlpha(char)) {
            // tag char, attribute char
            //check to see if we are looking at a tag or attribute
            if (["lt", "quote"].includes(tokens[tokens.length-1].type)) {

            } else {

            }
        }
        //console.log(char);
    }
}

parse(input);
console.log(tokens);