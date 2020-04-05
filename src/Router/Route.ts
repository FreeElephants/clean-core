import {RouteHandler} from "./RouteHandler";
import {RouteHandlerFactoryInterface} from "./RouteHandlerFactoryInterface";
import {RouteInterface} from "./RouteInterface";
import {RouteHandlerInterface} from "./RouteHandlerInterface";

export class Route implements RouteInterface {
    private readonly path: string;
    private readonly handlerFactory: RouteHandlerFactoryInterface;

    constructor(path: string, handler: RouteHandlerFactoryInterface) {
        this.path = path;
        this.handlerFactory = handler;
    }

    getPath(): string {
        return this.path;
    }

    getHandler(): RouteHandlerInterface<any> {
        return this.handlerFactory();
    }
}
