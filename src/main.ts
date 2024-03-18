import Parser from './frontend/parser'
import { evaluate } from './runtime/interpreter'
repl()

function repl() {
  const parser = new Parser()
  console.log('\nRepl v0.1')

  // Continue Repl Until User Stops Or Types `exit`
  while (true) {
    const input = prompt('> ')
    // Check for no user input or exit keyword.
    if (!input || input.includes('exit')) {
      throw new Error()
    }

    // Produce AST From sourc-code
    const program = parser.produceAST(input)

    const result = evaluate(program)
    console.log(result)
  }
}
