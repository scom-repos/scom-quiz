import { Module, customModule, Container } from '@ijstech/components';
import assets from '@modules/assets';
import ScomQuiz from '@scom/scom-quiz';

@customModule
export default class Module1 extends Module {

    private quiz: ScomQuiz;

    constructor(parent?: Container, options?: any) {
        super(parent, options);
    }

    async init() {
        super.init();
    }

    getData() {
        console.log(this.quiz.getData())
    }

    render() {
        return <i-vstack margin={{ left: '1rem', top: '1rem' }} horizontalAlignment='center' position='relative'>
            <i-button caption="Get Data" onClick={() => this.getData()} position="absolute" width="100px" height="50px" top="10px" left="10px"></i-button>
            <i-scom-quiz id="quiz" width={'80%'} minWidth={"600px"} margin={{ top: 100 }} data={{
                questions: [
                    {
                        question: 'What is the time, and space complexity of the following code:',
                        answer: [
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
                        answer: [
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
                        answer: [
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
            }}></i-scom-quiz>
        </i-vstack>
    }
}