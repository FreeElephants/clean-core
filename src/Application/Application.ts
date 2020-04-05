import {ApplicationInterface} from "./ApplicationInterface";
import {RouterInterface} from "../Router/RouterInterface";
import {RouteNotFoundException} from "./Exception/RouteNotFoundException";

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