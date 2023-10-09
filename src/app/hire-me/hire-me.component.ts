import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css']
})
export class HireMeComponent {

  contactError:string = '';
  constructor(private fb:FormBuilder, private api:ApiService){}

    contactmeForm = this.fb.group({
      name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      email:['',Validators.required],
      message:['',Validators.required]
    })
    //form control passed to html form
    contact(){
      if(this.contactmeForm.valid){
        console.log(this.contactmeForm.value);
        let name = this.contactmeForm.value.name
        let email = this.contactmeForm.value.email
        let message = this.contactmeForm.value.message
        this.api.contactFn(name,email,message).subscribe((response:any)=>{
          console.log(response);//message
          alert(response.message)
        },
        (response:any)=>{
          this.contactError=response.error.message
          alert(response.error.message)
          
        }
        )
        
      }else{
        alert("invalid details entered")
      }
      
     
    }

}
