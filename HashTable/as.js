class HashTable {
    constructor(){
        this.table = new Array(12);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i);
        }
        return hash%this.table.length;
    }

    set(key, value) {
        let index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;

    }
    get(key) {
        let index = this._hash(key)
        return this.table[index]
    }
}
let hash = new HashTable()

hash.set("forest",{"animals":"lion","birds":12})

hash.set("pond","fish");
console.log(hash.get("forest"));
console.log(hash.get("pond"));
