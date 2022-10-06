import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passw',
  templateUrl: './passw.component.html',
  styleUrls: ['./passw.component.css']
})
export class PasswComponent implements OnInit {

  myReactiveForm: FormGroup;
  submitted: boolean = false;
  data: boolean = false;
  constructor(private formBuilder: FormBuilder) {
    this.myReactiveForm = this.formBuilder.group({
      username: new FormControl(null, [Validators.required]),

      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmpassword: new FormControl('', [Validators.required])

    },
      {
        validators: this.MustMatch('password', 'confirmpassword')
      })
  }


  ngOnInit() {
  }

get find() {
  return this.myReactiveForm.controls
}
MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.MustMatch) {
      return
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ MustMatch: true });
    }
    else {
      matchingControl.setErrors(null);
    }

  }
}
  show() {
    this.data = true;
  }
  onSubmit() {
    this.submitted = true;

    if (this.myReactiveForm.invalid) {
      return;
    
    }
    console.log(this.myReactiveForm.value);
  }

}



