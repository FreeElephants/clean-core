import {PageInterface} from "../Page/PageInterface";
import {RouteHandlerInterface} from "./RouteHandlerInterface";

export abstract class RouteHandler<RouteParams> implements RouteHandlerInterface<RouteParams> {

    abstract initPage(window: Window): Promise<PageInterface>;

    handle(window: Window): void {
        this.initPage(window).then(page => {
                page.render(window);
            }
        );
    }
}