class LNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    head;
    length = -1;

    /**
     * Add a node to the end of the list
     * @param {string} value 
     */
    add(value) {
        let currentNode = this.head;

        // Add head node
        if (currentNode == undefined) {
            this.head = new LNode(value);
        } else {
            // traverse to end and append node
            currentNode = this.get(this.length + 1);
            currentNode.next = new LNode(value);
        }
        this.length++;
    }

    /**
     * Add a node at a certion position
     * A -> B -> C -> D
     * addAtPosition(A.1,2) - A -> A.1 -> B -> C -> D
     * 
     * Update A to point to be A.1
     * Update A.1 to point to B
     * @param {string} value 
     * @param {number} position 
     */
    addAtPosition(value, position) {
        // just appending to head
        if (position === 1) {
            let addingNode = new LNode(value);
            // set new head to point to previous head
            addingNode.next = this.head;
            // update head
            this.head = addingNode;
        } else {
            // get node a position - 1 since we point it to new adding node.
            let previousNode = this.get(position - 1);
            let nextNode = previousNode.next;

            let addingNode = new LNode(value);
            previousNode.next = addingNode;

            // point addingNode to point to node at position 1
            addingNode.next = nextNode;
        }
        this.length++;
    }

    /**
     * Get the node at the position (start from 1) 
     * @param {string} value 
     */
    get(position) {
        if (position > this.length + 1) {
            console.warn('Position is invalid greater than the length');
            return;
        }

        let head = this.head;
        // index start from 1
        let _position = 1;

        while (true) {
            if (_position === position) {
                return head;
            }
            if (head.next == undefined) {
                return null;
            }
            head = head.next;
            _position++;
        }
    }

    /**
     * Remove a node at position
     * A => B => C => D 
     * remove(3) - A => B => D
     * 
     * Update B (position - 1) to point to D (position + 1)
     * @param {number} position 
     */
    remove(position) {
        if (position > this.length + 1) {
            console.warn(`Position ${position} is greater than length ${this.length + 1}`);
            return;
        }

        if (position === 1) {
            let next = this.get(position + 1);
            this.head = next;
            // old head is garbaged collected
        } else {
            let previous = this.get(position - 1);
            let next = this.get(position + 1);
            previous.next = next;
        }
        this.length--;
    }

    toString() {
        let head = this.head;
        let prettyString = '';

        while (head != null) {
            prettyString += `${head.value} => `;
            head = head.next;
        }
        prettyString += 'End';
        return prettyString;
    }

}