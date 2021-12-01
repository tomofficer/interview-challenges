/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(nums) {
  if (nums.length === 1) return nums;
  
  const sorted = nums.sort((a, b) => { return a - b });
  
  let missing = 0;
  
  if (sorted[0] > 1 || sorted[sorted.length - 1] < 1) {
    missing = 1;
  } else {
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i + 1] - sorted[i] > 1) {
        missing = sorted[i] + 1;
      }
    }
  }
  if (!missing) {
    missing = sorted[sorted.length -1] + 1;
  }
  return missing;
}

/**
 * Use an iterative  strategy for finding the missing number in an array
 */
function missingNumberSum(nums) {
  const sorted = nums.sort((a, b) => { return a - b });
  
  const n = sorted[sorted.length - 1];
  
  let ideal = (n * (n + 1)) / 2;
  let actual = 0;
  
  for (let i = 0; i < sorted.length; i++) {
    actual += sorted[i];
  }
  let difference = ideal - actual;
  if (difference === 0) difference = sorted[sorted.length -1] + 1;
  return difference;
}