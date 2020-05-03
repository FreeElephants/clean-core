import {EventHandlerMap} from "./EventHandlerMap";
import {PageBehaviorEvent} from "./PageBehaviorEvent";
import {PageInterface} from "./PageInterface";
import {TemplateEngineInterface} from "../Render/TemplateEngineInterface";
import {TemplateElementProviderInterface} from "../Render/TemplateElementProviderInterface";
import {ContentElementProviderInterface} from "../Render/ContentElementProviderInterface";
import {HandlebarsAdapter} from "../Render/Handlebars/HandlebarsAdapter";
import {CssSelectorBasedTemplateElementProvider} from "../Render/CssSelectorBasedTemplateElementProvider";
import {CssSelectorBasedContentElementProvider} from "../Render/CssSelectorBasedContentElementProvider";

/**
 * Supertype for Page Objects.
 * Page Object render view to Window, and can provide interactive behavior for document.
 */
export abstract class BasePage implements PageInterface {

    private static templateEngine: TemplateEngineInterface = new HandlebarsAdapter();
    private static templateElementProvider: TemplateElementProviderInterface = new CssSelectorBasedTemplateElementProvider();
    private static contentElementProvider: ContentElementProviderInterface = new CssSelectorBasedContentElementProvider();

    static setTemplateEngine(templateEngine: TemplateEngineInterface): void {
        this.templateEngine = templateEngine;
    }

    static setTemplateElementProvider(provider: TemplateElementProviderInterface) {
        this.templateElementProvider = provider;
    }

    static setContentElementProvider(provider: ContentElementProviderInterface) {
        this.contentElementProvider = provider;
    }

    abstract getViewModel(): object;

    render(window: Window) {
        this.initBehavior(window);

        let viewModel = this.getViewModel();

        this.renderContent(window, viewModel);
    }

    private initEvent(document: Document, type: string): Event {
        let event = document.createEvent("CustomEvent");
        event.initCustomEvent(type, true, true, true);
        return event;
    }

    protected getTemplateElement(window: Window): Element {
        return BasePage.templateElementProvider.getTemplateElement(window);
    }

    protected getContentElement(window: Window): Element {
        return BasePage.contentElementProvider.getContentElement(window)
    }

    protected renderTemplate(template: string, viewModel: object): string {
        return BasePage.templateEngine.render(template, viewModel);
    }

    private initBehavior(window: Window) {
        let eventMap = this.getBehavior(window);
        for (let eventKey in eventMap) {
            window.addEventListener(eventKey, eventMap[eventKey]);
        }
    }

    protected getBehavior(window: Window): EventHandlerMap {
        return {};
    }

    private renderContent(window: Window, viewModel: object) {
        let templateElement = this.getTemplateElement(window);
        let beforeParseTemplateEvent = this.initEvent(window.document, PageBehaviorEvent.beforeParseTemplate);
        templateElement.dispatchEvent(beforeParseTemplateEvent);
        let template = templateElement.innerHTML;
        let rendered = this.renderTemplate(template, viewModel);
        let contentElement = this.getContentElement(window);
        contentElement.innerHTML = rendered;
        let afterRenderEvent = this.initEvent(window.document, PageBehaviorEvent.afterRender);
        contentElement.dispatchEvent(afterRenderEvent);
    }
}
