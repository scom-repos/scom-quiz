var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
define("@scom/scom-quiz/interface.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("@scom/scom-quiz/index.css.ts", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resultPnlStyle = exports.buttonStyle = exports.containerStyle = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    exports.containerStyle = components_1.Styles.style({
        overflow: 'hidden',
        margin: '0 auto',
        padding: '1rem 1rem',
        border: '1px solid var(--divider)',
        background: "var(--background-main)",
        $nest: {
            '&.answer': {
                transition: 'filter 0.3s',
                cursor: 'pointer',
                $nest: {
                    '&:hover': {
                        filter: 'brightness(0.95)'
                    },
                    '.answer-label-inner': {
                        position: 'absolute',
                        top: '-14px',
                        opacity: 0,
                        border: `1.5px solid var(--colors-primary-main)`,
                        borderRadius: '0.25rem',
                        padding: '0.25rem 1.25rem !important',
                        background: "var(--background-main)"
                    },
                    '.answer-label-outer': {
                        position: 'absolute',
                        top: '-14px',
                        opacity: 0,
                        border: `1.5px solid var(--colors-primary-main)`,
                        borderRadius: '0.25rem',
                        padding: '0.25rem 1.25rem !important',
                        background: "var(--background-main)"
                    },
                    '&.selected': {
                        $nest: {
                            '.inner-container': {
                                border: `1.5px solid var(--colors-primary-main)`,
                                borderRadius: '0.25rem',
                                padding: '1rem 1rem !important'
                            },
                            '.answer-icon': {
                                opacity: 1
                            },
                            '.answer-label-inner': {
                                opacity: 1,
                                border: `1.5px solid var(--colors-primary-main)`,
                                // color: `var(--colors-primary-main) !important`
                            }
                        }
                    },
                    '&.selected-correct': {
                        $nest: {
                            '.inner-container': {
                                border: `1.5px solid var(--colors-success-main)`,
                                borderRadius: '0.25rem',
                                padding: '1rem 1rem !important'
                            },
                            '.answer-icon': {
                                opacity: 1
                            },
                            '.answer-label-inner': {
                                opacity: 1,
                                border: `1.5px solid var(--colors-success-main)`,
                                // color: `var(--colors-success-main) !important`
                            }
                        }
                    },
                    '&.selected-incorrect': {
                        $nest: {
                            '.inner-container': {
                                border: `1.5px solid var(--colors-error-main)`,
                                borderRadius: '0.25rem',
                                padding: '1rem 1rem !important'
                            },
                            '.answer-icon': {
                                opacity: 1
                            },
                            '.answer-label-inner': {
                                opacity: 1,
                                border: `1.5px solid var(--colors-error-main)`,
                                // color: `var(--colors-error-main) !important`
                            }
                        }
                    },
                    '&.show-correct': {
                        zIndex: 15,
                        border: `1.5px solid var(--colors-success-main)`,
                        borderRadius: '0.25rem',
                        padding: '1.5rem 1rem !important',
                        overflow: 'visible',
                        $nest: {
                            '.inner-container': {},
                            '.answer-icon': {
                                opacity: 1
                            },
                            '.answer-label-outer': {
                                opacity: 1,
                                border: `1.5px solid var(--colors-success-main)`,
                                // color: `var(--colors-error-main) !important`
                            }
                        }
                    }
                }
            },
            '.answer-icon': {
                opacity: 0,
                border: '1px solid #fff',
                borderRadius: '50%',
                transition: 'opacity 0.3s',
            },
            '&:hover': {
                $nest: {
                    '.answer-icon': {
                        opacity: 1
                    }
                }
            },
        }
    });
    exports.buttonStyle = components_1.Styles.style({
        background: "var(--background-main)",
        padding: '1rem 0.5rem',
        border: '1px solid var(--divider)',
        $nest: {
            '&:hover': {
                filter: 'brightness(0.85)'
            },
            '> i-icon:hover': {
                fill: `${Theme.colors.primary.contrastText} !important`
            },
            '&:.disabled': {
                background: "var(--background-main)",
                cursor: 'not-allowed !important',
                $nest: {
                    '&:hover': {
                        filter: 'brightness(0.1)',
                        cursor: 'not-allowed !important'
                    },
                    '> i-icon:hover': {
                        fill: `${Theme.colors.primary.contrastText} !important`,
                        cursor: 'not-allowed !important'
                    }
                }
            }
        }
    });
    exports.resultPnlStyle = components_1.Styles.style({
        background: "var(--background-main)",
        padding: '1rem 1.5rem',
        borderRadius: '0.25rem',
        border: '1px solid var(--divider)',
        $nest: {
            '&.unanswered': {
                border: '1px solid var(--divider)',
            },
            '&.correct': {
                border: '1px solid var(--colors-success-main)',
            },
            '&.incorrect': {
                border: '1px solid var(--colors-error-main)',
            }
        }
    });
});
define("@scom/scom-quiz/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-quiz/data.json.ts'/> 
    exports.default = {
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
    };
});
define("@scom/scom-quiz", ["require", "exports", "@ijstech/components", "@scom/scom-quiz/index.css.ts", "@scom/scom-quiz/data.json.ts"], function (require, exports, components_2, index_css_1, data_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const Theme = components_2.Styles.Theme.ThemeVars;
    const propertiesUISchema = {
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
    let ScomQuiz = class ScomQuiz extends components_2.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this.currentQuestionIndex = 0;
            this.selectedAnswerIdx = [];
            this.isQuizEnd = false;
            this._data = { questions: [] };
            this.tag = {};
        }
        getData() {
            return this._data;
        }
        async setData(data) {
            this._data = data;
            this.onUpdateBlock(this.tag);
        }
        getTag() {
            return this.tag;
        }
        updateTag(type, value) {
            var _a;
            this.tag[type] = (_a = this.tag[type]) !== null && _a !== void 0 ? _a : {};
            for (let prop in value) {
                if (value.hasOwnProperty(prop))
                    this.tag[type][prop] = value[prop];
            }
        }
        async setTag(value) {
            const newValue = value || {};
            if (newValue.light)
                this.updateTag('light', newValue.light);
            if (newValue.dark)
                this.updateTag('dark', newValue.dark);
            if (newValue.hasOwnProperty('height'))
                this.tag.height = newValue.height;
            this.onUpdateBlock(value);
        }
        setTheme(value) {
            this.onUpdateBlock(this.tag);
        }
        getDataSchema(readOnly = false) {
            const schema = {
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
        _getActions(dataSchema) {
            const actions = [
                {
                    name: 'Edit',
                    icon: 'edit',
                    command: (builder, userInputData) => {
                        let oldData = {};
                        let oldTag = {};
                        return {
                            execute: async () => {
                                oldData = JSON.parse(JSON.stringify(this._data));
                                const { questions } = userInputData, themeSettings = __rest(userInputData, ["questions"]);
                                const generalSettings = {
                                    questions: questions
                                };
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(generalSettings);
                                this.setData(generalSettings);
                                oldTag = JSON.parse(JSON.stringify(this.tag));
                                if (builder)
                                    builder.setTag(themeSettings);
                                else
                                    this.setTag(themeSettings);
                            },
                            undo: async () => {
                                this._data = JSON.parse(JSON.stringify(oldData));
                                this.onUpdateBlock(this.tag);
                                if (builder === null || builder === void 0 ? void 0 : builder.setData)
                                    builder.setData(this._data);
                                if (builder)
                                    builder.setTag(oldTag);
                                else
                                    this.setTag(oldTag);
                            },
                            redo: () => { }
                        };
                    },
                    userInputDataSchema: dataSchema,
                    userInputUISchema: propertiesUISchema
                }
            ];
            return actions;
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
                    setData: async (data) => {
                        const defaultData = data_json_1.default.defaultBuilderData;
                        await this.setData(Object.assign(Object.assign({}, defaultData), data));
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
            ];
        }
        numberToLetter(n) {
            if (n < 0) {
                // Handle negative numbers if needed
                return '';
            }
            const baseCharCode = 'A'.charCodeAt(0);
            const letter = String.fromCharCode(baseCharCode + n);
            return letter;
        }
        onUpdateBlock(config) {
            const themeVar = document.body.style.getPropertyValue('--theme') || 'dark';
            const { questionFontColor, answerFontColor, systemFontColor } = config[themeVar] || {};
            const { height = 'auto' } = config || {};
            if (!this._data.questions)
                return;
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
            const quizWrapper = (this.$render("i-vstack", null));
            if (this.pnlQuiz) {
                if (!this.isQuizEnd) {
                    const isMultipleChoice = this.checkIfMultipleAnswer();
                    // question
                    const hintNumber = this.$render("i-label", { caption: '*Select more than 1 answer', font: { size: '12px', color: questionFontColor || Theme.colors.secondary }, visible: false });
                    const question = (this.$render("i-hstack", { width: "100%", class: index_css_1.containerStyle },
                        this.$render("i-label", { caption: `${this.currentQuestionIndex + 1}`, margin: { right: '1rem' }, font: { bold: true, size: '20px', color: questionFontColor } }),
                        this.$render("i-vstack", { verticalAlignment: 'start', gap: '0.5rem' },
                            this.$render("i-label", { caption: `${currentQuestionData.question}`, font: { size: '20px', color: questionFontColor } }),
                            hintNumber)));
                    if (isMultipleChoice)
                        hintNumber.visible = true;
                    quizWrapper.append(question);
                    // answers
                    for (let i = 0; i < currentQuestionData.answers.length; i++) {
                        const lblTxtInner = this.$render("i-label", { caption: "Your Answer", font: { color: 'var(--colors-primary-main)' } });
                        const lblTxtOuter = this.$render("i-label", { caption: "Correct Answer", font: { color: 'var(--colors-success-main)' } });
                        const icon = this.$render("i-icon", { id: "answerIcon", name: "circle", fill: Theme.colors.primary.main, height: 16, width: 16, class: 'answer-icon', margin: { right: '1rem' } });
                        const answer = (this.$render("i-hstack", { width: "100%", class: index_css_1.containerStyle, gap: "0.5rem", verticalAlignment: 'center', position: 'relative', onClick: (control, event) => this.onClickedAnswer(control, i) },
                            this.$render("i-panel", { class: 'answer-label-outer', margin: { left: '1rem' }, zIndex: "10" }, lblTxtOuter),
                            this.$render("i-hstack", { class: 'inner-container', zIndex: "5", width: "100%", position: "relative", padding: { top: 0, left: 0, right: 0, bottom: 0 }, margin: { top: 0, left: 0, right: 0, bottom: 0 } },
                                this.$render("i-panel", { class: 'answer-label-inner', margin: { left: '1rem' }, zIndex: "10" }, lblTxtInner),
                                icon,
                                this.$render("i-label", { caption: `${this.numberToLetter(i)})`, margin: { right: '0.5rem' }, font: { color: answerFontColor } }),
                                this.$render("i-label", { caption: currentQuestionData.answers[i].content, font: { color: answerFontColor } }))));
                        answer.classList.add('answer');
                        // check if all correct answer are chosen
                        const isAllCorrectAnsChosen = currentQuestionData.answers.find(a => a.correct && !a.selected) ? false : true;
                        const isAllIncorrectAnsNotChosen = currentQuestionData.answers.find(a => !a.correct && a.selected) ? false : true;
                        const isCorrect = isAllCorrectAnsChosen && isAllIncorrectAnsNotChosen;
                        if (currentQuestionData.revealed) {
                            if (currentQuestionData.answers[i].selected && currentQuestionData.answers[i].correct && isCorrect) {
                                // selected all correct answers
                                answer.classList.add('selected-correct');
                                lblTxtInner.font = { color: 'var(--colors-success-main)' };
                                icon.name = 'check-circle';
                                icon.fill = "var(--colors-success-main)";
                            }
                            else if (currentQuestionData.answers[i].selected && currentQuestionData.answers[i].correct && !isCorrect) {
                                // selected partial correct answers
                                answer.classList.add('selected-incorrect');
                                answer.classList.add('show-correct');
                                lblTxtInner.font = { color: 'var(--colors-error-main)' };
                                icon.name = 'times-circle';
                                icon.fill = "var(--colors-error-main)";
                            }
                            else if (currentQuestionData.answers[i].selected && !currentQuestionData.answers[i].correct) {
                                // selected wrong answer
                                answer.classList.add('selected-incorrect');
                                lblTxtInner.font = { color: 'var(--colors-error-main)' };
                                icon.name = 'times-circle';
                                icon.fill = "var(--colors-error-main)";
                            }
                            else if (currentQuestionData.answers[i].correct) {
                                // display correct answer
                                answer.classList.add('show-correct');
                                icon.name = 'check-circle';
                                icon.fill = "var(--colors-success-main)";
                            }
                        }
                        quizWrapper.append(answer);
                    }
                    // buttons
                    const gridBtnStack = (this.$render("i-grid-layout", { width: "100%", height: "100px", horizontalAlignment: "center", verticalAlignment: "center", templateColumns: ['repeat(5, 1fr)'], templateRows: ['repeat(2, 1fr)'], templateAreas: [
                            ["BtnReset", "BtnPrev", "lblNumberOfQuestion", "BtnNext", "BtnSubmit"],
                            ["BtnReset", "BtnPrev", "lblNumberOfAttempted", "BtnNext", "BtnSubmit"]
                        ], autoFillInHoles: false, class: index_css_1.containerStyle },
                        this.$render("i-button", { grid: { area: 'BtnReset' }, caption: "Reset Quiz", rightIcon: { name: 'redo' }, class: index_css_1.buttonStyle, font: { color: systemFontColor }, onClick: () => this.onReset() }),
                        this.$render("i-button", { id: "btnSubmit", grid: { area: 'BtnSubmit' }, caption: "Submit Answer", class: `${index_css_1.buttonStyle} disabled`, font: { color: systemFontColor }, onClick: (control) => this.onSubmit(control) }),
                        this.$render("i-button", { id: "btnPrev", grid: { area: 'BtnPrev' }, width: 35, height: 35, icon: { name: 'angle-left' }, border: { radius: '50%' }, class: index_css_1.buttonStyle, onClick: () => this.onPrevQuestion() }),
                        this.$render("i-button", { id: "btnNext", grid: { area: 'BtnNext' }, width: 35, height: 35, icon: { name: 'angle-right' }, border: { radius: '50%' }, class: index_css_1.buttonStyle, onClick: () => this.onNextQuestion(this._data) }),
                        this.$render("i-button", { id: "btnEndQuiz", grid: { area: 'BtnNext' }, width: 35, height: 35, icon: { name: 'check-circle' }, border: { radius: '50%' }, class: index_css_1.buttonStyle, onClick: () => this.onEndQuiz(), visible: false }),
                        this.$render("i-label", { grid: { area: 'lblNumberOfQuestion' }, caption: `Question ${this.currentQuestionIndex + 1} of ${this._data.questions.length}`, font: { color: systemFontColor } }),
                        this.$render("i-label", { grid: { area: 'lblNumberOfAttempted' }, caption: `${(currentQuestionData.numberOfAttempt) ? currentQuestionData.numberOfAttempt : 0} attempted`, font: { color: systemFontColor } })));
                    quizWrapper.append(gridBtnStack);
                    if (this.currentQuestionIndex == 0)
                        this.btnPrev.classList.add('disabled');
                    if (this.currentQuestionIndex == this._data.questions.length - 1)
                        this.btnNext.classList.add('disabled');
                    // const isNotAllSubmitted = this._data.questions.find(q => !q.revealed);
                    if ( /*!isNotAllSubmitted && */this.currentQuestionIndex == this._data.questions.length - 1) {
                        this.querySelector('#btnEndQuiz').visible = true;
                        this.querySelector('#btnNext').visible = false;
                    }
                    // this.pnlQuiz.style.textAlign = textAlign || 'left';
                    // this.pnlQuiz.height = height
                }
                else {
                    const numberOfCorrect = this._data.questions.reduce((accumulator, q) => {
                        for (let i = 0; i < q.answers.length; i++) {
                            if (q.answers[i].correct !== q.answers[i].selected)
                                return accumulator;
                        }
                        return accumulator + 1;
                    }, 0);
                    const numberOfUnanswered = this._data.questions.reduce((accumulator, q) => {
                        for (let i = 0; i < q.answers.length; i++) {
                            if (q.answers[i].selected)
                                return accumulator;
                        }
                        return accumulator + 1;
                    }, 0);
                    const numberOfIncorrect = this._data.questions.length - numberOfCorrect - numberOfUnanswered;
                    const pnlResult = (this.$render("i-vstack", { horizontalAlignment: 'center', position: 'relative', padding: { left: '2rem', top: '2rem', right: '2rem' }, border: { color: 'var(--divider)', radius: '0.25rem', width: 1, style: 'solid' } },
                        this.$render("i-panel", { border: { color: 'var(--divider)', width: 0.5, style: 'solid' }, height: 0, width: '80%', position: "absolute", zIndex: 5, top: 'calc(20px + 2rem)' }),
                        this.$render("i-hstack", { width: 140, height: 40, padding: { left: '0.5rem', top: '0.5rem', right: '0.5rem', bottom: '0.5rem' }, margin: { bottom: '1.5rem' }, border: { color: 'var(--divider)', radius: '0.25rem', width: 1, style: 'solid' }, background: { color: "var(--background-main)" }, verticalAlignment: 'center', horizontalAlignment: 'center', zIndex: 10 },
                            this.$render("i-label", { caption: "SUMMARY" })),
                        this.$render("i-hstack", { horizontalAlignment: 'space-between', width: '50%', minWidth: '300px', class: `${index_css_1.resultPnlStyle} correct` },
                            this.$render("i-label", { caption: "Correct", font: { color: 'var(--colors-success-main)', bold: true } }),
                            this.$render("i-label", { caption: `${numberOfCorrect}`, font: { color: 'var(--colors-success-main)', bold: true } })),
                        this.$render("i-hstack", { horizontalAlignment: 'space-between', width: '50%', minWidth: '300px', class: `${index_css_1.resultPnlStyle} incorrect` },
                            this.$render("i-label", { caption: "Incorrect", font: { color: 'var(--colors-error-main)', bold: true } }),
                            this.$render("i-label", { caption: `${numberOfIncorrect}`, font: { color: 'var(--colors-error-main)', bold: true } })),
                        this.$render("i-hstack", { horizontalAlignment: 'space-between', width: '50%', minWidth: '300px', class: `${index_css_1.resultPnlStyle} unanswered` },
                            this.$render("i-label", { caption: "Unanswered", font: { color: 'var(--divider)', bold: true } }),
                            this.$render("i-label", { caption: `${numberOfUnanswered}`, font: { color: 'var(--divider)', bold: true } })),
                        this.$render("i-hstack", { width: '100%', horizontalAlignment: 'center', gap: '1rem', padding: { left: '0.5rem', top: '1rem', right: '0.5rem', bottom: '1rem' } },
                            this.$render("i-button", { caption: "Reset Quiz", rightIcon: { name: 'redo' }, class: index_css_1.buttonStyle, onClick: () => this.onResetQuiz() }),
                            this.$render("i-button", { caption: "Check Answers", class: index_css_1.buttonStyle, onClick: () => this.onCheckAnswer() }))));
                    quizWrapper.append(pnlResult);
                }
                this.pnlQuiz.append(quizWrapper);
            }
        }
        checkIfMultipleAnswer() {
            const numberOfCorrectAnswer = this._data.questions[this.currentQuestionIndex].answers.reduce((accumulator, a) => {
                if (a.correct)
                    return accumulator + 1;
                else
                    return accumulator;
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
                });
            });
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
            });
            currentQuestionData.revealed = false;
            this.onUpdateBlock(this.tag);
        }
        onSubmit(control) {
            const currentQuestionData = this._data.questions[this.currentQuestionIndex];
            const isDisabled = control.classList.contains('disabled');
            if (isDisabled)
                return;
            currentQuestionData.numberOfAttempt = (currentQuestionData.numberOfAttempt) ? currentQuestionData.numberOfAttempt + 1 : 1;
            currentQuestionData.answers.forEach(ans => {
                ans.selected = false;
            });
            this.selectedAnswerIdx.forEach(s => {
                currentQuestionData.answers[s].selected = true;
            });
            currentQuestionData.revealed = true;
            this.onUpdateBlock(this.tag);
        }
        onClickedAnswer(control, answerIdx) {
            if (this._data.questions[this.currentQuestionIndex].revealed)
                return;
            const isMultipleChoice = this.checkIfMultipleAnswer();
            const targetAnswer = control.closest('.answer');
            if (!targetAnswer)
                return;
            if (isMultipleChoice) {
                if (targetAnswer.classList.contains('selected')) {
                    targetAnswer.classList.remove('selected');
                    this.selectedAnswerIdx = this.selectedAnswerIdx.filter(item => item !== answerIdx);
                }
                else {
                    targetAnswer.classList.add('selected');
                    if (!this.selectedAnswerIdx.includes(answerIdx))
                        this.selectedAnswerIdx.push(answerIdx);
                }
                const selectedAnswers = control.closest('i-scom-quiz').querySelectorAll('.answer.selected');
                if (selectedAnswers.length > 1)
                    this.btnSubmit.classList.remove('disabled');
                else
                    this.btnSubmit.classList.add('disabled');
            }
            else {
                const answer = control.closest('i-scom-quiz').querySelectorAll('.answer');
                this.btnSubmit.classList.remove('disabled');
                answer.forEach(elm => {
                    elm.classList.remove('selected');
                });
                targetAnswer.classList.add('selected');
                this.selectedAnswerIdx = [answerIdx];
            }
        }
        onPrevQuestion() {
            if (this.currentQuestionIndex == 0)
                return;
            this.currentQuestionIndex--;
            this.selectedAnswerIdx = [];
            this.onUpdateBlock(this.tag);
        }
        onNextQuestion(data) {
            if (this.currentQuestionIndex == data.questions.length - 1)
                return;
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
            return (this.$render("i-panel", { id: "pnlQuiz", minHeight: 25 },
                this.$render("i-label", { caption: "INIT" })));
        }
    };
    ScomQuiz = __decorate([
        components_2.customModule,
        (0, components_2.customElements)('i-scom-quiz')
    ], ScomQuiz);
    exports.default = ScomQuiz;
});
