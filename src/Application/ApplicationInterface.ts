import {RouterInterface} from "../Router";

export interface ApplicationInterface {
    run(router: RouterInterface, window: Window): void;
}
