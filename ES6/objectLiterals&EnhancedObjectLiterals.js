//---------constructor function
function mouse(name) {
    this.name = name;
}
mouse.prototype.run = function () {
    console.log(`${this.name} is running`);
}
const mickey = new mouse('mickey');
mickey.run();//mickey is running

//-----------object literals
//là object được tạo ra bằng cặp { }
const jerry = {
    name: 'jerry',
    run: function () {
        console.log(`${this.name} is running`);
    }
};
jerry.run();//jerry is running

//------------enhanced object literals
//bình thường object có cặp key:value hoặc key:function(){ } nhưng với enhanced thì chỉ cần variable hoặc nameFunc(){}
const name = 'tome';
const cat = {
    name,
    run() {
        console.log(`${this.name} is running`);
    }
};
cat.run();//tome is running