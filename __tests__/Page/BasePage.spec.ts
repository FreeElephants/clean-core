import {BasePage} from "../../src/Page";
import {TemplateLoader} from "../TemplateLoader";
import {HandlebarsAdapter} from "../../src/Render/Handlebars/HandlebarsAdapter";
import {Dummy} from "../../src/Render/Dummy";
import {CssSelectorBasedContentElementProvider} from "../../src/Render/CssSelectorBasedContentElementProvider";
import {CssSelectorBasedTemplateElementProvider} from "../../src/Render/CssSelectorBasedTemplateElementProvider";

const templatePath = process.cwd() + '/__tests__/_fixtures';
let templateLoader = new TemplateLoader(templatePath);

describe('BasePage test', () => {
    it('test render with handlebars', () => {
        let page = new class extends BasePage {
            getViewModel(): object {
                return {foo: "bar"};
            }

        }
        let window = templateLoader.load('/html/foo.html');
        BasePage.setTemplateEngine(new HandlebarsAdapter());
        page.render(window);
        expect(window.document.querySelector('h1').innerHTML).toEqual('bar');
    });

    it('test dummy rendering', () => {
        let page = new class extends BasePage {
            getViewModel(): object {
                return {foo: "bar"};
            }

        }
        let window = templateLoader.load('/html/raw.html');
        BasePage.setTemplateEngine(new Dummy());
        BasePage.setTemplateElementProvider(new CssSelectorBasedTemplateElementProvider('body'));
        BasePage.setContentElementProvider(new CssSelectorBasedContentElementProvider('body'));
        page.render(window);
        expect(window.document.querySelector('h1').innerHTML).toEqual('Raw header');
    });
})
