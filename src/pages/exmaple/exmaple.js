import React, { Component } from 'react';
import "regenerator-runtime/runtime";
import '../../forti-components/bundle.js';
import './example.less'

export default class Example extends Component {
    render() {
        return (
            <div>
                <fi-ui-header>
                    <section>
                        <span className="ffg ffg-fortinet-grid"></span>
                    </section>
                </fi-ui-header>
                <div style={{ display: "flex"}}>
                    <fi-ui-sider>
                        <fi-ui-menu>
                            <fi-ui-menu-item active>Item 1</fi-ui-menu-item>
                            <fi-ui-sub-menu>
                                <span slot="title">
                                    <span className="ffg ffg-traffic"></span> Menu Title
          </span>
                                <fi-ui-menu-item> Menu Item 2</fi-ui-menu-item>
                                <fi-ui-menu-item> Menu Item 3</fi-ui-menu-item>
                                <fi-ui-menu-item> Menu Item 4</fi-ui-menu-item>
                            </fi-ui-sub-menu>
                            <fi-ui-menu-item>Item 5</fi-ui-menu-item>
                            <fi-ui-menu-item>Item 6</fi-ui-menu-item>
                            <fi-ui-menu-item>Item 7</fi-ui-menu-item>
                        </fi-ui-menu>
                    </fi-ui-sider>
                    <section>
                        <div>
                            <h1>Content here</h1>
                            <fi-ui-switch label="Switch" checked></fi-ui-switch>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}