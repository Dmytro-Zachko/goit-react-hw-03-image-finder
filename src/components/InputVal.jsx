import React, { Component } from "react";

export class InpuVal extends Component {
    componentDidUpdate(Prevprops, PrevState) {
    if (Prevprops.query !== this.props.query) {
        console.log('Prevprops.query', Prevprops.query)
         console.log('this.props.query', this.props.query)
    }
}

    render() {
        return (
            <div> {this.props.InpuVal} </div>
        )
    }
}