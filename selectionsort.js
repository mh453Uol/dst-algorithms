//1st Implementation
//Left: [9,1,0] Right:[]
//Get smallest value from left and move to right,
//mark left smallest value to interger max
function selectionSort(unsortedList) {
    var copyOfUnsortedList = unsortedList;
    var sortedList = [];
    while (true) {
        if (sortedList.length === unsortedList.length) {
            return sortedList;
        }
        var smallestValue = getSmallestValue(copyOfUnsortedList);
        sortedList.push(smallestValue);

        var index = unsortedList.indexOf(smallestValue);
        copyOfUnsortedList[index] = Number.MAX_VALUE;
    }
}

function getSmallestValue(unsortedList) {
    return Math.min.apply(null, unsortedList);
}

var sortedList = selectionSort([9, 8, 2, 0, 1, -1]);
//console.log(sortedList);

//2nd Implementation 
//In place so we dont use a second array
//Array:[9,8,1,-1]
//1. First smallest value and swap current value
//Array:[9,8,1,-1] so 9, -1 will swap
//Array:[-1,8,1,9] so 8, 1 will swap
//Array: [-1,1,8,9] so 8 wil not swap
//Array: [-1,1,8,9] 
//Array: [-1,1,8,9] <- Dont need to sort last element

function inplaceSelectionSort(unsortedList) {
    var copyOfUnsortedList = unsortedList;
    var fromUnsortedIndex = 0;

    while (true) {
        if (fromUnsortedIndex === copyOfUnsortedList.length - 2) {
            return copyOfUnsortedList;
        }
        //                                        (Sorted)(Unsorted)
        //Each time we swap the left side is sorted [(-1,)(8,1,9]) the tailFrom get the unsorted part
        var unsortedElements = tailFrom(fromUnsortedIndex, copyOfUnsortedList);
        var smallestValue = getSmallestValue(unsortedElements);
        copyOfUnsortedList = swap(smallestValue, fromUnsortedIndex, copyOfUnsortedList);
        fromUnsortedIndex++;
    }
}

function tailFrom(index, unsortedList) {
    if (index <= 0) {
        return unsortedList;
    }
    return unsortedList.slice(index);
}

function swap(smallestValue, swapToIndex, unsortedList) {
    //get index of smallest value in unsorted list 
    //and swap from the smallest value to the correct position
    var swapFromIndex = unsortedList.indexOf(smallestValue);
    var swapToIndexValue = unsortedList[swapToIndex];
    unsortedList[swapToIndex] = smallestValue;
    unsortedList[swapFromIndex] = swapToIndexValue;
    return unsortedList;
}

//O(N*N) however uses less memory (variables etc) than other implementations above
function selectionSortFast(unsortedList) {
    var currentValue;
    var smallestValueIndex;
    //i is the current value index
    for (var i = 0; i < unsortedList.length; i++) {
        smallestValueIndex = i;
        // from current index iterate to find smallest value
        // keep track of smallest index so we can swap
        for (var j = i; j < unsortedList.length; j++) {
            if (unsortedList[j] < unsortedList[smallestValueIndex]) {
                smallestValueIndex = j;
            }
        }
        currentValue = unsortedList[i];
        //swap current value with smallest value
        unsortedList[i] = unsortedList[smallestValueIndex];
        unsortedList[smallestValueIndex] = currentValue;
    }

    return unsortedList;
}

console.log(selectionSortFast([9, 8, 2, 0, 1, -1]));
console.log(selectionSortFast([9, -1, 2, 199, 1, -1]));
//console.log(inplaceSelectionSort([9, 8, 2, 0, 1, -1]));