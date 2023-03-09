import { DiagramEngine } from "@projectstorm/react-diagrams";
import { TaskActivityModel } from "./TaskActivityModel";
import { AbstractReactFactory, GenerateModelEvent, GenerateWidgetEvent } from "@projectstorm/react-canvas-core"
import { TaskActivityWidget } from "./TaskActivityWidget"
import React from "react";
export class TaskActivityFactory extends AbstractReactFactory<TaskActivityModel, DiagramEngine>{

    constructor() {
        super('task');
    }
    generateReactWidget(event: GenerateWidgetEvent<TaskActivityModel>): JSX.Element {
        return <TaskActivityWidget engine={this.engine} node={event.model}></TaskActivityWidget>
    }


    generateModel(event: GenerateModelEvent): TaskActivityModel {
        return new TaskActivityModel();
    }

}