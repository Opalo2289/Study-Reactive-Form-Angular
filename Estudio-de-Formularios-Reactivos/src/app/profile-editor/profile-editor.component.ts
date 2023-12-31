import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

  constructor(private fb: FormBuilder) { }

  profileForm = this.fb.group({

    name: this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
    }),

    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),

    aliases: this.fb.array([
      this.fb.control('')
    ])
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      name: {
        firstName: 'Nancy',
      },
      address: {
        street: '123 drew Street'
      }
    })
  }

  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

}
