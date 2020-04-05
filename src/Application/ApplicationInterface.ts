import {RouterInterface} from "../Router/RouterInterface";

export interface ApplicationInterface {
    run(router: RouterInterface, window: Window): void;
}