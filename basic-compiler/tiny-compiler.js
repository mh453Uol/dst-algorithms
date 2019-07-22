class ASTNode {
    type = '';
    value = '';

    // Call Expression Variables
    name = '';
    params = [];
};

class TinyCompiler {

    /**
     * 1. Parsing - raw text (code) and convert into tokens i.e 
     *
     * (add 2 (subtract 4 2))
     *
     * Tokens might look something like this:
     *
     *   [
     *     { type: 'paren',  value: '('        },
     *     { type: 'name',   value: 'add'      },
     *     { type: 'number', value: '2'        },
     *     { type: 'paren',  value: '('        },
     *     { type: 'name',   value: 'subtract' },
     *     { type: 'number', value: '4'        },
     *     { type: 'number', value: '2'        },
     *     { type: 'paren',  value: ')'        },
     *     { type: 'paren',  value: ')'        },
     *   ]
     * 
     * and then a Abstract Syntax Tree i.e 
     *
     *   {
     *     type: 'Program',
     *     body: [{
     *       type: 'CallExpression',
     *       name: 'add',
     *       params: [{
     *         type: 'NumberLiteral',
     *         value: '2',
     *       }, {
     *         type: 'CallExpression',
     *         name: 'subtract',
     *         params: [{
     *           type: 'NumberLiteral',
     *           value: '4',
     *         }, {
     *           type: 'NumberLiteral',
     *           value: '2',
     *         }]
     *       }]
     *     }]
     *   }
     * 
     * 2. Transformation - take AST manipulates to do whatever the compiler want it to do.
     * 3. Code Generation - AST and convert it to new code i.e Lisp to C
     * 
     * 
     * 
     */

    /**
     * Given raw text (code) i.e (add 2 3) convert to tokens -
     * [
     *     {type: 'paren', value: '(' },
     *     {type: 'name', value: 'add'},
     *     {type: 'number', value: '2'},
     *     {type: 'number', value: '3'},
     *     {type: 'paren', value: '('}
     * ]
     */
    tokenizer(input) {

        let indexInString = 0;
        let tokens = [];
        let currentLetterInString = '';

        let number = new RegExp(/[0-9]/);
        let whitespace = new RegExp(/\s/);

        while (indexInString < input.length) {

            // currentLetterInString is:
            // 1. ( or ) - Create token with type paren
            // 2. number (0-n) have to read all chars until a space
            //  2.1 (add ^10021212 1212) and we are at index ^
            //      then we need to keep reading until a space or anything thats not a number
            // 3. Handle whitespace i.e (<remove  >add<remove   >1 2) 
            //    we dont need to store whitespace.
            // 4. Handle strings i.e (concat "foo" "bar") convert into 
            //    { type: 'string', value: 'foo'}
            // 4. names if not a paren or number we assume its a function
            //    so we need to keep reading until space


            currentLetterInString = input[indexInString];

            if (currentLetterInString === '(' || currentLetterInString === ')') {
                tokens.push({
                    type: 'paren',
                    value: currentLetterInString
                });
                indexInString++;

                console.log(tokens);
                // go to next loop cycle
                continue;
            }

            if (whitespace.test(currentLetterInString)) {
                indexInString++;
                continue;
            }

            if (number.test(currentLetterInString)) {
                // at the current index keep reading the input
                // until you get a anything that not a number i.e space, (,), [a-Z]
                let parsedNumber = '';
                // keep reading until a space,(,),[a-ZA-Z] is found and 
                // we havent reached the end of the string
                while (number.test(currentLetterInString) && indexInString < input.length) {
                    parsedNumber += currentLetterInString;
                    indexInString++;
                    // set the currentLetter here so next time 
                    // we enter while loops checks the next letter
                    currentLetterInString = input[indexInString];
                }

                tokens.push({
                    type: 'number',
                    value: parsedNumber
                });

                console.log(tokens);

                continue;
            }

            if (currentLetterInString == '"') {
                debugger;
                // keep reading until you '"' which signals the end
                // of the string
                let parsedString = '';
                // dont need to include '"'[
                indexInString++;
                currentLetterInString = input[indexInString];

                while (currentLetterInString != '"' && indexInString < input.length) {
                    parsedString += currentLetterInString;
                    indexInString++;
                    currentLetterInString = input[indexInString];
                }
                tokens.push({ type: 'string', value: parsedString });

                //exclude the '"' end closing quote
                indexInString++;
                continue;
            }

            // if here reach here then its not a parentheses or number 
            // so it must be a function call i.e ({add} 1 2)
            // (add[]2 (add[]3 2))

            if (input[indexInString - 1] == '(') {
                let parsedFunctionCall = '';
                // read until you find a space
                while (currentLetterInString !== ' ' && indexInString < input.length) {
                    parsedFunctionCall += currentLetterInString;
                    indexInString++;
                    currentLetterInString = input[indexInString];
                }

                tokens.push({
                    type: 'name',
                    value: parsedFunctionCall
                });

                continue;
            }

            indexInString++;
        }
    }

    /**
     * Given tokens 
     * [ 
     *   {type: 'paren', value: '('},   
     *   {type: 'name', value: 'add'},
     *   {type: 'number', value: 1},
     *   {type: 'number', value: 2},
     *   {type: 'paren', value: ')'}
     * ] convert it to a Abstract Syntax Tree (AST) -
     * { type: 'Program', body: [
     *  { type: 'CallExpression', name: 'add', params: 
     *      [
     *          {type: 'NumberLiteral', value: '2'}, 
     *          {type: 'NumberLiteral', value: '3'}
     *      ]
     *  }
     * ]}
     * @param {*} tokens 
     */
    parser(tokens) {

        let current = 0;

        let ast = {
            type: 'Program',
            body: []
        }

        function walk() {
            let token = tokens[current];

            // if number return ast number node
            if (token.type === 'number') {
                current++;
                return {
                    type: 'NumberLiteral',
                    value: token.value
                }
            }

            // if string return ast string node
            if (token.type === "string") {
                current++;
                return {
                    type: 'StringLiteral',
                    value: token.value
                }
            }

            /**
             * nested call expressions i.e 
             * {type: 'paren', value: '('},   
             * {type: 'name', value: 'add'},
             * {type: 'number', value: 1},
             * ////////// Nested Function Call ///////////
             *      {type: 'paren', value: '('},   
             *      {type: 'name', value: 'add'},
             *      {type: 'number', value: 1},
             *      {type: 'number', value: 2},
             *      {type: 'paren', value: ')'}
             * ///////////////////////////////////////////
             * {type: 'paren', value: ')'}
             */

            if (token.type === 'paren' && token.value === '(') {
                // we dont care about the ( just move the cursor
                current++;
                token = tokens[current];

                let node = {
                    type: 'CallExpression', name: token[current].value, params =[]
                };

                // move the cursor to point to either string or number params passed to function
                current++;
                token = tokens[current];

                // we want to create a whole CallExpression node with its params so keep reading
                // until token value is )
                while(
                    // allow numbers and strings literals to be added to params 
                    (token.type !== 'paren') ||
                    (token.type === 'paren' && token.value !== ')')
                ) {
                    node.params.push(walk()); 
                    // Only when recursion finishes we reach here
                    token = tokens[current];
                }
                current++;
                return node;
            }
        }

        while (current < tokens.length) {
            ast.body.push(walk());
        }
        console.log(ast);
        return ast;
    }
}

