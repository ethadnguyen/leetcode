/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1, 1, 2];
var removeDuplicates = function (nums) {
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[count] !== nums[i]) {
            nums[++count] = nums[i];
        }
    }
    return count + 1;
};

var count = removeDuplicates(nums);

console.log(count);