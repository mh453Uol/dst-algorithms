//Left: [3,2,1,9]  Right:[] <-Sorted
// _
//[3,2,1,9] Right:[] 
// _
//[2,1,9] Right:[3]
// _
//[1,9] Right:[2,3] //2 goes before 3
// _
//[9] Right:[1,2,3] //1 < 2 and 3
//[] Right: [1,2,3,9] 

function insertionSort(unsortedItems) {
    var copyOfUnsortedItem = unsortedItems;
    var sortedItems = [];
    while (true) {
        if (copyOfUnsortedItem.length == 0) {
            return sortedItems;
        }
        var head = copyOfUnsortedItem[0];
        sortedItems = insert(head, sortedItems);
        copyOfUnsortedItem.shift();
    }
}

function insert(value, tail) {
    var sorted = [];
    while (true) {
        if (tail.length == 0) {
            sorted.push(value);
            return sorted;
        }
        var head = tail[0];
        if (value < head) {
            return sorted.concat(value, tail);
        }
        sorted.push(head);
        tail.shift();
    }
}

console.log(insertionSort([3, 2, 1, 10, -10]));


//In place insertion sort rather than using 2 arrays
function inPlaceInsertionSort(unsortedItems) {
    for (var i = 0; i < unsortedItems.length; i++) {
        var insertingValue = unsortedItems[i];
        for (var j = i - 1; j >= 0; j--) {
            var tailValue = unsortedItems[j];
            if (tailValue > insertingValue) {
                //tail is greather than current inserting value so we swap
                //since tail value is greater
                unsortedItems[j] = insertingValue;
                unsortedItems[j + 1] = tailValue;
            }
        }
    }
    return unsortedItems;
}

//console.log(inPlaceInsertionSort([3, 2, 1, 10, -1, -1]));