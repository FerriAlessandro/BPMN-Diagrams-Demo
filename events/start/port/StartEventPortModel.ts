import { DefaultLinkModel, LinkModel, LinkModelGenerics, PortModel, PortModelGenerics } from "@projectstorm/react-diagrams";
import { AbstractModelFactory } from "@projectstorm/react-canvas-core"
import { AbstractEventPortModel } from '../../AbstractEventPortModel'
import { ActivitiesPortModel } from "../../../activities/ActivitiesPortModel";
import { ArrowLinkModel } from "../../../ArrowLinks-custom/ArrowLinkModel"
export class StartEventPortModel extends AbstractEventPortModel {
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
    /* canLinkToPort(port: PortModel<PortModelGenerics>): boolean {
 
         //Method called when a link is dragged from this port (start) to another port
         //Customizable if we want to avoid the connection between the start event and another component
         if (port.getName() === "start-port") {
             return false;
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
         //if there's already a link from the start
         if (Object.keys(this.links).length > 0) {
             return null
         }
         //else we return a new link 
         else {
             const link = new DefaultLinkModel();
             return link;
         }
     }*/

}