import {BasePage} from "../../src/Page";
import {TemplateLoader} from "../TemplateLoader";
import {HandlebarsAdapter} from "../../src/Render/Handlebars/HandlebarsAdapter";

const templatePath = process.cwd() + '/__tests__/_fixtures';
let templateLoader = new TemplateLoader(templatePath);

describe('BasePage test', () => {
    it('test render', () => {
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
})
