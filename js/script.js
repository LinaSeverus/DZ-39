'use strict';

let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
};

function deepFreeze ( obj ) {
    for(let key in obj){
    
            if (typeof obj[key] === 'object') 
            deepFreeze(obj[key]);
        
            Object.defineProperty(obj, `${key}`, {
                writable: false, 
                enumerable: false,
                configurable: false
                }
            );
    };
    return obj;
};


  deepFreeze(user);
 
  console.log( Object.getOwnPropertyDescriptors(user));
  console.log( Object.getOwnPropertyDescriptors(user.data));
  console.log( Object.getOwnPropertyDescriptors(user.data.d));
  console.log( Object.getOwnPropertyDescriptors(user.data.d.d1));