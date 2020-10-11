import React, { Component } from 'react';
import Header from './Header';
import Meta from "./Meta";
import styled from "styled-components";


const MyButton = styled.button`
  background: red;
  font-size: ${props => (props.huge ? '100px' : '20px')};
  .fire {
    font-size: 50px;
  }  
`
const BigPoop = styled.span`
  font-size: 50px;
`
class Page extends Component {
    render () {
        return (
            <div>
                <Meta />
                <Header />
                <MyButton huge >Click me! <span className="fire">fire</span></MyButton>
                <MyButton>Click me! <BigPoop>:fire:</BigPoop></MyButton>
                { this.props.children }
            </div>
        )
    }
}

export default Page;