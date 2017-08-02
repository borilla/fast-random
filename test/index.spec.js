var random = require('../index');

var chai = require('chai');
var expect = chai.expect;

/* eslint-disable no-multi-spaces */
var EXPECTED_VALUES = [
	{ seed: 0,          int1: 2147435376, int2: 1964877853, int3: 856088761,  float1: 0.9999775220639794,     float2: 0.9149675508169155, float3: 0.39864739440255553 },
	{ seed: 1,          int1: 48271,      int2: 182605794,  int3: 1291394886, float1: 0.00002247747035927835, float2: 0.0850324487174232, float3: 0.6013526051317831  },
	{ seed: 2,          int1: 96542,      int2: 365211588,  int3: 435306125,  float1: 0.00004495540637984444, float2: 0.1700648979005077, float3: 0.2027052102635663  },
	{ seed: 2147483645, int1: 2147387105, int2: 1782272059, int3: 1712177522, float1: 0.9999550441279589,     float2: 0.829935101633831,  float3: 0.7972947892707724  },
	{ seed: 2147483646, int1: 2147435376, int2: 1964877853, int3: 856088761,  float1: 0.9999775220639794,     float2: 0.9149675508169155, float3: 0.39864739440255553 }, // same as seed(0)
];
/* eslint-enable no-multi-spaces */
var FLOAT_PRECISION = 1e-12;

describe('random', function () {
	it('should be a function', function () {
		expect(random).to.be.a('function');
	});

	describe('when called', function () {
		var r;

		beforeEach(function () {
			r = random();
		});

		it('should return an object', function () {
			expect(r).to.be.an('object');
		});

		it('should contain a "seed" function', function () {
			expect(r.seed).to.be.a('function');
		});

		it('should contain a "nextInt" function', function () {
			expect(r.nextInt).to.be.a('function');
		});

		it('should contain a "nextFloat" function', function () {
			expect(r.nextFloat).to.be.a('function');
		});
	});

	EXPECTED_VALUES.forEach(function ({ seed, int1, int2, int3, float1, float2, float3 }) {
		describe(`when called with a seed value of ${ seed }`, function () {
			var r;

			beforeEach(function () {
				r = random(seed);
			});

			it('should return expected int values', function () {
				expect(r.nextInt()).to.equal(int1);
				expect(r.nextInt()).to.equal(int2);
				expect(r.nextInt()).to.equal(int3);
			});

			it('should return expected float values', function () {
				expect(r.nextFloat()).to.be.closeTo(float1, FLOAT_PRECISION);
				expect(r.nextFloat()).to.be.closeTo(float2, FLOAT_PRECISION);
				expect(r.nextFloat()).to.be.closeTo(float3, FLOAT_PRECISION);
			});

			describe('when seed is reset', function () {
				beforeEach(function () {
					r.seed(seed);
				});

				it('should reset the sequence', function () {
					expect(r.nextInt()).to.equal(int1);
					expect(r.nextInt()).to.equal(int2);
					expect(r.nextInt()).to.equal(int3);
				});
			});
		});
	});

	describe('when called without a seed', function () {
		var r1, r2;

		beforeEach(function () {
			r1 = random();
			r2 = random(0);
		});

		it('will effectively start with a seed of 0', function () {
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
		});
	});

	describe('when called with a seed of 0', function () {
		var r1, r2;

		beforeEach(function () {
			r1 = random(0);
			r2 = random(2147483646);
		});

		it('will effectively start with a seed of 2147483646', function () {
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
		});
	});

	describe('when called with a floating-point seed', function () {
		var seed = 456.789;
		var r1, r2;

		beforeEach(function () {
			r1 = random(seed);
			r2 = random(Math.floor(seed));
		});

		it('will effectively trim floating-point part', function () {
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
		});
	});

	describe('when called with a negative seed', function () {
		var seed = -5;
		var r1, r2;

		beforeEach(function () {
			r1 = random(seed);
			r2 = random(seed + 2147483646);
		});

		it('will effectively add 2147483646', function () {
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
			expect(r1.nextInt()).to.equal(r2.nextInt());
		});
	});
});
