class SuffixTrieNode {
    constructor() {
      this.children = {};
      this.endOfWord = false;
    }
  }
  
  class SuffixTrie {
    constructor(str) {
      this.root = new SuffixTrieNode();
      this.buildSuffixTrie(str);
    }
  
    // build the suffix trie for the given string
    buildSuffixTrie(str) {
      for (let i = 0; i < str.length; i++) {
        let currentNode = this.root;
        for (let j = i; j < str.length; j++) {
          const currentChar = str[j];
          if (!currentNode.children[currentChar]) {
            currentNode.children[currentChar] = new SuffixTrieNode();
          }
          currentNode = currentNode.children[currentChar];
        }
        currentNode.endOfWord = true;
      }
    }
  }
  
  // example usage
  const suffixTrie = new SuffixTrie("banana");
  console.log(suffixTrie.root); // SuffixTrieNode { children: { b: SuffixTrieNode { children: { a: SuffixTrieNode { children: { n: SuffixTrieNode { children: { a: SuffixTrieNode { children: { n: SuffixTrieNode { children: {}, endOfWord: true } }, endOfWord: true } }, endOfWord: false } }, endOfWord: false } }, endOfWord: false } }, endOfWord: false } }
  