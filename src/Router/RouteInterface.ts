import {RouteHandlerInterface} from "./RouteHandlerInterface";

export interface RouteInterface {
    getPath(): string;

    getHandler(): RouteHandlerInterface<any>;

}