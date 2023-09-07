export default {
  "defaultBuilderData": {
    questions: [
      {
        question: 'The transaction Merkle Tree root value in a Bitcoin block is calculated using,',
        answers: [
          {
            content: 'Hash of transactions',
            correct: true
          },
          {
            content: 'Previous block\'s hash',
            correct: false
          },
          {
            content: 'Number of transactions',
            correct: false
          },
          {
            content: 'None of the above',
            correct: false
          }
        ]
      },
      {
        question: 'The height of the block is the ____ in the chain between it and the genesis block.',
        answers: [
          {
            content: 'Metadata that is',
            correct: false
          },
          {
            content: 'Number of blocks',
            correct: true
          },
          {
            content: 'Merkle tree hash',
            correct: false
          },
          {
            content: 'Size of the memory cache',
            correct: false
          }
        ]
      }, {
        question: 'What type of hash is used when there is a fixed number of items to be hashed, such as the items in a block header, and we are verifying the composite block integrity?',
        answers: [
          {
            content: 'Tree-structured Hash',
            correct: false
          },
          {
            content: 'Complex hash',
            correct: false
          },
          {
            content: 'Simple Hash',
            correct: true
          },
          {
            content: 'Either',
            correct: false
          }
        ]
      }
    ]
  }
}
