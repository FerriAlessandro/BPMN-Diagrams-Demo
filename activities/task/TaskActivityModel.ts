import { AbstractActivityModel } from '../AbstractActivityModel'
import { ActivitiesPortModel } from '../ActivitiesPortModel';

export class TaskActivityModel extends AbstractActivityModel {

    constructor() {
        super('task');
        this.addPort(new ActivitiesPortModel("task-port1"));
        this.addPort(new ActivitiesPortModel("task-port2"));
        this.addPort(new ActivitiesPortModel("task-port3"));
        this.addPort(new ActivitiesPortModel("task-port4"));

    }

}