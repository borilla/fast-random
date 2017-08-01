const random = require('fast-random');

// create a new generator
const SEED = 12345;
const r = random(SEED);

// produce some integer values
for (let i = 0; i < 8; ++i) {
	console.log(r.next());
}

// reset the seed
r.seed(SEED);

// produce some floating point values
for (let j = 0; j < 8; ++j) {
	console.log(r.float());
}
