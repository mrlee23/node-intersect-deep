# node-intersect-deep

> The simple function for remaining intersected keys of objects.
## Introduction

The `intersect-deep` is simple function for remaining intersected keys of objects.
It will combine objects without any side effects and selects some keys that all objects has a value.

## Install
```shell
npm install intersect-deep
```

## How to use

```javascript
const intersectDeep = require('intersect-deep');
intersectDeep({a: 'hi', b: 'hey'}, {a: 'hey'}); // => {a: 'hey'}
```

## Examples

### `intersectDeep(objects...)` => {Object}

#### Simple objects
```javascript
const intersectDeep = require('intersect-deep');
intersectDeep({a: 1, b: 1},
              {a: 2, b: 2, c: 2},
              {a: 3}); // => {a: 3}

```

#### Complex objects (level more than 1)
```javascript
intersectDeep(
    {
        a: 1,
        b: 1,
        c: {
            aa: 1,
            bb: 1
        }
    },
    {
        a: 2,
        b: 2,
        c: {
            aa: 2
        }
    },
    {
        a: 3,
        b: 3,
        c: {
            aa: 3,
            bb: 3,
            cc: 3
        }
    }
);

// {
//      a: 3,
//      b: 3,
//      c: {
//          aa: 3
//      }
// }

 ```

#### If not equal types? Ignore it! (focus on value of `a`)
```javascript
intersectDeep(
    {
        a: 1,
        b: 1
    },
    {
        a: {
            aa: 2,
            bb: 2
        },
        b: 2
    }
);


// {
//    b: 2,
// }

intersectDeep(
	{
		a: 1,
		b: 1
	},
	{
		a: ['a', 'b'],
		b: 2
	}
);

// {
//    b: 2,
// }
```
