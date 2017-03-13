function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i<= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

// exports is provided by Node and lets us export things from one file and bring them into another. Technically, our constructor function and our pingPong method have now become part of a module. A module is a group of JavaScript functions and data that comprises some sort of functionality.

//Think of exports as a giant, global JavaScript object. We are creating a new property on it called calculatorModule, and we are setting this property equal to our Calculator constructor function. And because we used a prototype to attach our pingPong() method, it gets dragged along as part of Calculator and stored in the new property of exports called calculatorModule.

exports.calculatorModule = Calculator;
