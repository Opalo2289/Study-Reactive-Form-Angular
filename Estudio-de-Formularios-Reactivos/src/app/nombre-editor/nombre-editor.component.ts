import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-nombre-editor',
  templateUrl: './nombre-editor.component.html',
  styleUrls: ['./nombre-editor.component.css']
})
export class NombreEditorComponent {

  name = new FormControl('');

  updateName() {
    this.name.setValue('Nancy')
  }


}
