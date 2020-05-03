import {JSDOM} from "jsdom";

const fs = require('fs');

export class TemplateLoader {
    private path: string;

    constructor(path: string) {
        this.path = path;
    }

    public load(filename: string): Window {
        let template = '';
        try {
            template = fs.readFileSync(this.path + filename);
        } catch (e) {
            console.log(e);
        }

        return <Window>new JSDOM(template).window;
    }
}
