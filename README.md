# fast-random

[![npm version](https://badge.fury.io/js/fast-random.svg)](https://badge.fury.io/js/fast-random)

Simple fast seedable pseudo-random number generator

## Purpose

Returns a single factory function that creates a new pseudo-random number generator (PRNG) based on the provided seed value. The generator returns 32-bit pseudo-random integers using the [Lehmer/Park-Miller generator](https://en.wikipedia.org/wiki/Lehmer_random_number_generator). This is a circular generator, which will cycle through all **2147483646** possible values before repeating

While not the most robust of PRNGs, the code has a very small footprint, is extremely quick and produces results good enough for many purposes. It has been written to work both within Node.js and in the browser

## Installation

```sh
npm install --save fast-random
```

## API Summary

Get a new random number generator

```js
const random = require('fast-random');

const seed = 12345;
const generator = random(seed);
```

The returned generator contains the following functions

* `seed(SEED_VALUE)`: set the current seed value (SEED_VALUE is an integer)
* `nextInt()`: get the next integer value _(1 <= x <= 2147483646)_
* `nextFloat()`: get the next float value _(0 <= x < 1)_

## Examples

### General use

```js
const random = require('fast-random');

// create a new generator
const seed = 12345;
const r = random(seed);

// produce some integer values
for (let i = 0; i < 8; ++i) {
	console.log(r.nextInt());
}

// reset the seed
r.seed(seed);

// produce some floating point values
for (let j = 0; j < 8; ++j) {
	console.log(r.nextFloat());
}
```

### Set seed from current time

```js
const random = require('fast-random');

const seed = Date.now();
const r = random(seed);
```

### Get integers in a given range

```js
const random = require('fast-random');

const seed = 12345;
const r = random(seed);

// get random number between a and b inclusive, ie (a <= x <= b)
function getRandomBetween(a, b) {
	return a + r.nextInt() % (b - a + 1);
}
```

## More information

* https://en.wikipedia.org/wiki/Lehmer_random_number_generator
* http://www.firstpr.com.au/dsp/rand31/
* http://lab.polygonal.de/2007/04/21/a-good-pseudo-random-number-generator-prng/
