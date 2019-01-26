//1st implementation
// _
//[3,2,1] 3 > 2 if so swap
//   _
//[2,3,1] 3 > 1 if so swap
// _
//[2,1,3] 2 > 1 if so swap
//   _
//[1,2,3] 2 > 1 
//We dont need to check the last value so 2 > 3 since the last number will always be in the right place

function bubblesort(unsortedItems) {
    for (var i = 0; i < unsortedItems.length; i++) {
        var isAnySwaps = false;
        for (var j = 0; j < unsortedItems.length - 1 - i; j++) {
            //unsortedItems.length - 1 - i stop sorting already sorted items.
            var firstItem = unsortedItems[j];
            var secondItem = unsortedItems[j + 1];
            if (firstItem > secondItem) {
                unsortedItems = swap(firstItem, secondItem, unsortedItems);
                isAnySwaps = true;
            }
        }
        if (!isAnySwaps) {
            return unsortedItems;
        }
    }
    return unsortedItems;
}


function swap(firstItem, secondItem, unsortedItems) {
    var firstItemIndex = unsortedItems.indexOf(firstItem);
    var secondItemIndex = unsortedItems.indexOf(secondItem);
    unsortedItems[firstItemIndex] = secondItem;
    unsortedItems[secondItemIndex] = firstItem;
    return unsortedItems;
}

console.log(bubblesort([1, 2, 0, 4, 5, -10]));