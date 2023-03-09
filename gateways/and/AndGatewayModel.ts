import { DefaultPortModel, PortModel } from "@projectstorm/react-diagrams";
import { AbstractGatewayModel } from "../AbstractGatewayModel";
import { AndGatewayPortModel } from "../and/port/AndGatewayPortModel"
export class AndGatewayModel extends AbstractGatewayModel {
    constructor() {
        super('and');
        this.addPort(new AndGatewayPortModel('and-port1'));
        this.addPort(new AndGatewayPortModel('and-port2'));
        this.addPort(new AndGatewayPortModel('and-port3'));
        this.addPort(new AndGatewayPortModel('and-port4'));
    }

}