import { PortModel } from "@projectstorm/react-diagrams";

export class AbstractEventPortModel extends PortModel {
    constructor(name: string, maxLinks: number) {
        super({
            maximumLinks: maxLinks,
            name: name,
        });
    }
}