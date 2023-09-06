export default {
  "defaultBuilderData": {
    questions: [
      {
        question: 'What is the time, and space complexity of the following code:',
        answers: [
          {
            content: 'O(N) time, O(1) space',
            correct: true
          },
          {
            content: 'O(N * M) time, O(N) space',
            correct: false
          },
          {
            content: 'O(N * M) time, O(N + M) space',
            correct: false
          }
        ]
      },
      {
        question: 'What is the time complexity of the following code:',
        answers: [
          {
            content: 'O(N*N)',
            correct: false
          },
          {
            content: 'O(N)',
            correct: false
          },
          {
            content: 'O(N*log(N))',
            correct: false
          },
          {
            content: 'O(N * Sqrt(N))',
            correct: true
          }
        ]
      },
      {
        question: 'What is the time complexity of the following code:',
        answers: [
          {
            content: 'O(n^2)',
            correct: false
          },
          {
            content: 'O(n^2Logn)',
            correct: false
          },
          {
            content: 'O(n)',
            correct: false
          },
          {
            content: 'O(nLogn)',
            correct: true
          }
        ]
      }
    ]
  }
}
