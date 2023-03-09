import { DiagramEngine, PortWidget } from "@projectstorm/react-diagrams";
import { TaskActivityModel } from "./TaskActivityModel";
import React from "react";

export interface TaskActivityWidgetProps {
    node: TaskActivityModel,
    engine: DiagramEngine
}

export class TaskActivityWidget extends React.Component<TaskActivityWidgetProps>{


    render(): React.ReactNode {
        return (
            <>
                <div
                    className="task-activity"
                    style={{
                        position: 'relative',
                        width: this.props.node.width,
                        height: this.props.node.height,
                        //borderRadius: '50%',
                        //background: 'rgb(0,0,255)',
                        zIndex: '1'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="100" viewBox="0 0 150 100">
                        <rect className="task-activity-shape" width="140" height="90" x="5" y="5" stroke="currentColor" strokeLinecap="round" strokeWidth="5" rx="10" ry="10"></rect>
                        <path d="m 15,12 c 0.909,-0.845 1.594,-2.049 1.594,-3.385 0,-2.554 -1.805,-4.62199999 -4.357,-4.62199999 -2.55199998,0 -4.28799998,2.06799999 -4.28799998,4.62199999 0,1.348 0.974,2.562 1.89599998,3.405 -0.52899998,0.187 -5.669,2.097 -5.794,4.7560005 v 6.718 h 17 v -6.718 c 0,-2.2980005 -5.5279996,-4.5950005 -6.0509996,-4.7760005 zm -8,6 l 0,5.5 m 11,0 l 0,-5" fill="white" strokeWidth="0.5px" stroke="rgb(34, 36, 42)" transform="translate(5,5)" ></path>
                        <path d="m 15,12 m 2.162,1.009 c 0,2.4470005 -2.158,4.4310005 -4.821,4.4310005 -2.66499998,0 -4.822,-1.981 -4.822,-4.4310005 " fill="white" strokeWidth="0.5px" stroke="rgb(34, 36, 42)" transform="translate(5,5)"></path>
                        <path d="m 15,12 m -6.9,-3.80 c 0,0 2.25099998,-2.358 4.27399998,-1.177 2.024,1.181 4.221,1.537 4.124,0.965 -0.098,-0.57 -0.117,-3.79099999 -4.191,-4.13599999 -3.57499998,0.001 -4.20799998,3.36699999 -4.20699998,4.34799999 z" fill="rgb(34, 36, 42)" strokeWidth="0.5px" stroke="rgb(34, 36, 42)" transform="translate(5,5)"></path>
                        <rect stroke={this.props.node.isSelected() ? 'rgb(0,192,255)' : "none"} strokeWidth="4px" width="100%" height="100%" fill="none"></rect>
                    </svg>

                </div>

                <div id={this.props.node.getOptions().name?.replace(/\s+/g, '-').toLowerCase()}
                    style={{
                        left: 0,
                        position: 'absolute',
                        width: this.props.node.width,
                        overflowWrap: "break-word",
                        textAlign: "center"
                    }}>
                    {this.props.node.getOptions().name}
                </div>

                <PortWidget style={{
                    top: -10,
                    left: 14,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["task-port1"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: this.props.node.width - 30,
                            height: 25,
                            zIndex: 10,
                            //background: 'rgba(0, 0, 0, 0.3)',
                        }}></div>
                </PortWidget>
                <PortWidget style={{
                    top: 20,
                    left: -15,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["task-port2"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: 25,
                            height: this.props.node.height - 40,
                            zIndex: 10,
                            //background: 'rgba(0, 0, 0, 0.5)',
                        }}></div>
                </PortWidget>
                <PortWidget style={{
                    top: this.props.node.height - 15,
                    left: 14,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["task-port3"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: this.props.node.width - 30,
                            height: 25,
                            zIndex: 10,
                            // background: 'rgba(0, 0, 0, 0.5)',
                        }}></div>
                </PortWidget>
                <PortWidget style={{
                    top: 20,
                    left: this.props.node.width - 10,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["task-port4"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: 25,
                            height: this.props.node.height - 40,
                            zIndex: 10,
                            // background: 'rgba(0, 0, 0, 0.5)',
                        }}></div>
                </PortWidget>


            </>
        )
    }
}