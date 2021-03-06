var buffer3 = Buffer.from('ffffff', 'hex')
var buffer10 = Buffer.from('ffffffffffffffffffff', 'hex')

module.exports = {
  'function': function () {},
  'emptyType': new function EmptyType () {}(),
  'customType': new function CustomType () { this.x = 2 }(),
  '{ a: undefined }': { a: undefined },
  '{ a: Buffer3 }': { a: buffer3 },
  '{ a: Buffer10 }': { a: buffer10 },
  '{ a: { b: Buffer3 } }': { a: { b: buffer3 } },
  '{ a: { b: Buffer10 } }': { a: { b: buffer10 } },
  'Array5': [1, 2, 3, 4, 5],
  'Array6': [1, 2, 3, 4, 5, 6],
  'Array7': ['a', 'b', 'c', 'd', 'e', 'fghijklmno', 'p'],
  'Buffer': Buffer.alloc(0),
  'Buffer3': buffer3,
  'Buffer10': buffer10,
  'String4': 'boop'
}
