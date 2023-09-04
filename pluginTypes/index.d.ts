/// <amd-module name="@scom/scom-quiz/interface.ts" />
declare module "@scom/scom-quiz/interface.ts" {
    export interface IConfig {
        questions: IData[];
    }
    export interface IData {
        question: string;
        answer: IAnswer[];
    }
    export interface IAnswer {
        content: string;
        correct: boolean;
        selected?: boolean;
    }
}
/// <amd-module name="@scom/scom-quiz/index.css.ts" />
declare module "@scom/scom-quiz/index.css.ts" {
    export const containerStyle: string;
    export const buttonStyle: string;
}
/// <amd-module name="@scom/scom-quiz/data.json.ts" />
declare module "@scom/scom-quiz/data.json.ts" {
    const _default: {
        defaultBuilderData: {};
    };
    export default _default;
}
/// <amd-module name="@scom/scom-quiz" />
declare module "@scom/scom-quiz" {
    import { Module, ControlElement, Container, IDataSchema, IUISchema } from '@ijstech/components';
    import { IConfig } from "@scom/scom-quiz/interface.ts";
    interface ScomQuizElement extends ControlElement {
        lazyLoad?: boolean;
        data: IConfig;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ["i-scom-quiz"]: ScomQuizElement;
            }
        }
    }
    export default class ScomQuiz extends Module {
        private pnlQuiz;
        private currentQuestionIndex;
        private btnPrev;
        private btnNext;
        private _data;
        tag: any;
        static create(options?: ScomQuizElement, parent?: Container): Promise<ScomQuiz>;
        constructor(parent?: Container, options?: ScomQuizElement);
        private getData;
        private setData;
        private getTag;
        private updateTag;
        private setTag;
        private setTheme;
        private getDataSchema;
        private _getActions;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => Promise<void>;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
            }[];
            getData: any;
            setData: (data: IConfig) => Promise<void>;
            getTag: any;
            setTag: any;
            getLinkParams?: undefined;
            setLinkParams?: undefined;
        } | {
            name: string;
            target: string;
            getActions: () => {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => Promise<void>;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: IUISchema;
            }[];
            getLinkParams: () => {
                data: string;
            };
            setLinkParams: (params: any) => Promise<void>;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        })[];
        private numberToLetter;
        private onUpdateBlock;
        onClickedAnswer(): void;
        onPrevQuestion(): void;
        onNextQuestion(data: IConfig): void;
        init(): void;
        render(): any;
    }
}
