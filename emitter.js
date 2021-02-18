// there are many ways to create a simple event emitter. Here, we are going to use
// function constructor

// use function constructor so you can create multiple emitters
function Emitter() {
//in this object there will be one property
    this.events = {};
}

// lets create a couple of methods
// first method is .on (to add listeners)

// [listener = the code that responds to an event]
Emitter.prototype.on = function (type, listener) {
    //check if it exists, if not, create an empty array
    this.events[type] = this.events[type] || [];
    //push listener function to the array
    this.events[type].push(listener);
}

//something happened - emitting an event
Emitter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

// make it available
module.exports = Emitter;