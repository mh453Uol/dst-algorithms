class HashTable {
    memory = [];

    /**
     * Convert a string (key) to a unique number using
     * a hashing technique. 
     * We need to be careful of hash collitions
     * @param {} key 
     */
    hashKey(key) {
        let hash = 0;
        for (let index = 0; index < key.length; index++) {
            // get ascii number i.e (a = 97)
            let code = key.charCodeAt(index);
            // left bitwise shift 
            // 7 - in binary (00000111) 
            // 7<<1 - (0000111{0}) everything shifted to left = 2+4+8=14
            // 7<<2 - (0000111{00}) = 4+8+16 = 28
            hash = ((hash << 5) - hash) + code | 0;
        }
        return hash;
    }

    /**
     * Using a key get the value
     * @param {*} key 
     */
    get(key) {
        let address = this.hashKey(key);
        return this.memory[address];
    }

    /**
     * Add an entry in the hashtable
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value) {
        let address = this.hashKey(key);
        this.memory[address] = value;
    }

    remove(key) {
        let address = this.hashKey(key);

        if (this.memory[address]) {
            delete this.memory[address];
        }
    }


    has(key) {
        let address = this.hashKey(key);
        const exists = this.memory[address];

        if (exists === undefined) {
            return false;
        }
        return true;
    }


}