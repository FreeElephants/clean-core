import {RouteParams} from "./RouteParams";

export class RouteParamParser {

    parse(location: Location) {
        const queryString = location.search;
        const query: RouteParams = {};
        const pairs: string[] = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }

        return query;
    }
}