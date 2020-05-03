export interface TemplateEngineInterface {
    render(template: string, viewModel: object): string;
}
