var Emitter = require('./emitter');

var emtr = new Emitter();

//create listener
emtr.on('greet', function() {
    console.log('Somewhere, someone said hello.');
});

//create another listener
emtr.on('greet', function() {
    console.log('A greeting occured!');
})

console.log('Hello!');
// this finds the property 'greet' and runs through the array. Above, we added two functions to the array
emtr.emit('greet');