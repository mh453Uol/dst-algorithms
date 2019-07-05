class Queue {
    // Queue (queue of people)
    // 6 6 6 6 [  ]
    // I I I I [ .]
    // ^ ^ ^ ^ [  ]
    // enqueue (we add to the end/tail)
    // dequeue (we remove from the start/head)

    list = [];
    length = 0;

    enqueue(value) {
        // [1,2,3,4,5] add to end
        this.list.push(value);
        this.length++;
    }

    dequeue() {
        //  v
        // [1,2,3,4,5] remove from head

        // remove first element
        // rather than moving all elements we could just 
        // keep index of head and tail and when head >= tail we reset
        // both head and tail to 0
        this.list.shift();
        this.length--;
    }

    peek() {
        return this.list[0];
    }
}