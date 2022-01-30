import Bowman from './components/Bowman';
import Swordsman from './components/Swordsman';
import Magician from './components/Magician';
import Daemon from './components/Daemon';
import Undead from './components/Undead';
import Zombie from './components/Zombie';

const archer = new Bowman({
  name: 'John',
});

const warrior = new Swordsman({
  name: 'Loky',
});

const mag = new Magician({
  name: 'Dany',
});

const valkiry = new Daemon({
  name: 'Lilu',
});

const knight = new Undead({
  name: 'HightKing',
});

const zombie = new Zombie({
  name: 'Foo',
});

window.zombie = zombie;

console.log(archer);
console.log(warrior);
console.log(mag);
console.log(valkiry);
console.log(knight);
console.log(zombie);

zombie.levelUp();
console.log(zombie);
