import React, { Component } from 'react'
import './camera-view.css'
import { Settings, MenuOpen, FiberManualRecord, VideoCall } from '@material-ui/icons';
import {Button} from '@material-ui/core';
class CameraView extends Component {
    render() {
        return (
            <div className="container">
                <div className="camera-bar">
                        <Button>
                            <MenuOpen className="menu-icon"/>
                        </Button>

                        <span className="btns">
                            <Button variant="outlined">
                            <FiberManualRecord className="active-icon"/>
                            </Button>
                            <Button variant="outlined">
                            <Settings className=""/>
                            </Button>
                            <Button variant="outlined">
                            <VideoCall />
                            </Button>
                            <Button variant="outlined"><span className="upload-btn">Upload Video</span></Button>
                        </span>
                </div>

                <div class="camera-view-container">
                    <div class="camera-view-content">
                        Camera View
        </div>
                </div>
            </div>
        );
    }
}

export default CameraView