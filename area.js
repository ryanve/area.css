var lf = '\n'
var fs = require('fs')
var path = require('path')
var file = {
  json: 'area.json',
  css: 'area.css'
}

function css(json) {
  var colon = ':'
  var separator = '\\='
  var props = json.props
  var values = json.values
  return props.map(function(property) {
    return Object.keys(values).map(function(code) {
      return '.' + [property, code].join(separator) + '{' + property + colon + values[code] + '}'
    }).join(lf)
  }).join(lf) + lf
}

function write(css) {
  fs.writeFile(path.resolve(file.css), css, function(err) {
    if (err) throw err
  })
}

fs.readFile(path.resolve(file.json), function(err, json) {
  if (err) throw err
  json = JSON.parse(String(json))
  write(css(json), 'area.css')
})
