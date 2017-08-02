function random(seed) {
	function _seed(s) {
		if ((seed = s|0 % 2147483647) <= 0) {
			seed += 2147483646;
		}
	}

	function _next() {
		return seed = seed * 48271 % 2147483647;
	}

	function _float() {
		return (_next() - 1) / 2147483646;
	}

	_seed(seed);

	return {
		seed: _seed,
		next: _next,
		float: _float
	};
}

module.exports = random;
