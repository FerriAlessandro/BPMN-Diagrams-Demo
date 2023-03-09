import { DefaultPortModel, PortModel } from "@projectstorm/react-diagrams";
import { AbstractEventModel } from "../AbstractEventModel";
import { StartEventPortModel } from "./port/StartEventPortModel"

export class StartEventModel extends AbstractEventModel {
    constructor() {
        super('start');
        this.addPort(new StartEventPortModel('start-port'));
    }



}