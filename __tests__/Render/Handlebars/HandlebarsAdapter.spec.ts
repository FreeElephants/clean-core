import {HandlebarsAdapter} from "../../../src/Render/Handlebars/HandlebarsAdapter";

describe('HandlebarAdapter test', () => {
    it('test render', () => {
        let templateEngine = new HandlebarsAdapter();
        let result = templateEngine.render('{{foo}}', {foo: 'bar'});
        expect(result).toEqual('bar');
    });
});
