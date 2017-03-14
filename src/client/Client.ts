import {Utils} from "../common/Utils";

export class Client {
    constructor(protected utils: Utils) {

    }

    public hello() {
        document.body.innerHTML = `Hello there ${this.utils.randomInt(0, 100)}`;
    }
}