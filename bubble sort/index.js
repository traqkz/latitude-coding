//start with unsorted list
var nums = new Array;

for (let x = 0; x < 50000; x++) {
    nums.push(Math.floor(Math.random() * 10));
}
console.log("unsorted")
console.log(nums)

//sort said list using bubblesort

var ops = 0;

for (let j = 0; j < nums.length; j++)

    for (let i = 0; i < nums.length - j - 1; i++) {
        ops++;

        if (nums[i] > nums[i + 1]) {
            var buffer = nums[i];
            nums[i] = nums[i + 1]
            nums[i + 1] = buffer
        }
    }



console.log("sorted")
console.log(nums)

console.log(ops + " operations")
document.getElementById("result").innerHTML = nums;

