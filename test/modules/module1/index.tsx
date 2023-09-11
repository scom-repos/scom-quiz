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
                        question: 'Sample Question',
                        answers: [
                            {
                                content: 'Wrong Answer 1',
                                correct: false
                            },
                            {
                                content: 'Correct Answer',
                                correct: true
                            },
                            {
                                content: 'Wrong Answer 2',
                                correct: false
                            },
                            {
                                content: 'Wrong Answer 3',
                                correct: false
                            }
                        ]
                    }
                ]
            }}></i-scom-quiz>
        </i-vstack>
    }
}