// 3. Write a JavaScript program to find the indices of two numbers such that their addition is equal to a given target.

const findIndices = (target, nums) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return "No such numbers in the list";
}


console.log(findIndices(3, [1, 2, 3]));