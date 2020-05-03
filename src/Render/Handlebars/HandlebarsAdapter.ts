import Handlebars = require("handlebars");
import {TemplateEngineInterface} from "../TemplateEngineInterface";

export class HandlebarsAdapter implements TemplateEngineInterface {
    render(template: string, viewModel: object): string {
        return Handlebars.compile(template)(viewModel);
    }
}
