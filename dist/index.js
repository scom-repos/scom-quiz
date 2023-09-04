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
    exports.buttonStyle = exports.containerStyle = void 0;
    const Theme = components_1.Styles.Theme.ThemeVars;
    exports.containerStyle = components_1.Styles.style({
        overflow: 'hidden',
        margin: '0 auto',
        padding: '1rem 0.5rem',
        border: '1px solid var(--divider)',
        background: "var(--background-main)",
        $nest: {
            '&.answer': {
                transition: 'filter 0.3s',
                cursor: 'pointer',
                $nest: {
                    '&:hover': {
                        filter: 'brightness(0.95)'
                    }
                }
            }
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
});
define("@scom/scom-quiz/data.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@scom/scom-quiz/data.json.ts'/> 
    exports.default = {
        "defaultBuilderData": {}
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
    let ScomQuiz = class ScomQuiz extends components_2.Module {
        static async create(options, parent) {
            let self = new this(parent, options);
            await self.ready();
            return self;
        }
        constructor(parent, options) {
            super(parent, options);
            this.currentQuestionIndex = 0;
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
            if (newValue.hasOwnProperty('textAlign'))
                this.tag.textAlign = newValue.textAlign;
            this.onUpdateBlock(value);
        }
        setTheme(value) {
            this.onUpdateBlock(this.tag);
        }
        getDataSchema(readOnly = false) {
            const schema = {
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
                                const { linkButtons } = userInputData, themeSettings = __rest(userInputData, ["linkButtons"]);
                                const generalSettings = {
                                    questions: linkButtons
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
                    getLinkParams: () => {
                        const data = this._data || {};
                        return {
                            data: window.btoa(JSON.stringify(data))
                        };
                    },
                    setLinkParams: async (params) => {
                        if (params.data) {
                            const utf8String = decodeURIComponent(params.data);
                            const decodedString = window.atob(utf8String);
                            const newData = JSON.parse(decodedString);
                            let resultingData = Object.assign(Object.assign({}, self._data), newData);
                            await this.setData(resultingData);
                        }
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
                const quizWrapper = (this.$render("i-vstack", null));
                // question
                const question = (this.$render("i-hstack", { width: "100%", class: index_css_1.containerStyle },
                    this.$render("i-label", { caption: `${currentQuestionData.question}` })));
                quizWrapper.append(question);
                // answers
                for (let i = 0; i < currentQuestionData.answer.length; i++) {
                    const answer = (this.$render("i-hstack", { width: "100%", class: index_css_1.containerStyle, gap: "0.5rem", onClick: () => this.onClickedAnswer() },
                        this.$render("i-label", { caption: `${this.numberToLetter(i)})` }),
                        this.$render("i-label", { caption: currentQuestionData.answer[i].content })));
                    answer.classList.add('answer');
                    quizWrapper.append(answer);
                }
                this.pnlQuiz.append(quizWrapper);
                // buttons
                const gridBtnStack = (this.$render("i-grid-layout", { width: "100%", height: "100px", horizontalAlignment: "center", verticalAlignment: "center", templateColumns: ['repeat(5, 1fr)'], templateRows: ['repeat(2, 1fr)'], templateAreas: [
                        ["BtnReset", "BtnPrev", "lblNumberOfQuestion", "BtnNext", "BtnSubmit"],
                        ["BtnReset", "BtnPrev", "lblNumberOfAttempted", "BtnNext", "BtnSubmit"]
                    ], autoFillInHoles: false, class: index_css_1.containerStyle },
                    this.$render("i-button", { grid: { area: 'BtnReset' }, caption: "Reset Quiz", rightIcon: { name: 'redo' }, class: index_css_1.buttonStyle }),
                    this.$render("i-button", { grid: { area: 'BtnSubmit' }, caption: "Submit Answer", class: index_css_1.buttonStyle }),
                    this.$render("i-button", { id: "btnPrev", grid: { area: 'BtnPrev' }, icon: { name: 'angle-left' }, class: index_css_1.buttonStyle, onClick: () => this.onPrevQuestion() }),
                    this.$render("i-button", { id: "btnNext", grid: { area: 'BtnNext' }, icon: { name: 'angle-right' }, class: index_css_1.buttonStyle, onClick: () => this.onNextQuestion(this._data) }),
                    this.$render("i-label", { grid: { area: 'lblNumberOfQuestion' }, caption: `Question ${this.currentQuestionIndex + 1} of ${this._data.questions.length}` }),
                    this.$render("i-label", { grid: { area: 'lblNumberOfAttempted' }, caption: `0 attempted` })));
                this.pnlQuiz.append(gridBtnStack);
                if (this.currentQuestionIndex == 0)
                    this.btnPrev.classList.add('disabled');
                if (this.currentQuestionIndex == this._data.questions.length - 1)
                    this.btnNext.classList.add('disabled');
                // this.pnlQuiz.style.textAlign = textAlign || 'left';
                // this.pnlQuiz.height = height
            }
        }
        onClickedAnswer() {
        }
        onPrevQuestion() {
            if (this.currentQuestionIndex == 0)
                return;
            this.currentQuestionIndex--;
            this.onUpdateBlock(this.tag);
        }
        onNextQuestion(data) {
            if (this.currentQuestionIndex == data.questions.length - 1)
                return;
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
