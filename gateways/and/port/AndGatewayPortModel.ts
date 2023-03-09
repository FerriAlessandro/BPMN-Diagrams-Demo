import { DefaultLinkModel, LinkModel, LinkModelGenerics, PortModel, PortModelGenerics } from "@projectstorm/react-diagrams";
import { AbstractModelFactory } from "@projectstorm/react-canvas-core"
import { AbstractEventPortModel } from "../../../events/AbstractEventPortModel";
import { ActivitiesPortModel } from "../../../activities/ActivitiesPortModel"
import { ArrowLinkModel } from "../../../ArrowLinks-custom/ArrowLinkModel";
export class AndGatewayPortModel extends PortModel {
    constructor(name: string) {
        super({
            maximumLinks: 2,
            name: name,
        });
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

        //If the target is an Event
        if (port instanceof AbstractEventPortModel) {
            if (port.getName() === 'start-port') {
                return false;
            }
            else {
                //If the event component has already a connection
                for (let key in port.getLinks()) {
                    if (port.getLinks()[key].getTargetPort() === port) {
                        return false;
                    }

                }
                return true;
            }
        }
        else if (port instanceof ActivitiesPortModel) {

            //If something is already connected to the activity
            for (let key in port.getLinks()) {
                if (port.getLinks()[key].getTargetPort() === port) {
                    return false;
                }
            }
            return true;
        }
        return true;
    }

    createLinkModel() {
        //we count if the number of links that this port has created is smaller than the maximum number that it can create
        //TODO: store the number in a variable instead of cycling each time in this function
        let sourceLinks = 0;
        for (let key in this.getLinks()) {
            if (this.getLinks()[key].getSourcePort() === this) {
                sourceLinks++;
            }
        }
        if (sourceLinks < this.getMaximumLinks()) {
            const link = new DefaultLinkModel();
            this.addLink(link);
            return link;
        }
        else return null;
    }*/

}