import { DefaultNodeModel, PortModel } from "@projectstorm/react-diagrams";

export class AbstractActivityModel extends DefaultNodeModel {
    constructor(type: string) {
        super({
            type: type,
        });
    }

    label?: string;
    img?: string; //visual sprite of the component

    addPort<T extends PortModel>(port: T): T {
        port.setParent(this);
        this.ports[port.getName()] = port;
        return port;
    }
}