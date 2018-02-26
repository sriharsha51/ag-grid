import {Component, ViewContainerRef, ViewChild, ViewEncapsulation} from "@angular/core";
import {AgEditorComponent} from "ag-grid-angular/main";

@Component({
    selector: 'fruit-cell',
    styleUrls: ['./typeahead.css'],
    encapsulation: ViewEncapsulation.None,
    template: `
      <typeahead
        #typeahead
        [(ngModel)]="selectedfirstName"
        [list]="firstNames"
        [searchProperty]="'searchText'" [displayProperty]="'name'"
        [maxSuggestions]="2"
        (suggestionSelected)="firstNameSelected($event)"
        placeholder="">
      </typeahead>`
})
export class TypeaheadEditorComponent implements AgEditorComponent {

    @ViewChild('typeahead', {read: ViewContainerRef}) public container;

    private params: any;
    selectedfirstName;
    firstName: string;
    firstNames: any[] = [
        {
            id: 1,
            name: "Ines",
            searchText: "ines"
        },
        {
            id: 2,
            name: "Brooke",
            searchText: "brooke"
        },
        {
            id: 3,
            name: "Jody",
            searchText: "jody"
        },
        {
            id: 4,
            name: "Webb",
            searchText: "webb"
        },        
        {
            id: 5,
            name: "Diana",
            searchText: "diana"
        }
    ];

    agInit(params: any): void {
        this.params = params;
    }

    getValue(): any {
        return this.firstName;
    }

    isPopup() : boolean {
        return true;
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.container.element.nativeElement.querySelector('.typeahead-input').focus();
        })
    }

    public firstNameSelected(value) {
        this.firstName = value ? value.name : 'none';
    }
}