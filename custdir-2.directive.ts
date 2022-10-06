import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustdir2]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting: Custdir2Directive,
    multi:true

  }]
})
export class Custdir2Directive implements Validator{

  constructor() { }
  @Input() Custdir2:string;
  validate(confirmPasswordField: AbstractControl): {[ key:string]:any} | null {
       const passwordfield= confirmPasswordField.parent.get(this.Custdir2);
       if(passwordfield && passwordfield.value !== confirmPasswordField.value)
       {
         return {'notEqual':true}
       }
       return null;
    }
}