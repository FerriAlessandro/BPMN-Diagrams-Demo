import { DiagramEngine } from "@projectstorm/react-diagrams";
import { EndEventModel } from "./EndEventModel";
import { AbstractReactFactory, GenerateModelEvent, GenerateWidgetEvent } from "@projectstorm/react-canvas-core"
import { EndEventWidget } from "./EndEventWidget"
import React from "react";
export class EndEventFactory extends AbstractReactFactory<EndEventModel, DiagramEngine>{

    constructor() {
        super('end');
    }
    generateReactWidget(event: GenerateWidgetEvent<EndEventModel>): JSX.Element {
        return <EndEventWidget engine={this.engine} node={event.model}></EndEventWidget>
    }


    generateModel(event: GenerateModelEvent): EndEventModel {
        return new EndEventModel();
    }

}