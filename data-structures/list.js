class List {
    memory = [];
    length = 0;

    get(address) {
        return this.memory[address];
    }

    /**
     * Add value to the end
     * @param  value 
     */
    push(value) {
        this.memory[this.length] = value;
        this.length++;
    }

    /**
     * Remove last value
     */
    pop() {
        if (this.length == 0) { return; }
        // get last value, delete it and return
        // length - 1 since when push we do + 1 and length at start is 0
        const address = this.length - 1;
        const lastValue = this.memory[address];

        delete this.memory[address];
        this.length--;

        return lastValue;
    }

    /**
     * Add value to start
     * @param  value 
     */
    unshift(value) {
        // [1,2,3,4] -> unshift(-1) -> [-1,1,2,3] 
        // all elements shifted by one and size doesn't change

        // From n - 1 to 1 set n[i] (current) = n[i-1] (previous)
        for (let i = this.length - 1; i > 0; i--) {
            this.memory[i] = this.memory[i - 1];
        }

        this.memory[0] = value;
    }

    /**
     * Remove the first value
     */
    shift() {
        // if we have atleast 2 elements
        if(this.length == 0) { return; }
        // [1,2,3,4] to [2,3,4]
        // From 1 to n 
        // n[i] = n[i - 1]
        // Remove last value
        for (let i = 0; i < this.length; i++) {
            this.memory[i] = this.memory[i + 1];
        }

        delete this.memory[this.length - 1];
        this.length--;
    }
}