function random(seed) {
	function _seed(s) {
		if ((seed = s|0 % 2147483647) <= 0) {
			seed += 2147483646;
		}
	}

	function _next() {
		seed = seed * 48271 % 2147483647;

		return seed - 1;
	}

	function _float() {
		return _next() / 2147483646;
	}

	_seed(seed);

	return {
		seed: _seed,
		next: _next,
		float: _float
	};
}

module.exports = random;
