import Parser from './frontend/parser'
import { createGlobalEnv } from './runtime/environment'
import { evaluate } from './runtime/interpreter'

import fs from 'node:fs'

run('./src/test.txt')

async function run(filename: string) {
  const parser = new Parser()
  const env = createGlobalEnv()

  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return
    }

    const program = parser.produceAST(data)

    const result = evaluate(program, env)
    console.log(result)
  })
}
