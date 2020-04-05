import {RouteInterface} from "./RouteInterface";
import {RouteHandlerInterface} from "./RouteHandlerInterface";
import {RouterInterface} from "./RouterInterface";

export class Router implements RouterInterface {
    private routesMap: {
        [key: string]: RouteInterface;
    } = {};

    public addRoute(route: RouteInterface) {
        this.routesMap[route.getPath()] = route;
    }

    hasHandler(path: string): boolean {
        return this.routesMap.hasOwnProperty(path);
    }

    getHandler(page: string): RouteHandlerInterface<any> {
        return this.routesMap[page].getHandler();
    }
}
