import React, { Component } from 'react'
import { AssignmentReturnedOutlined, RefreshTwoTone } from '@material-ui/icons';
import { Select, MenuItem, Divider, Button } from '@material-ui/core';
import './faces-container.css';
import ImagesContainer from './images-container';

class FacesContainer extends Component {
    render() {
        return (
            <div class="container">
                <div className="select-labels">
                    <span>Date Range</span>
                    <span class="filter-text">Filter</span>
                </div>
                <div fxLayoutGap="2px" fxLayoutAlign="start">
                    <Select value="10" variant="outlined" className="dropdown">
                        <MenuItem value="10">Today</MenuItem>
                        <MenuItem value="20">27/05/11</MenuItem>
                    </Select>
                    <Select value="10" variant="outlined" className="dropdown">
                        <MenuItem value="10">All detections</MenuItem>
                        <MenuItem value="20">Some detections</MenuItem>
                    </Select>

                    <Button variant="outlined">
                        <RefreshTwoTone />
                    </Button>

                    <Button variant="outlined">
                        <AssignmentReturnedOutlined />
                    </Button>


                </div>
                <div className="divider">
                <Divider></Divider>
                </div>

                {/* <div>
                    <ImagesContainer />
                </div> */}

            </div>
        );
    }
}

export default FacesContainer