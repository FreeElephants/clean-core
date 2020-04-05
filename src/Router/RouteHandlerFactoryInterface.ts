import {RouteHandlerInterface} from "./RouteHandlerInterface";

export interface RouteHandlerFactoryInterface {
    (): RouteHandlerInterface<any>;
}