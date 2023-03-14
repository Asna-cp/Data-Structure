class HashTable {
    constructor() {
      this.table = new Array(12); // imp
      this.size = 0;
    }
  
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
        console.log(hash);
      }
      return hash % this.table.length; 
    }// imp
  
    set(key, value) {
      let index = this._hash(key);
      this.table[index] = [key, value];
      this.size++;
    }
  
    get(key){
      let index = this._hash(key)
      console.log(index);
      return this.table[index]
    }

    remove(key){
      let index = this._hash(key)
      if(this.table[index] && this.table[index].length){
        this.table[index] = []
        this.size--
        return true
      } else {
        return false
      }
    }
  }

  let hash = new HashTable()
  hash.set("asna",{"batch":"bck46","week":23}); 
//   hash.get("name")
  console.log( hash.get("asna"));
//   hash.remove("name")
//   console.log( hash.get("name"));

