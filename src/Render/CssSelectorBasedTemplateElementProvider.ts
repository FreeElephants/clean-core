import {TemplateElementProviderInterface} from "./TemplateElementProviderInterface";

export class CssSelectorBasedTemplateElementProvider implements TemplateElementProviderInterface {
    private readonly selector: string;

    constructor(selector: string = '#template') {
        this.selector = selector;
    }

    getTemplateElement(window: Window): Element {
        return window.document.querySelector(this.selector);
    }
}
