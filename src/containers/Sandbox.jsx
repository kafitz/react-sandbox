import React, { Component, PropTypes } from 'react'


export class Sandbox extends Component {
    static propTypes: {}

    static contextTypes: {
        router: PropTypes.object
    }

    render() {
        return(
            <section className="app-root">
                <p>Hello world!</p>
                {this.props.children}
            </section>
        )
    }
}