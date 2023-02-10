// all exports from main will now be available as main.X
import * as main from './main';

test('is 1 + 1 = 2?', () => {    
  expect(1 + 1).toBe(2)  
})

// Notice: we're testing the keypress handler's effect on state and /nothing else/
//  We're not actually pressing keys!
//  We're not looking at what the console produces!
