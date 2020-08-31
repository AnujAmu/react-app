import React, { Component } from 'react'
import './camera-view.css'
import { Settings, MenuOpen, FiberManualRecord, VideoCall } from '@material-ui/icons';
import {Button} from '@material-ui/core';
class CameraView extends Component {
    render() {
        return (
            <div>
                <div fxLayoutAlign="space-between">
                    <div>
                        <button mat-icon-button>
                            <MenuOpen />
                        </button>
                    </div>
                    <div fxLayoutGap="5px" fxLayoutAlign="end">
                        <Button variant="outlined">
                        <FiberManualRecord className="active-icon"/>
                        </Button>
                        <Button variant="outlined">
                        <Settings />
                        </Button>
                        <Button variant="outlined">
                        <VideoCall />
                        </Button>
                        <Button variant="outlined">Upload Video</Button>
                    </div>
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