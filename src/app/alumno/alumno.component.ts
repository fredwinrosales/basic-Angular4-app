/**
 * Created by fredwinrosales on 6/26/17.
 */

import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-alumno',
    template: `
        <h1>{{title}}</h1>
        <p>{{list_items}}</p>
        <p>{{test_uno}}</p>
    `
})

export class AlumnoComponent {
    public title : string;
    public list_items : string;
    @Input() test_uno : string;

    constructor(){
       this. title = 'Lista de alumnos';
       this.list_items = 'Fredwin, Youseli, Freddy, Maria y Julia';
    }
}