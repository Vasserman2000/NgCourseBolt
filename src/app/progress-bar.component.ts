import { Component } from "@angular/core";

@Component({
    selector: 'app-progress-bar',
    template: `
    <style>.progress { 
        height: 20px;
        width: 20%; 
        background: linear-gradient(90deg, orange 50%, white 0);
        display: inline-block;
        border: 1px solid red;
        vertical-align: bottom;
        border-radius: 4px;
    }
    .progress-bar-status {
        display: inline-block;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        font-size: larger;
    }
    </style>
    
    <div style='display: inline'><span class='progress-bar-status'>Status:&nbsp;</span><div class='progress'></div><span class='progress-bar-status'>&nbsp;{{'15'}}%</span></div>

    `
})

export class ProgressBar {
    title = ''
}