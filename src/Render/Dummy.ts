import {TemplateEngineInterface} from "./TemplateEngineInterface";

export class Dummy implements TemplateEngineInterface {
    render(template: string, viewModel: object): string {
        return template;
    }

}
