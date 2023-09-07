import {
  Module,
  customModule,
  Styles,
  Panel,
  ControlElement,
  customElements,
  Container,
  IDataSchema,
  IUISchema,
  Button,
  Control,
  Label,
  Icon
} from '@ijstech/components';
import { IConfig, IAnswer } from './interface';
import { containerStyle, buttonStyle, resultPnlStyle } from './index.css';
import dataJson from './data.json'
const Theme = Styles.Theme.ThemeVars;

const propertiesUISchema: IUISchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Categorization",
          elements: [
            {
              type: "Category",
              label: "General",
              elements: [
                {
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/questions",
                          options: {
                            detail: {
                              type: "VerticalLayout",
                              elements: [
                                {
                                  type: "Group",
                                  label: "",
                                  elements: [
                                    {
                                      type: "Control",
                                      scope: "#/properties/question"
                                    },
                                    {
                                      type: "HorizontalLayout",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/content"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/correct",

                                        }
                                      ]
                                    }
                                  ]
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              type: "Category",
              label: "Theme",
              elements: [
                {
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Group",
                          label: "Dark mode",
                          elements: [
                            {
                              type: "Control",
                              scope: "#/properties/dark/properties/questionFontColor"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/dark/properties/answerFontColor"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/dark/properties/systemFontColor"
                            }
                          ]
                        },
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Group",
                          label: "Light mode",
                          elements: [
                            {
                              type: "Control",
                              scope: "#/properties/light/properties/questionFontColor"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/light/properties/answerFontColor"
                            },
                            {
                              type: "Control",
                              scope: "#/properties/light/properties/systemFontColor"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

interface ScomQuizElement extends ControlElement {
  lazyLoad?: boolean;
  data: IConfig;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["i-scom-quiz"]: ScomQuizElement;
    }
  }
}

@customModule
@customElements('i-scom-quiz')
export default class ScomQuiz extends Module {
  private pnlQuiz: Panel;
  private currentQuestionIndex: number = 0;
  private selectedAnswerIdx: number[] = [];
  private btnPrev: Button;
  private btnNext: Button;
  private btnSubmit: Button;
  private isQuizEnd: boolean = false;

  private _data: IConfig = { questions: [] };
  tag: any = {};

  static async create(options?: ScomQuizElement, parent?: Container) {
    let self = new this(parent, options);
    await self.ready();
    return self;
  }

  constructor(parent?: Container, options?: ScomQuizElement) {
    super(parent, options);
  }

  private getData() {
    return this._data
  }

  private async setData(data: IConfig) {
    this._data = data
    this.onUpdateBlock(this.tag)
  }

  private getTag() {
    return this.tag
  }

  private updateTag(type: 'light' | 'dark', value: any) {
    this.tag[type] = this.tag[type] ?? {};
    for (let prop in value) {
      if (value.hasOwnProperty(prop))
        this.tag[type][prop] = value[prop];
    }
  }

  private async setTag(value: any) {
    const newValue = value || {};
    if (newValue.light) this.updateTag('light', newValue.light);
    if (newValue.dark) this.updateTag('dark', newValue.dark);
    if (newValue.hasOwnProperty('height')) this.tag.height = newValue.height;
    this.onUpdateBlock(value);
  }

  private setTheme(value: string) {
    this.onUpdateBlock(this.tag);
  }

  private getDataSchema(readOnly = false) {
    const schema: IDataSchema = {
      type: "object",
      properties: {
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question: {
                type: "string"
              },
              answers: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    content: {
                      type: "string"
                    },
                    correct: {
                      type: "boolean"
                    }
                  }
                }
              }
            }
          }
        },
        dark: {
          type: 'object',
          properties: {
            questionFontColor: {
              type: 'string',
              format: 'color',
              readOnly
            },
            answerFontColor: {
              type: 'string',
              format: 'color',
              readOnly
            },
            systemFontColor: {
              type: 'string',
              format: 'color',
              readOnly
            }
          }
        },
        light: {
          type: 'object',
          properties: {
            questionFontColor: {
              type: 'string',
              format: 'color',
              readOnly
            },
            answerFontColor: {
              type: 'string',
              format: 'color',
              readOnly
            },
            systemFontColor: {
              type: 'string',
              format: 'color',
              readOnly
            }
          }
        }
      }
    };

    return schema;
  }

  private _getActions(dataSchema: IDataSchema) {
    const actions = [
      {
        name: 'Edit',
        icon: 'edit',
        command: (builder: any, userInputData: any) => {
          let oldData = {};
          let oldTag = {};
          return {
            execute: async () => {
              oldData = JSON.parse(JSON.stringify(this._data))
              const {
                questions,
                ...themeSettings
              } = userInputData;
              const generalSettings = {
                questions: questions
              };
              if (builder?.setData) builder.setData(generalSettings);
              this.setData(generalSettings);
              oldTag = JSON.parse(JSON.stringify(this.tag));
              if (builder) builder.setTag(themeSettings);
              else this.setTag(themeSettings);
            },
            undo: async () => {
              this._data = JSON.parse(JSON.stringify(oldData))
              this.onUpdateBlock(this.tag);
              if (builder?.setData) builder.setData(this._data);
              if (builder) builder.setTag(oldTag);
              else this.setTag(oldTag);
            },
            redo: () => { }
          }
        },
        userInputDataSchema: dataSchema,
        userInputUISchema: propertiesUISchema
      }
    ]
    return actions
  }

  getConfigurators() {
    const self = this;
    return [
      {
        name: 'Builder Configurator',
        target: 'Builders',
        getActions: () => {
          const schema = this.getDataSchema();
          return this._getActions(schema);
        },
        getData: this.getData.bind(this),
        setData: async (data: IConfig) => {
          const defaultData = dataJson.defaultBuilderData as any;
          await this.setData({ ...defaultData, ...data })
        },
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      },
      {
        name: 'Emdedder Configurator',
        target: 'Embedders',
        getActions: () => {
          const schema = this.getDataSchema(true);
          return this._getActions(schema);
        },
        getData: this.getData.bind(this),
        setData: this.setData.bind(this),
        getTag: this.getTag.bind(this),
        setTag: this.setTag.bind(this)
      }
    ]
  }

  private numberToLetter(n: number): string {
    if (n < 0) {
      // Handle negative numbers if needed
      return '';
    }

    const baseCharCode = 'A'.charCodeAt(0);
    const letter = String.fromCharCode(baseCharCode + n);

    return letter;
  }

  private onUpdateBlock(config: any) {
    const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
    const {
      questionFontColor,
      answerFontColor,
      systemFontColor
    } = config[themeVar] || {};
    const {
      height = 'auto'
    } = config || {};
    if (!this._data.questions) return;

    const currentQuestionData = this._data.questions[this.currentQuestionIndex];

    // let reorderAnswers: IAnswer[] = [];
    // for (const item of currentQuestionData.answer) {
    //   reorderAnswers.push(item);
    // }

    // Fisher-Yates shuffle to reorder the answers randomly
    // for (let i = reorderAnswers.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [reorderAnswers[i], reorderAnswers[j]] = [reorderAnswers[j], reorderAnswers[i]];
    // }

    this.pnlQuiz.clearInnerHTML();
    const quizWrapper = (<i-vstack></i-vstack>);

    if (this.pnlQuiz) {
      if (!this.isQuizEnd) {
        const isMultipleChoice = this.checkIfMultipleAnswer();
        // question
        const hintNumber = <i-label caption={'*Select more than 1 answer'} font={{ size: '12px', color: questionFontColor || Theme.colors.secondary }} visible={false}></i-label>;
        const question = (<i-hstack width="100%" class={containerStyle}>
          <i-label caption={`${this.currentQuestionIndex + 1}`} margin={{ right: '1rem' }} font={{ bold: true, size: '20px', color: questionFontColor }}></i-label>
          <i-vstack verticalAlignment='start' gap={'0.5rem'}>
            <i-label caption={`${currentQuestionData.question}`} font={{ size: '20px', color: questionFontColor }}></i-label>
            {hintNumber}
          </i-vstack>
        </i-hstack>);
        if (isMultipleChoice) hintNumber.visible = true;
        quizWrapper.append(question);

        // answers
        for (let i = 0; i < currentQuestionData.answers.length; i++) {
          const lblTxtInner = <i-label caption="Your Answer" font={{ color: 'var(--colors-primary-main)' }}></i-label> as Label;
          const lblTxtOuter = <i-label caption="Correct Answer" font={{ color: 'var(--colors-success-main)' }}></i-label> as Label;
          const icon = <i-icon
            id="answerIcon"
            name="circle"
            fill={Theme.colors.primary.main}
            height={16} width={16}
            class='answer-icon'
            margin={{ right: '1rem' }}
          ></i-icon> as Icon;

          const answer = (<i-hstack width="100%" class={containerStyle} gap={"0.5rem"}
            verticalAlignment='center' position='relative'
            onClick={(control, event) => this.onClickedAnswer(control, i)}>
            <i-panel class='answer-label-outer' margin={{ left: '1rem' }} zIndex="10">
              {lblTxtOuter}
            </i-panel>
            <i-hstack class='inner-container' zIndex="5"
              width="100%"
              position="relative"
              padding={{ top: 0, left: 0, right: 0, bottom: 0 }}
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
              <i-panel class='answer-label-inner' margin={{ left: '1rem' }} zIndex="10">
                {lblTxtInner}
              </i-panel>
              {icon}
              <i-label caption={`${this.numberToLetter(i)})`} margin={{ right: '0.5rem' }} font={{ color: answerFontColor }}></i-label>
              <i-label caption={currentQuestionData.answers[i].content} font={{ color: answerFontColor }}></i-label>
            </i-hstack>
          </i-hstack>)
          answer.classList.add('answer');

          // check if all correct answer are chosen
          const isAllCorrectAnsChosen = currentQuestionData.answers.find(a => a.correct && !a.selected) ? false : true;
          const isAllIncorrectAnsNotChosen = currentQuestionData.answers.find(a => !a.correct && a.selected) ? false : true;

          const isCorrect = isAllCorrectAnsChosen && isAllIncorrectAnsNotChosen;
          if (currentQuestionData.revealed) {
            if (currentQuestionData.answers[i].selected && currentQuestionData.answers[i].correct && isCorrect) {
              // selected all correct answers
              answer.classList.add('selected-correct');
              lblTxtInner.font = { color: 'var(--colors-success-main)' }
              icon.name = 'check-circle';
              icon.fill = "var(--colors-success-main)"
            } else if (currentQuestionData.answers[i].selected && currentQuestionData.answers[i].correct && !isCorrect) {
              // selected partial correct answers
              answer.classList.add('selected-incorrect');
              answer.classList.add('show-correct');
              lblTxtInner.font = { color: 'var(--colors-error-main)' }
              icon.name = 'times-circle';
              icon.fill = "var(--colors-error-main)"
            } else if (currentQuestionData.answers[i].selected && !currentQuestionData.answers[i].correct) {
              // selected wrong answer
              answer.classList.add('selected-incorrect');
              lblTxtInner.font = { color: 'var(--colors-error-main)' }
              icon.name = 'times-circle';
              icon.fill = "var(--colors-error-main)"
            } else if (currentQuestionData.answers[i].correct) {
              // display correct answer
              answer.classList.add('show-correct');
              icon.name = 'check-circle';
              icon.fill = "var(--colors-success-main)"
            }
          }
          quizWrapper.append(answer);
        }

        // buttons
        const gridBtnStack = (
          <i-grid-layout width="100%" height="100px" horizontalAlignment="center" verticalAlignment="center"
            templateColumns={['repeat(5, 1fr)']}
            templateRows={['repeat(2, 1fr)']}
            templateAreas={[
              ["BtnReset", "BtnPrev", "lblNumberOfQuestion", "BtnNext", "BtnSubmit"],
              ["BtnReset", "BtnPrev", "lblNumberOfAttempted", "BtnNext", "BtnSubmit"]
            ]}
            autoFillInHoles={false}
            class={containerStyle}
          >
            <i-button grid={{ area: 'BtnReset' }} caption="Reset Quiz" rightIcon={{ name: 'redo' }} class={buttonStyle} font={{ color: systemFontColor }} onClick={() => this.onReset()}></i-button>
            <i-button id="btnSubmit" grid={{ area: 'BtnSubmit' }} caption="Submit Answer" class={`${buttonStyle} disabled`} font={{ color: systemFontColor }} onClick={(control) => this.onSubmit(control)}></i-button>

            <i-button id="btnPrev" grid={{ area: 'BtnPrev' }} width={35} height={35} icon={{ name: 'angle-left' }} border={{ radius: '50%' }} class={buttonStyle} onClick={() => this.onPrevQuestion()}></i-button>
            <i-button id="btnNext" grid={{ area: 'BtnNext' }} width={35} height={35} icon={{ name: 'angle-right' }} border={{ radius: '50%' }} class={buttonStyle} onClick={() => this.onNextQuestion(this._data)}></i-button>
            <i-button id="btnEndQuiz" grid={{ area: 'BtnNext' }} width={35} height={35} icon={{ name: 'check-circle' }} border={{ radius: '50%' }} class={buttonStyle} onClick={() => this.onEndQuiz()} visible={false}></i-button>

            <i-label grid={{ area: 'lblNumberOfQuestion' }} caption={`Question ${this.currentQuestionIndex + 1} of ${this._data.questions.length}`} font={{ color: systemFontColor }} ></i-label>
            <i-label grid={{ area: 'lblNumberOfAttempted' }} caption={`${(currentQuestionData.numberOfAttempt) ? currentQuestionData.numberOfAttempt : 0} attempted`} font={{ color: systemFontColor }} ></i-label>

          </i-grid-layout>);

        quizWrapper.append(gridBtnStack);

        if (this.currentQuestionIndex == 0) this.btnPrev.classList.add('disabled');
        if (this.currentQuestionIndex == this._data.questions.length - 1) this.btnNext.classList.add('disabled');

        // const isNotAllSubmitted = this._data.questions.find(q => !q.revealed);
        if (/*!isNotAllSubmitted && */this.currentQuestionIndex == this._data.questions.length - 1) {
          (this.querySelector('#btnEndQuiz') as Button).visible = true;
          (this.querySelector('#btnNext') as Button).visible = false;
        }

        // this.pnlQuiz.style.textAlign = textAlign || 'left';
        // this.pnlQuiz.height = height
      } else {

        const numberOfCorrect = this._data.questions.reduce((accumulator, q) => {
          for (let i = 0; i < q.answers.length; i++) {
            if (q.answers[i].correct !== q.answers[i].selected) return accumulator;
          }
          return accumulator + 1;
        }, 0);

        const numberOfUnanswered = this._data.questions.reduce((accumulator, q) => {
          for (let i = 0; i < q.answers.length; i++) {
            if (q.answers[i].selected) return accumulator;
          }
          return accumulator + 1;
        }, 0);

        const numberOfIncorrect = this._data.questions.length - numberOfCorrect - numberOfUnanswered;

        const pnlResult = (<i-vstack horizontalAlignment='center' position='relative'
          padding={{ left: '2rem', top: '2rem', right: '2rem' }}
          border={{ color: 'var(--divider)', radius: '0.25rem', width: 1, style: 'solid' }}>
          <i-panel border={{ color: 'var(--divider)', width: 0.5, style: 'solid' }} height={0} width={'80%'}
            position="absolute" zIndex={5} top={'calc(20px + 2rem)'}></i-panel>
          <i-hstack width={140} height={40}
            padding={{ left: '0.5rem', top: '0.5rem', right: '0.5rem', bottom: '0.5rem' }}
            margin={{ bottom: '1.5rem' }}
            border={{ color: 'var(--divider)', radius: '0.25rem', width: 1, style: 'solid' }}
            background={{ color: "var(--background-main)" }}
            verticalAlignment='center'
            horizontalAlignment='center' zIndex={10}>
            <i-label caption="SUMMARY"></i-label>
          </i-hstack>
          <i-hstack horizontalAlignment='space-between' width={'50%'} minWidth={'300px'} class={`${resultPnlStyle} correct`}>
            <i-label caption="Correct" font={{ color: 'var(--colors-success-main)', bold: true }}></i-label>
            <i-label caption={`${numberOfCorrect}`} font={{ color: 'var(--colors-success-main)', bold: true }}></i-label>
          </i-hstack>
          <i-hstack horizontalAlignment='space-between' width={'50%'} minWidth={'300px'} class={`${resultPnlStyle} incorrect`}>
            <i-label caption="Incorrect" font={{ color: 'var(--colors-error-main)', bold: true }}></i-label>
            <i-label caption={`${numberOfIncorrect}`} font={{ color: 'var(--colors-error-main)', bold: true }}></i-label>
          </i-hstack>
          <i-hstack horizontalAlignment='space-between' width={'50%'} minWidth={'300px'} class={`${resultPnlStyle} unanswered`}>
            <i-label caption="Unanswered" font={{ color: 'var(--divider)', bold: true }}></i-label>
            <i-label caption={`${numberOfUnanswered}`} font={{ color: 'var(--divider)', bold: true }}></i-label>
          </i-hstack>
          <i-hstack width={'100%'} horizontalAlignment='center' gap={'1rem'} padding={{ left: '0.5rem', top: '1rem', right: '0.5rem', bottom: '1rem' }}>
            <i-button caption="Reset Quiz" rightIcon={{ name: 'redo' }} class={buttonStyle} onClick={() => this.onResetQuiz()}></i-button>
            <i-button caption="Check Answers" class={buttonStyle} onClick={() => this.onCheckAnswer()}></i-button>
          </i-hstack>
        </i-vstack>);
        quizWrapper.append(pnlResult);
      }
      this.pnlQuiz.append(quizWrapper);
    }
  }

  checkIfMultipleAnswer(): boolean {
    const numberOfCorrectAnswer = this._data.questions[this.currentQuestionIndex].answers.reduce((accumulator, a) => {
      if (a.correct) return accumulator + 1;
      else return accumulator;
    }, 0);
    return numberOfCorrectAnswer > 1;
  }

  onResetQuiz() {
    this.selectedAnswerIdx = [];
    this._data.questions.forEach(q => {
      q.revealed = false;
      q.numberOfAttempt = 0;
      q.answers.forEach(a => {
        a.selected = false;
      })
    })

    this.currentQuestionIndex = 0;
    this.isQuizEnd = false;
    this.onUpdateBlock(this.tag);
  }

  onCheckAnswer() {
    this.currentQuestionIndex = 0;
    this.isQuizEnd = false;
    this.onUpdateBlock(this.tag);
  }

  onEndQuiz() {
    this.isQuizEnd = true;
    this.onUpdateBlock(this.tag);
  }

  onReset() {
    const currentQuestionData = this._data.questions[this.currentQuestionIndex];
    currentQuestionData.numberOfAttempt = 0;
    this.selectedAnswerIdx = [];
    currentQuestionData.answers.forEach(ans => {
      ans.selected = false;
    })
    currentQuestionData.revealed = false;
    this.onUpdateBlock(this.tag);
  }

  onSubmit(control: Control) {
    const currentQuestionData = this._data.questions[this.currentQuestionIndex];
    const isDisabled = control.classList.contains('disabled')
    if (isDisabled) return;

    currentQuestionData.numberOfAttempt = (currentQuestionData.numberOfAttempt) ? currentQuestionData.numberOfAttempt + 1 : 1;
    currentQuestionData.answers.forEach(ans => {
      ans.selected = false;
    })
    this.selectedAnswerIdx.forEach(s => {
      currentQuestionData.answers[s].selected = true;
    })
    currentQuestionData.revealed = true;
    this.onUpdateBlock(this.tag);
  }

  onClickedAnswer(control: Control, answerIdx: number) {
    if (this._data.questions[this.currentQuestionIndex].revealed) return;

    const isMultipleChoice = this.checkIfMultipleAnswer();

    const targetAnswer = control.closest('.answer');
    if (!targetAnswer) return;

    if (isMultipleChoice) {
      if (targetAnswer.classList.contains('selected')) {
        targetAnswer.classList.remove('selected')
        this.selectedAnswerIdx = this.selectedAnswerIdx.filter(item => item !== answerIdx);
      } else {
        targetAnswer.classList.add('selected')
        if (!this.selectedAnswerIdx.includes(answerIdx)) this.selectedAnswerIdx.push(answerIdx)
      }
      const selectedAnswers = control.closest('i-scom-quiz').querySelectorAll('.answer.selected');
      if (selectedAnswers.length > 1) this.btnSubmit.classList.remove('disabled')
      else this.btnSubmit.classList.add('disabled')

    } else {
      const answer = control.closest('i-scom-quiz').querySelectorAll('.answer');
      this.btnSubmit.classList.remove('disabled')
      answer.forEach(elm => {
        elm.classList.remove('selected');
      })
      targetAnswer.classList.add('selected')
      this.selectedAnswerIdx = [answerIdx]
    }
  }

  onPrevQuestion() {
    if (this.currentQuestionIndex == 0) return;
    this.currentQuestionIndex--;
    this.selectedAnswerIdx = [];
    this.onUpdateBlock(this.tag);
  }

  onNextQuestion(data: IConfig) {
    if (this.currentQuestionIndex == data.questions.length - 1) return;
    this.currentQuestionIndex++;
    this.selectedAnswerIdx = [];
    this.onUpdateBlock(this.tag);
  }

  init() {
    super.init();
    const lazyLoad = this.getAttribute('lazyLoad', true, false);
    if (!lazyLoad) {
      const data = this.getAttribute('data', true);
      data && this.setData(data);
    }
  }

  render() {
    return (
      <i-panel id="pnlQuiz" minHeight={25}>
        <i-label caption="INIT"></i-label>
      </i-panel>
    )
  }
}