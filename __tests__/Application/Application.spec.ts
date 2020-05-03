import {Arg, Substitute} from "@fluffy-spoon/substitute";
import {RouterInterface} from "../../src/Router";
import {JSDOM} from "jsdom";
import {Application} from "../../src/Application";
import {RouteNotFoundException} from "../../src/Application/Exception";

describe('Test application run', () => {
    it('test call router', () => {
        let app = new Application();
        let router = Substitute.for<RouterInterface>();
        let window = new JSDOM('', {url: 'http://example.com/foo.html'}).window;
        app.run(router, window);
        router.received(1).hasHandler('/foo.html');
        router.received(1).getHandler('/foo.html');
    });

    it('test route not found', () => {
        let app = new Application();
        let router = Substitute.for<RouterInterface>();
        router.hasHandler(Arg.any()).returns(false);
        let window = new JSDOM('', {url: 'http://example.com/foo.html'}).window;
        expect(() => {
            app.run(router, window);
        }).toThrow(RouteNotFoundException);
    });
});
