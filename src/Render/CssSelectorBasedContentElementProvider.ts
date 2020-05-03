import {ContentElementProviderInterface} from "./ContentElementProviderInterface";

export class CssSelectorBasedContentElementProvider implements ContentElementProviderInterface {
    private readonly selector: string;

    constructor(selector: string = '#content') {
        this.selector = selector;
    }

    getContentElement(window: Window): Element {
        return window.document.querySelector(this.selector);
    }

}
