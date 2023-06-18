class CoffeeMachine{
    makeCoffee(){
      console.log('making coffe...');
    }
  }
  
  class SpecialCoffeeMachine extends CoffeeMachine{
    //overriding - ghi đè
    makeCoffee(cb){
      console.log('making coffee and do something...');
      cb();
    }
    // makeCoffee(color,time){
    //   console.log('coffee making has color:'+color+'and time is:'+time);
    // }
    //js không thể chuyền số lượng tham số khác nhau là hàm khác nhau khi hàm cùng tên -tính đa hình của oop như oop trong java
  }
  const coffeeMachine=new SpecialCoffeeMachine();
  coffeeMachine.makeCoffee(function(){
    console.log('callback func is runed');
  });
  //making coffee and do something...
  //callback func is runed
  
  // coffeeMachine.makeCoffee('blue',15);