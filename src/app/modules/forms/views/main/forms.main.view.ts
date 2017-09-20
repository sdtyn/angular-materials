import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'forms-main-view',
  templateUrl: './forms.main.view.html',
  styleUrls: [ './forms.main.view.css' ]
})
export class FormsMainView {
   title = 'forms-main-view';
   

   @Input('formType') formType :String
   
     nameCtrl:FormControl;
     passwordCtrl2:FormControl;
   
     form : FormGroup;
   
     constructor(private fb: FormBuilder) {}
   
     ngOnInit() {
        this.form = this.fb.group({
          firstname: new FormControl('Sedat', [Validators.required, Validators.minLength(6)]),
          lastname: new FormControl('', this.lastNameValidator),
          languages: new FormControl('')
        });
     }
   
     private onSubmit(user){
       console.log(user);
     }

     lastNameValidator(control){

        if(control.value.length < 3){
            return {'lastname': true};
        }

     }

}
