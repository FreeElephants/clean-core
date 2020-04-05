export interface RouteHandlerInterface<RouteParams> {
    handle(window: Window): void;
}