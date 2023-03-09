import { DefaultPortModel, PortModel } from "@projectstorm/react-diagrams";
import { AbstractEventModel } from "../AbstractEventModel";
import { EndEventPortModel } from "./port/EndEventPortModel"

export class EndEventModel extends AbstractEventModel {
    constructor() {
        super('end');
        this.addPort(new EndEventPortModel('end-port'));
    }



}