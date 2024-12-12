// Our counter prototype is broken. Can you spot, what's wrong here?

// function Counter() {
//     this.value = 0;
//   }
//   Counter.prototype.increase() {
//     this.value++;
//   };
//   Counter.prototype.getValue() {
//     return this.value;
//   };
//   Counter.prototype.reset() {
//     this.value = 0;
//   };

function Counter() {
    this.value = 0;
  }
  
  Counter.prototype.increase = function() {
    this.value++;
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset = function() {
    this.value = 0;
  };

//   const counter = new Counter();
//   console.log(counter.getValue()); // 0
//   counter.increase();
//   console.log(counter.getValue()); // 1
//   counter.increase();
//   console.log(counter.getValue()); // 2
//   counter.reset();
//   console.log(counter.getValue()); // 0