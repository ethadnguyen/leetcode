// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, 
// with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k 
// (hence they are underscores).

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, 
// with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k 
// (hence they are underscores).
/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]
var removeDuplicates = function (nums) {
    if (nums.length <= 2)
        return nums.length;
    let count = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[count - 2] != nums[i] || nums[count - 1] != nums[i]) {
            nums[count++] = nums[i];
        }
    }
    return count;
};

const k = removeDuplicates(nums);
for (let i = 0; i < removeDuplicates(nums); i++) {
    console.log(nums[i]);
}
console.log(k);