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
console.log(sortedList);

//2nd Implementation 
//In place so we dont use a second array
//Array:[9,8,1,-1]
//Swap smallest value with nth position
//Array:[-1,8,1,9] <- NB: -1
//Array: [-1,1,8,9] <- NB: 1
//Array: [-1,1,8,9] <- NB: 8
//Array: [-1,1,8,9] <- Dont need to sort last element

function inplaceSelectionSort(unsortedList) {
    var copyOfUnsortedList = unsortedList;
    var fromUnsortedIndex = 0;

    while (true) {
        if (fromUnsortedIndex === copyOfUnsortedList.length - 2) {
            return copyOfUnsortedList;
        }

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

console.log(inplaceSelectionSort([9, 8, 2, 0, 1, -1]));