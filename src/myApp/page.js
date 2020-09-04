import React, { Component } from 'react'
import { AssignmentReturnedOutlined, RefreshTwoTone } from '@material-ui/icons';
import { Menu } from '@material-ui/icons';
import { Button, Divider } from '@material-ui/core';
import CameraView from './camera-view'
import FacesContainer from './faces-container'
import './page.css'

class Page extends Component {
    render() {
        return (
            <div>
                <div class="toolbar">
                    <span className="title">AppsStore.ai</span>
                    <span className="menu-btn">
                    <Button>
                        <Menu className="menu-icon" />
                    </Button>
                    </span>
                    
                </div>
                <div className="divider">
                <Divider></Divider>
                </div>
                <div>
                    <CameraView />
                    <FacesContainer />
                </div>
            </div>
        );
    }
}

export default Page