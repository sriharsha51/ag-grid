import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { IJuror } from '../../interfaces/interfaces';
import { FormGroup } from '@angular/forms/src/model';
import { GridOptions } from 'ag-grid/main';
import { BlueComponentComponent } from '../blue-component/blue-component.component';
import { TypeaheadEditorComponent } from '../typeahead/typeahead-editor.component';


@Component({
  selector: 'app-jurors-data',
  templateUrl: './jurors-data.component.html',
  styleUrls: ['./jurors-data.component.css']
})
export class JurorsDataComponent implements OnInit {
  
  gridOptions: GridOptions;
  columnDefs: any[];
  rowData: any[];

  jurors: IJuror[];
  _jurorFilter: string;
  filteredJurors: IJuror[];
  showFilteredBy: boolean;
  errorMessage: string;

  gridApi;
  gridColumnApi;
  defaultColDef;
  components;
  editType;

  constructor(private _dataService: DataService) {
    this.gridOptions = <GridOptions>{};

    this.gridOptions.getRowStyle = function(params) {
      if (params.node.rowIndex % 2 === 0) {
          return { background: '#4E5D6C' }
      }
    }
    
    this.columnDefs = [
      { headerName: "Juror Id", field: "jurorId", editable: true},
      { headerName: "First Name", field: "firstName",
      editable:true,
      cellEditorFramework: TypeaheadEditorComponent},
      { headerName: "LastName", field: "lastName"},
      { headerName: "Gender", 
      field: "gender", 
      editable: true,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["male", "female"]
        }
      },
      { headerName: "Email", field: "email", editable: true},
      { headerName: "Address", field: "address", editable: false}
    ];

    // this.defaultColDef = {
    //   editable: true,
    //   width: 100
    // };

    this._dataService.getJurors().subscribe(data => {
      this.rowData = data;
      this.jurors = data;
      this.filteredJurors = this.jurors; // we are using filteredJurors array to filter, so that we dont lose the actual jurors data.
    },
    error => this.errorMessage = <any>error);
    console.log(this.jurors);

  }

  ngOnInit(): void {

  }

  onGridReady(params) {
    params.api.sizeColumnsToFit();

    // this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
    // this._dataService.getJurors().subscribe(data => {
    //   params.api.setRowData(data);
    // })
  }

  // selectAllRows() {
  //   this.gridOptions.api.selectAll();
  // }

}  

// get jurorFilter(): string { // we are using getter and setter to dynamically search the jurors data as the user enters the value.
//   return this._jurorFilter;
// }
// set jurorFilter(value: string) {
//   this._jurorFilter = value;
//   this.showFilteredBy = this.jurorFilter ? true : false;
//   this.filteredJurors = this.jurorFilter ? this.filter(this.jurorFilter) : this.jurors; 
// }

// filter(filterBy): IJuror[] {
// filterBy = filterBy.toLocaleLowerCase();
// return this.jurors.filter((juror) =>
//      juror.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
// }



// import {Component} from "@angular/core";
// import {BlueComponentComponent} from "../red-component/red-component.component";

// import {GridOptions} from "ag-grid/main";
// import { HttpModule, Http , Response } from "@angular/http";
// import { HttpClient } from "@angular/common/http";


// @Component({
//   selector: 'app-jurors-data',
//   templateUrl: './jurors-data.component.html',
//   styleUrls: ['./jurors-data.component.css']
// })
// export class JurorsDataComponent {
//     gridOptions: GridOptions;
//     columnDefs: any[]
//     rowData;

//     constructor(_http: HttpClient) {
//         this.gridOptions = <GridOptions>{};

//     this.columnDefs = [
//       { headerName: "Juror Id", field: "jurorId"},
//       { headerName: "First Name", field: "firstName"},
//       { headerName: "Middle Name", field: "middleName"},
//       { headerName: "LastName", field: "lastName"},
//       { headerName: "Email", field: "email"},
//       { headerName: "Address", field: "address"}
//     ];

//         this._http.get('../../assets/api/jurors/jurors.json').subscribe((data) => {
//             console.log(data);
//             this.rowData = data;
//         });
  
//         // this.rowData = [
//         //     {make: "Toyota", model: "Celica", price: 35000},
//         //     {make: "Ford", model: "Mondeo", price: 32000},
//         //     {make: "Porsche", model: "Boxter", price: 72000}
//         // ]
//     }

//     onGridReady(params) {
//         params.api.sizeColumnsToFit();
//     }

//     selectAllRows() {
//         this.gridOptions.api.selectAll();
//     }
// }



