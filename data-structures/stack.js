class Stack {
    /**
     * Stack
     * Push: We (add) to the top of the stack
     * Pop: We (remove) from the top of the stack
     * 
     * Stack (stack of plates) can add and remove from top only
     * \_/ <= 
     * \_/
     * \_/
     * \_/
     * \_/
     *  8
     */

    list = [];
    length = 0;

    push(value) {
        this.list.push(value);
        this.length++;
    }

    pop() {
        if (this.length === 0) { return; }

        const removed = this.list.pop();
        this.length--;

        return removed;
    }

    peek() {
        if(this.length === 0) {
            return this.list[0];
        }
        return this.list[this.length - 1];
    }
}