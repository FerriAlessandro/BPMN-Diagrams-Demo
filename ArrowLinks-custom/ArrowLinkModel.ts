import { DefaultLinkModel } from "@projectstorm/react-diagrams";

export class ArrowLinkModel extends DefaultLinkModel {
    constructor() {
        super({
            type: 'arrow-link',
            width: 4
        });
    }
}