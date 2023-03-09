import createEngine, { DiagramEngine, DiagramModel } from '@projectstorm/react-diagrams'
import { StartEventFactory } from '../events/start/StartEventFactory'
import { StartEventModel } from '../events/start/StartEventModel'
import ReactDom from 'react-dom'
import { CanvasWidget } from '@projectstorm/react-canvas-core'
import { AndGatewayModel } from '../gateways/and/AndGatewayModel'
import { AndGatewayFactory } from '../gateways/and/AndGatewayFactory'
import { TaskActivityModel } from '../activities/task/TaskActivityModel'
import { TaskActivityFactory } from '../activities/task/TaskActivityFactory'
import { EndEventModel } from '../events/end/EndEventModel'
import { EndEventFactory } from '../events/end/EndEventFactory'
import { ArrowLinkFactory } from '../ArrowLinks-custom/ArrowLinkFactory'
import '../www/index.css'

const engine = createEngine({
    registerDefaultZoomCanvasAction: false,
    registerDefaultPanAndZoomCanvasAction: true
});
const model = new DiagramModel();
engine.getNodeFactories().registerFactory(new StartEventFactory());
engine.getNodeFactories().registerFactory(new EndEventFactory());
engine.getNodeFactories().registerFactory(new AndGatewayFactory());
engine.getNodeFactories().registerFactory(new TaskActivityFactory());
engine.getLinkFactories().registerFactory(new ArrowLinkFactory());

const start = new StartEventModel();
start.getOptions().name = "Start Event 1";
start.width = 50;
start.height = 50;

const end = new EndEventModel();
end.getOptions().name = "End Event 1";
end.width = 50;
end.height = 50;




const and = new AndGatewayModel();
and.getOptions().name = "Parallel Gateway 1";
and.width = 50;
and.height = 50;


const task = new TaskActivityModel();
task.getOptions().name = "Task 1";
task.width = 150;
task.height = 100;

let startCounter = 2;
let endCounter = 2;
let parallelCounter = 2;
let taskCounter = 2;

function createStart(engine: DiagramEngine): void {
    let node = new StartEventModel();
    node.width = 50;
    node.height = 50;
    let name = window.prompt("Node's name:", "Start " + startCounter);
    if (name) {
        node.getOptions().name = name;
    }
    startCounter++;
    engine.getModel().addAll(node);
    engine.repaintCanvas();
}

function createEnd(engine: DiagramEngine): void {
    let node = new EndEventModel();
    node.width = 50;
    node.height = 50;
    let name = window.prompt("Node's name:", "End " + endCounter);
    if (name) {
        node.getOptions().name = name;
    }
    endCounter++;
    engine.getModel().addAll(node);
    engine.repaintCanvas();
}

function createParallelGateway(engine: DiagramEngine): void {
    let node = new AndGatewayModel();
    node.width = 50;
    node.height = 50;
    let name = window.prompt("Node's name:", "Parallel Gateway " + parallelCounter);
    if (name) {
        node.getOptions().name = name;
    }
    parallelCounter++;
    engine.getModel().addAll(node);
    engine.repaintCanvas();
}

function createTask(engine: DiagramEngine): void {
    let node = new TaskActivityModel();
    node.width = 150;
    node.height = 100;
    let name = window.prompt("Node's name:", "Task " + taskCounter);
    if (name) {
        node.getOptions().name = name;
    }
    taskCounter++;
    engine.getModel().addAll(node);
    engine.repaintCanvas();
}


model.addAll(start, and, task, end);
engine.setModel(model);
ReactDom.render(
    <>
        <CanvasWidget className='diagram-container' engine={engine} />
        <button onClick={() => createStart(engine)}>Create Start</button>
        <button onClick={() => createEnd(engine)}>Create End</button>
        <button onClick={() => createParallelGateway(engine)}>Create Parallel Gateway</button>
        <button onClick={() => createTask(engine)}>Create Task</button>
    </>, document.getElementById("root"))
