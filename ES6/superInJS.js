class Hero {
    constructor(name, hp, damage) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    applyDamage(damage) {
        this.hp -= damage;
    }
    attack(enemy) {
        enemy.applyDamage(this.damage);//this là thằng gọi hàm attack tức là Hero không phải enemy
        //  console.log(this);
    }
}
const heroA = new Hero('a', 100, 30);
const heroB = new Hero('b', 200, 5);
console.log({ heroA, heroB });//kết quả :
//{
//  heroA: Hero { name: 'a', hp: 100, damage: 30 },
//  heroB: Hero { name: 'b', hp: 200, damage: 5 }
//}
heroA.attack(heroB);
console.log({ heroA, heroB });
//{
//  heroA: Hero { name: 'a', hp: 100, damage: 30 },
//  heroB: Hero { name: 'b', hp: 170, damage: 5 }
//}

//-----------super
class RangeHero extends Hero {
    constructor(name, hp, damage, range) {
        super(name, hp, damage);//dùng lại các phép gán của class cha
        this.range = range;
    }
    attack(enemy) {
        super.attack(enemy);//dùng  lại các lệnh của hàm attack của class cha
        this.hp += this.damage;
    }
}
const heroRange = new RangeHero('range', 100, 30, 'kkk');
const heroD = new Hero('d', 200, 5);
console.log({ heroRange, heroD });//kết quả :
//{
//  heroRange: RangeHero { name: 'range', hp: 100, damage: 30, range: 'kkk' },
//  heroD: Hero { name: 'd', hp: 200, damage: 5 }
//}
heroRange.attack(heroD);
console.log({ heroRange, heroD });
  //{
  //  heroRange: RangeHero { name: 'range', hp: 130, damage: 30, range: 'kkk' },
  //  heroD: Hero { name: 'd', hp: 170, damage: 5 }
  //}