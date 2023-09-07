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

    render() {
        return <i-vstack margin={{ left: '1rem', top: '1rem' }} horizontalAlignment='center' position='relative'>
            <i-scom-quiz id="quiz" width={'80%'} minWidth={"600px"} margin={{ top: 100 }} data={{
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
            }}></i-scom-quiz>
        </i-vstack>
    }
}