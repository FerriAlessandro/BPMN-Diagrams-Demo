import { DefaultLinkModel, LinkModel, LinkModelGenerics, PortModel, PortModelGenerics } from "@projectstorm/react-diagrams";
import { AbstractModelFactory } from "@projectstorm/react-canvas-core"
import { AbstractEventPortModel } from "../../AbstractEventPortModel";
import { ArrowLinkModel } from "../../../ArrowLinks-custom/ArrowLinkModel";
export class EndEventPortModel extends AbstractEventPortModel {
    constructor(name: string) {
        super(name, 1);
    }

    createLinkModel(): LinkModel<LinkModelGenerics> | null {
        return new ArrowLinkModel();

    }
    canLinkToPort(port: PortModel<PortModelGenerics>): boolean {
        if (port.getID() === this.getID()) {
            return false;
        }
        return true;
    }
    /*canLinkToPort(port: PortModel<PortModelGenerics>): boolean {

        //end event can't connect to anything
        return false;
    }

    createLinkModel() {

        //end event can't connect to anything, so we don't create a link when we drag from its port
        return null;
    }*/

}