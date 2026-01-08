/**
 * Returns a promise that resolves after the given number of seconds.
 *
 * @param {number} [seconds=2] The number of seconds to wait.
 * @returns {Promise<void>} A promise that resolves after the given number of seconds.
 */
export function sleep(seconds = 2) {
	return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
