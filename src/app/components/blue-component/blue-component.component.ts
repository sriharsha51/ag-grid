import {Component} from "@angular/core";

@Component({
    templateUrl: './blue-component.component.html'
})
export class BlueComponentComponent {
    private params: any;

    agInit(params: any): void {
        this.params = params;
    }
}
