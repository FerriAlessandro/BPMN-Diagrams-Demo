import { DiagramEngine, PortWidget } from "@projectstorm/react-diagrams";
import { AndGatewayModel } from "./AndGatewayModel";
import React from "react";

export interface AndGatewayWidgetProps {
    node: AndGatewayModel,
    engine: DiagramEngine
}

export class AndGatewayWidget extends React.Component<AndGatewayWidgetProps>{



    render(): React.ReactNode {
        return (
            <>
                <div
                    className="and-gateway"
                    style={{
                        position: 'relative',
                        width: this.props.node.width,
                        height: this.props.node.height,
                        zIndex: 1,
                        //background: 'rgb(255, 0, 0)'
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 50 50">
                        <polygon className="and-gateway-shape" points="25,0 50,25 25,50 0,25" stroke="rgb(34, 36, 42)" strokeWidth="2px" fillOpacity="0.95"></polygon>
                        <path className="and-gateway-shape-plus" d="m 23,10 0,12.5 -12.5,0 0,5 12.5,0 0,12.5 5,0 0,-12.5 12.5,0 0,-5 -12.5,0 0,-12.5 -5,0 z" strokeWidth="1px" stroke="rgb(34, 36, 42)"></path>
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
                    top: -12.5,
                    left: this.props.node.width / 2 - 12.5,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["and-port1"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: 25,
                            height: 25,
                            zIndex: 10,
                            //background: 'rgba(0, 0, 0, 0.5)',
                        }}></div>
                </PortWidget>
                <PortWidget style={{
                    top: this.props.node.width / 2 - 12.5,
                    left: -12.5,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["and-port2"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: 25,
                            height: 25,
                            zIndex: 10,
                            //background: 'rgba(0, 0, 0, 0.5)',
                        }}></div>
                </PortWidget>
                <PortWidget style={{
                    top: this.props.node.width - 12.5,
                    left: this.props.node.width / 2 - 12.5,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["and-port3"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: 25,
                            height: 25,
                            zIndex: 10,
                            // background: 'rgba(0, 0, 0, 0.5)',
                        }}></div>
                </PortWidget>
                <PortWidget style={{
                    top: this.props.node.width / 2 - 12.5,
                    left: this.props.node.width - 12.5,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["and-port4"]}
                    engine={this.props.engine}>
                    <div
                        style={{
                            width: 25,
                            height: 25,
                            zIndex: 10,
                            //background: 'rgba(0, 0, 0, 0.5)',
                        }}></div>
                </PortWidget>
            </>
        )
    }
}