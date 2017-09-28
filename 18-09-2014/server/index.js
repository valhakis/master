const addon = require('../build/Release/addon.node');

console.log(addon.hello("WHAT IS THIS"));

console.log(addon.welcome());

// console.log('This should be eight:', addon.add());
console.log('This should be eight:', addon.add(3, 5));
console.log('This should be eight:', addon.add(3, 5));
console.log('This should be eight:', addon.add(3, 5));
console.log('This should be eight:', addon.add(3, 5));

addon.doit((msg) => {
  console.log('MESSAGE:', msg);
});
