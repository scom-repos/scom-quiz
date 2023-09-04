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
  Button
} from '@ijstech/components';
import { IConfig, IAnswer } from './interface';
import { containerStyle, buttonStyle } from './index.css';
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
              label: "General settings",
              elements: [
                {
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/linkButtons",
                          options: {
                            elementLabelProp: "caption",
                            detail: {
                              type: "HorizontalLayout",
                              elements: [
                                {
                                  type: "HorizontalLayout",
                                  elements: [
                                    {
                                      type: "Control",
                                      scope: "#/properties/caption"
                                    },
                                    {
                                      type: "Control",
                                      scope: "#/properties/url"
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
              label: "Theme settings",
              elements: [
                {
                  type: "VerticalLayout",
                  elements: [
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/textAlign"
                        }
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Control",
                          scope: "#/properties/height"
                        }
                      ]
                    },
                    {
                      type: "HorizontalLayout",
                      elements: [
                        {
                          type: "Group",
                          label: "Dark mode",
                          elements: [
                            {
                              type: "Control",
                              scope: "#/properties/dark/properties/linkButtonStyle",
                              options: {
                                elementLabelProp: "caption",
                                detail: {
                                  type: "HorizontalLayout",
                                  elements: [
                                    {
                                      type: "HorizontalLayout",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/captionColor"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/color"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/buttonType"
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
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
                              scope: "#/properties/light/properties/linkButtonStyle",
                              options: {
                                elementLabelProp: "caption",
                                detail: {
                                  type: "HorizontalLayout",
                                  elements: [
                                    {
                                      type: "HorizontalLayout",
                                      elements: [
                                        {
                                          type: "Control",
                                          scope: "#/properties/captionColor"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/color"
                                        },
                                        {
                                          type: "Control",
                                          scope: "#/properties/buttonType"
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
  private btnPrev: Button;
  private btnNext: Button;

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
    if (newValue.hasOwnProperty('textAlign')) this.tag.textAlign = newValue.textAlign;
    this.onUpdateBlock(value);
  }

  private setTheme(value: string) {
    this.onUpdateBlock(this.tag);
  }

  private getDataSchema(readOnly = false) {
    const schema: IDataSchema = {
      type: "object",
      properties: {
        linkButtons: {
          type: "array",
          items: {
            type: "object",
            properties: {
              caption: {
                type: "string"
              },
              url: {
                type: "string"
              }
            }
          }
        },
        dark: {
          type: 'object',
          properties: {
            linkButtonStyle: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  captionColor: {
                    title: "Text color",
                    type: 'string',
                    format: 'color'
                  },
                  color: {
                    title: "Background color",
                    type: 'string',
                    format: 'color'
                  },
                  buttonType: {
                    type: 'string',
                    enum: [
                      'filled',
                      'outlined',
                      'text'
                    ]
                  }
                }
              }
            }
          }
        },
        light: {
          type: 'object',
          properties: {
            linkButtonStyle: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  captionColor: {
                    title: "Text color",
                    type: 'string',
                    format: 'color'
                  },
                  color: {
                    title: "Background color",
                    type: 'string',
                    format: 'color'
                  },
                  buttonType: {
                    type: 'string',
                    enum: [
                      'filled',
                      'outlined',
                      'text'
                    ]
                  }
                }
              }
            }
          }
        },
        textAlign: {
          type: 'string',
          enum: [
            'left',
            'center',
            'right'
          ],
          readOnly
        },
        height: {
          type: 'number'
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
                linkButtons,
                ...themeSettings
              } = userInputData;
              const generalSettings = {
                questions: linkButtons
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
        getLinkParams: () => {
          const data = this._data || {};
          return {
            data: window.btoa(JSON.stringify(data))
          }
        },
        setLinkParams: async (params: any) => {
          if (params.data) {
            const utf8String = decodeURIComponent(params.data);
            const decodedString = window.atob(utf8String);
            const newData = JSON.parse(decodedString);
            let resultingData = {
              ...self._data,
              ...newData
            };
            await this.setData(resultingData);
          }
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
    // const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
    // const {
    //   linkButtonStyle = []
    // } = config[themeVar] || {};
    // const {
    //   textAlign = 'left',
    //   height = 'auto'
    // } = config || {};

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

    if (this.pnlQuiz) {
      this.pnlQuiz.clearInnerHTML();
      const quizWrapper = (<i-vstack></i-vstack>);

      // question
      const question = (<i-hstack width="100%" class={containerStyle}>
        <i-label
          caption={`${currentQuestionData.question}`}
        ></i-label>
      </i-hstack>);
      quizWrapper.append(question);

      // answers
      for (let i = 0; i < currentQuestionData.answer.length; i++) {
        const answer = (<i-hstack width="100%" class={containerStyle} gap={"0.5rem"} onClick={() => this.onClickedAnswer()}>
          <i-label caption={`${this.numberToLetter(i)})`}></i-label>
          <i-label caption={currentQuestionData.answer[i].content}></i-label>
        </i-hstack>)
        answer.classList.add('answer');
        quizWrapper.append(answer);
      }
      this.pnlQuiz.append(quizWrapper);

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
          <i-button grid={{ area: 'BtnReset' }} caption="Reset Quiz" rightIcon={{ name: 'redo' }} class={buttonStyle}></i-button>
          <i-button grid={{ area: 'BtnSubmit' }} caption="Submit Answer" class={buttonStyle}></i-button>

          <i-button id="btnPrev" grid={{ area: 'BtnPrev' }} icon={{ name: 'angle-left' }} class={buttonStyle} onClick={() => this.onPrevQuestion()}></i-button>
          <i-button id="btnNext" grid={{ area: 'BtnNext' }} icon={{ name: 'angle-right' }} class={buttonStyle} onClick={() => this.onNextQuestion(this._data)}></i-button>

          <i-label grid={{ area: 'lblNumberOfQuestion' }} caption={`Question ${this.currentQuestionIndex + 1} of ${this._data.questions.length}`}></i-label>
          <i-label grid={{ area: 'lblNumberOfAttempted' }} caption={`0 attempted`}></i-label>

        </i-grid-layout>);
      this.pnlQuiz.append(gridBtnStack);

      if (this.currentQuestionIndex == 0) this.btnPrev.classList.add('disabled');
      if (this.currentQuestionIndex == this._data.questions.length - 1) this.btnNext.classList.add('disabled');

      // this.pnlQuiz.style.textAlign = textAlign || 'left';
      // this.pnlQuiz.height = height
    }
  }

  onClickedAnswer() {

  }

  onPrevQuestion() {
    if (this.currentQuestionIndex == 0) return;
    this.currentQuestionIndex--;
    this.onUpdateBlock(this.tag);
  }

  onNextQuestion(data: IConfig) {
    if (this.currentQuestionIndex == data.questions.length - 1) return;
    this.currentQuestionIndex++;
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