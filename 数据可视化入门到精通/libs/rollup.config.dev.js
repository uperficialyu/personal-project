const path = require('path');
const resolve = require('rollup-plugin-node-resolve');

const inputPath = path.resolve(__dirname,'./src/index.js');
const outputPath1 = path.resolve(__dirname,'./dist/libs1.js');
const outputPath2 = path.resolve(__dirname,'./dist/libs2.js');

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputPath1,
      format: 'umd',
      name: 'libs1'
    },
    {
      file: outputPath2,
      format: 'es',
      name: 'libs2'
    }
  ],
  plugins: [
    resolve()
  ]
}