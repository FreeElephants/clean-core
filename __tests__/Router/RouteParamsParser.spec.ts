import {RouteParamParser} from "../../src/Router/RouteParamParser";
import {JSDOM} from "jsdom";

describe('Route params parsing', () => {
    it('Test parsing', () => {
        let parser = new RouteParamParser();
        let window = new JSDOM('', {url: 'http://example.com?foo=bar'}).window;
        let params = parser.parse(window.location);
        expect(params).toStrictEqual({
            foo: 'bar',
        });
    });
});