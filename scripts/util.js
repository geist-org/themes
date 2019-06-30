const fs = require('fs')
const path = require('path')

const src = path.resolve(__dirname, '../src')

const ensureIndex = name => {
  if (!fs.existsSync(path.resolve(src, name, 'index.styl'))) {
    throw new Error(`Missing entry in dir: ${name}. create "${name}/index.styl" to resolved.`)
  }
}

module.exports.getEntry = () => {
  const dirs = fs.readdirSync(src)
  dirs.forEach(ensureIndex)
  
  return dirs.reduce((pre, name) => {
    const entryKey = name === 'default' ? 'index' : name
    return Object.assign({}, pre, {
      [entryKey]: path.resolve(src, name, 'index.styl')
    })
  }, {})
}

module.exports.join = paths => path.join(__dirname, `../${paths}`)
