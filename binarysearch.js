//divide and conquer algorithms

//find = 1
//left = 0
//right = 5
//mid = left + right /2 so 2 (INDEX)

// L      M        R
//[1, 2, [3], 4, 5, 6] 1 < 3 so search left 
// 0  1  2  3  4  5  6

//left = 0
//right = 3
//mid = 0 + 3 / 2 = 1 (INDEX)
//L   M    R
//[1, [2], 3, 4, 5, 6] 1 < 2 yes so search left
// 0  1  2  3  4  5  6

//left = 0
//right = 1
//mid = 0 + 1 / 2 = 0
// LM   R
//[[1], 2, 3, 4, 5, 6] 2 == 1 so return 
function binarySearch(unsortedList, find) {
    var leftIndex = 0;
    var rightIndex = unsortedList.length - 1;
    var middle = Math.floor((leftIndex + rightIndex) / 2);

    while (leftIndex <= rightIndex) {
        //search right section of array
        if (find > unsortedList[middle]) {
            //left index is middle + 1
            //[1, 2, [3], 4, 5, 6] looking for 6
            // 0  1   2   3  4  5 (Index)

            //6 > 3 so move right
            //leftIndex =  3 & rightIndex = 5
            leftIndex = middle + 1;
        } else if (find < unsortedList[middle]) {
            rightIndex = middle - 1;
        } else {
            console.log("Found!");
            return middle;
        }
        middle = Math.floor((leftIndex + rightIndex) / 2);
    }

    console.log("Not Found!");
}

function binarySearchR(unsortedList, find) {

    if (unsortedList.length == 0) {
        console.log("NOT Found!");
        return;
    }

    var middle = Math.floor((unsortedList.length - 1) / 2);
    var halfed = [];

    // search right side of array
    if (find > unsortedList[middle]) {
        halfed = unsortedList.slice(middle + 1);
    } else if (find < unsortedList[middle]) {
        //slice api when we pass 5 it get element up to 4
        //so we pass in middle however it actualy 
        //get middle-1 elements
        halfed = unsortedList.slice(0, middle);
    } else {
        console.log("Found");
        return;
    }
    binarySearchR(halfed, find);
}

binarySearchR([1, 2, 3, 4, 5, 6], 0);