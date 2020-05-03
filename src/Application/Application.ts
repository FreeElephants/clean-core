import {ApplicationInterface} from "./ApplicationInterface";
import {RouterInterface} from "../Router";
import {RouteNotFoundException} from "./Exception";

export class Application implements ApplicationInterface {
    run(router: RouterInterface, window: Window): void {
        let pathname = window.location.pathname;
        if (router.hasHandler(pathname)) {
            router.getHandler(pathname).handle(window);
        } else {
            throw new RouteNotFoundException();
        }
    }
}
