// deepEqual uses ===

QUnit.test('isOutOfBounds test - too low', assert => {
  const val = 0
  assert.deepEqual(isOutOfBounds(0, min, max), true, '0 is out of bounds');
});

QUnit.test('isOutOfBounds test - lower edge', assert => {
  assert.deepEqual(isOutOfBounds(1, min, max), false, '1 is NOT out of bounds');
});

QUnit.test('isOutOfBounds test - upper edge', assert => {
  assert.deepEqual(isOutOfBounds(10, min, max), false, '10 is NOT out of bounds');
});

QUnit.test('isOutOfBounds test - too high', assert => {
  assert.deepEqual(isOutOfBounds(Infinity, min, max), true, 'infinity is out of bounds');
});

QUnit.test('async repeat test 3 times', async assert => {
  assert.deepEqual(await repeat(3, 'ask'), 'askaskask', '3x passes');
});

QUnit.test('async repeat test 1 times', async assert => {
  assert.deepEqual(await repeat(1, 'temp'), 'temp', '1x passes');
});

QUnit.test('async repeat test - bad count', async assert => {
  assert.deepEqual(await repeat(-1, 'ask'), `Specify a number between 1 and 10`, 'correctly rejected');
});

QUnit.test('async repeat test - bad string', async assert => {
  assert.deepEqual(await repeat(3, '  '), `Provide a valid string to copy`, 'correctly rejected');
});








