import {RouteInterface} from "./RouteInterface";
import {RouteHandlerInterface} from "./RouteHandlerInterface";

export interface RouterInterface {
    addRoute(route: RouteInterface): void;

    hasHandler(path: string): boolean;

    getHandler(page: string): RouteHandlerInterface<any>;
}