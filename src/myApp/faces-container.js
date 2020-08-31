import React, { Component } from 'react'
import { AssignmentReturnedOutlined, RefreshTwoTone } from '@material-ui/icons';
import { Select, MenuItem } from '@material-ui/core';

class FacesContainer extends Component {
    render() {
        return (
            <div class="container">
                <div>
                    <span>Date Range</span>
                    <span class="filter-text">Filter</span>
                </div>
                <div fxLayoutGap="2px" fxLayoutAlign="start">
                    <Select labelId="label" id="select" value="20" variant="outlined">
                        <MenuItem value="10">Today</MenuItem>
                        <MenuItem value="20">27/05/11</MenuItem>
                    </Select>
                    <select matNativeControl class="dropdown">
                        <option value="3" selected>All detections</option>
                        <option value="4">Some detections</option>
                    </select>
                    <button class="btn">
                        <RefreshTwoTone />
                    </button>

                    <AssignmentReturnedOutlined />

                </div>
                <mat-divider></mat-divider>
                {/* <div>
        <mat-grid-list cols="{{cols | async}}" gutterSize="5px" rowHeight="160px">
            <mat-grid-tile *ngFor="let tile of tiles" [colspan]="colspan" [rowspan]="rowspan">
                <div class="image-box">
                    {{tile.title}}
                </div>
            </mat-grid-tile>
        </mat-grid-list>
    </div> */}
            </div>
        );
    }
}

export default FacesContainer