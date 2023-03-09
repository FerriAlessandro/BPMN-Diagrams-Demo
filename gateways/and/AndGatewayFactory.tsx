import { DiagramEngine } from "@projectstorm/react-diagrams";
import { AndGatewayModel } from "./AndGatewayModel";
import { AbstractReactFactory, GenerateModelEvent, GenerateWidgetEvent } from "@projectstorm/react-canvas-core"
import { AndGatewayWidget } from "./AndGatewayWidget"
import React from "react";
export class AndGatewayFactory extends AbstractReactFactory<AndGatewayModel, DiagramEngine>{

    constructor() {
        super('and');
    }
    generateReactWidget(event: GenerateWidgetEvent<AndGatewayModel>): JSX.Element {
        return <AndGatewayWidget engine={this.engine} node={event.model}></AndGatewayWidget>
    }


    generateModel(event: GenerateModelEvent): AndGatewayModel {
        return new AndGatewayModel();
    }

}