import { filterByName , attackName , calculateDmgStab , calculateDps,calculateEps } from '../src/data.js';
import data from '../src/data/pokemon/pokemon.js';

describe('filterByName', () => {
  it('should be a function', () => { 
    const result = filterByName(data.pokemon,'ivysaur');
    expect(result[0].name).toBe('ivysaur');
  });
});




describe('return attackName', () => { 
  it('order by attacks name', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
        {
          'name': 'tackle',
          'type': 'normal',
          'base-damage': '5',
          'energy': '5',
          'move-duration-seg': '0.5'
        }
      ]
    };

    const result = ['vine whip', 'tackle'];
    expect(attackName(data['quick-move'])).toEqual(result);
  })
});



describe('return calculateDmgStab', () => {
 
  it('return calculateDmgStab', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
    
      ]
    };

    const result = [10.5];
    expect(calculateDmgStab(data['quick-move'], 'grass')).toStrictEqual(result);
  })
});



describe('return calculateDps', () => { 
  it('return calculateDps', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
    
      ]
    };

    const result = [18];
    expect(calculateDps(data['quick-move'], 'grass')).toStrictEqual(result);
  })
});



describe('return calculateEps', () => { 
  it('return calculateEps', () => {
    const data = {
      'quick-move': [{
          'name': 'vine whip',
          'type': 'grass',
          'base-damage': '7',
          'energy': '6',
          'move-duration-seg': '0.6'
        },
       
      ]
    };

    const result = [10];
    expect(calculateEps(data['quick-move'], 'grass')).toStrictEqual(result);
  })
});


//   it('returns `example`', () => {
//     expect(orderByName(bulbasaur, )).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

// export const orderByName = (a, b) => {
//   if (a.name < b.name) {
//     return -1;
//   }
//   if (a.name > b.name) {
//     return 1;
//   }
//   return 0;
// }

// ___________
// import cipher from '../src/cipher';

// describe('cipher', () => {

//   it('should be an object', () => {
//     expect(typeof cipher).toBe('object');
//   });

//   describe('cipher.encode', () => {

//     it('should be a function', () => {
//       expect(typeof cipher.encode).toBe('function');
//     });

//     it('should throw TypeError when invoked with wrong argument types', () => {
//       expect(() => cipher.encode()).toThrow(TypeError);
//       expect(() => cipher.encode(0)).toThrow(TypeError);
//       expect(() => cipher.encode(null, [])).toThrow(TypeError);
//       expect(() => cipher.encode(0, 0)).toThrow(TypeError);
//     });

//     it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
//       expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
//     });


//     it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
//       expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
//     });

   
//   });

//   describe('cipher.decode', () => {

//     it('should be a function', () => {
//       expect(typeof cipher.decode).toBe('function');
//     });

//     it('should throw TypeError when invoked with wrong argument types', () => {
//       expect(() => cipher.decode()).toThrow(TypeError);
//       expect(() => cipher.decode(0)).toThrow(TypeError);
//       expect(() => cipher.decode(null, [])).toThrow(TypeError);
//       expect(() => cipher.decode(0, 0)).toThrow(TypeError);
//     });

//     it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
//       expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
//     });

//     it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
//       expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
//     });

    
//   });

// })