import {Router} from "../../src/Router";
import {RouteHandler} from "../../src/Router";
import {PageInterface} from "../../src/Page";
import {Route} from "../../src/Router";

describe('Router', () => {
    it('add', () => {
        const router = new Router();

        let handler = new class extends RouteHandler<any> {
            initPage(window: Window): Promise<PageInterface> {
                return Promise.resolve(undefined);
            }
        };
        router.addRoute(new Route('/index.html', () => {
            return handler;
        }));

        expect(router.hasHandler('/foo.bar')).toBeFalsy();
        expect(router.hasHandler('/index.html')).toBeTruthy();
        expect(router.getHandler('/index.html')).toEqual(handler);
    });
});
