import Character from '../components/Character';
import Bowman from '../components/Bowman';

let char;

beforeEach(() => {
  const charObject = {
    name: 'Ragnar',
    type: 'Swordsman',
  };
  char = new Character(charObject);
});

describe('Character class', () => {
  const brokenOptions = [
    {},
    { name: 'name' },
    { name: 1 },
    { type: 'string' },
    { type: 1 },
    { type: 1, name: 1 },
    { type: 'string', name: '1' },
    { type: 'string', name: '12345678910' },
    { type: 'Bowman', name: '12345678910' },
    { type: 'Bowman', name: '1' },
  ];

  test.each(brokenOptions)('should return Error for broken Object', (item) => {
    expect(() => {
      new Character(item);
    }).toThrow(Error);
  });

  test('should return correct object', () => {
    expect(char.name).toBe('Ragnar');
    expect(char.type).toBe('Swordsman');
  });

  test('should to set default attack and defence', () => {
    expect(char.attack).toBe(0);
    expect(char.defence).toBe(0);
  });

  const archer = new Bowman({
    name: 'John',
  });

  test('should to set attack and defence for sub classes =)', () => {
    expect(archer.attack).toBe(25);
    expect(archer.defence).toBe(25);
  });
});

describe('levelUp function: ', () => {
  test('shold return Err for dead char', () => {
    char.health = 0;
    expect(() => {
      char.levelUp();
    }).toThrow(Error);
  });

  test('should up health and charater parametrs', () => {
    char.health = 1;
    char.levelUp();
    expect(char.health).toBe(100);
    expect(char.level).toBe(2);
    expect(char.attack).toBe(char.attack * 1.2);
    expect(char.defence).toBe(char.defence * 1.2);
  });
});

describe('damage function: ', () => {
  const testCase = [{ health: 0 }, { health: -1 }];

  test.each(testCase)('shold return Err for dead char', (item) => {
    char.health = item.health;

    expect(() => {
      char.damage(50);
    }).toThrow(Error);
  });

  test('shold return new health after damage', () => {
    const points = 50;
    const result = 50 * (1 - 50 / 100);
    char.defence = 50;
    char.damage(points);
    expect(char.health).toEqual(100 - result);
  });
});
