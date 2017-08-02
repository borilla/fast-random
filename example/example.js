const random = require('../index');

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
