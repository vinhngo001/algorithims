class mouse {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
    }
}
const chuot = new mouse('mickey');
chuot.run();//mickey is running

// class inheritance
class animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log('eating ....');
    }
}
class bird extends animal {
    fly() {
        console.log('flying ....');
    }
}
const chim = new bird('kkkk');
chim.eat();//eating ....
chim.fly();//flying ....

class Parrot extends bird {
    speak() {
        console.log('speaking.....');
    }
}
const vet = new Parrot('aaaa');
vet.speak();//speaking.....

//========kế thừa trong constructor function
function DongVat(name) {
    this.name = name;
}
DongVat.prototype.ten = function () {
    console.log('my name is:' + this.name);
}
DongVat.prototype.eat = function () {
    console.log('eating eat.....');
}
function voi(name) {
}
voi.prototype = new DongVat();//voi kế thừa constructor func DongVat

var convoi = new voi('sdf');
convoi.eat();//eating eat.....
convoi.ten();//my name is:undefined

function Ho(name) {
    //ho kế thừa constructor function của động vật
    DongVat.apply(this, arguments);
}
Ho.prototype = new DongVat();
var ho = new Ho('hổ nâu');
ho.eat();//eating eat.....
ho.ten();//my name is:hổ nâu