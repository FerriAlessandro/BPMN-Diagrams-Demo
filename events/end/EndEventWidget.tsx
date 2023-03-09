import { DiagramEngine, PortWidget } from "@projectstorm/react-diagrams";
import { EndEventModel } from "./EndEventModel";
import React from "react";

export interface EndEventWidgetProps {
    node: EndEventModel,
    engine: DiagramEngine
}

export class EndEventWidget extends React.Component<EndEventWidgetProps>{

    counter: number = 0;

    render(): React.ReactNode {
        return (
            <>
                <div
                    className="end-event"
                    style={{
                        position: 'relative',
                        width: this.props.node.width,
                        height: this.props.node.height,
                        //borderRadius: '50%',
                        //background: 'rgb(0,0,255)',
                        zIndex: '1',


                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 55 55">
                        <circle className="end-event-shape" cx="27" cy="27" r="23" strokeWidth="7px" fillOpacity="0.95"></circle>
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
                    top: this.props.node.width / 2 - 12.5,
                    left: -12.5,
                    position: 'absolute',
                }}
                    port={this.props.node.getPorts()["end-port"]}
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