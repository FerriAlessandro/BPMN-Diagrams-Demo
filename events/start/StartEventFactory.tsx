import { DiagramEngine } from "@projectstorm/react-diagrams";
import { StartEventModel } from "./StartEventModel";
import { AbstractReactFactory, GenerateModelEvent, GenerateWidgetEvent } from "@projectstorm/react-canvas-core"
import { StartEventWidget } from "./StartEventWidget"
import React from "react";
export class StartEventFactory extends AbstractReactFactory<StartEventModel, DiagramEngine>{

    constructor() {
        super('start');
    }
    generateReactWidget(event: GenerateWidgetEvent<StartEventModel>): JSX.Element {
        return <StartEventWidget engine={this.engine} node={event.model}></StartEventWidget>
    }


    generateModel(event: GenerateModelEvent): StartEventModel {
        return new StartEventModel();
    }

}