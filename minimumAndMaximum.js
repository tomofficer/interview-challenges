/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(nums) {
  if (nums.length === 0) return [];
  
  const sorted = nums.sort((a, b) => { return a - b });
  
  const result = [sorted[0], sorted[sorted.length - 1]];
  
  if (result[0] < 0 && result[1] < 0) {
    return result.reverse()
  }
  return result;
}

/**
 * Implement an algorithm that uses iteration to find the minimum and maximum
 */
function minimumAndMaximumIterate(nums) {
  if (nums.length === 0) return [];
  
  let min = nums[0];
  let max = nums[0];
  
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (num > max) max = num;
    if (num < min) min = num;
  }
  let result = [min, max];
  return result;
}

