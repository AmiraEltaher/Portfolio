import { Component } from '@angular/core';
import { FormGroup,FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
    name   : new FormControl ('', Validators.required),
    email  : new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  });

  isSubmitted = false;

  ngOnInit(){
     this.contactForm.valueChanges.subscribe(() => {
  this.isSubmitted = false;
});
  }
   onSubmit(){
    if (this.contactForm.valid){
            console.log(this.contactForm.value);
            this.isSubmitted =true;
            this.contactForm.reset({emitEvent:false});

    }
    else{
      this.contactForm.markAllAsTouched();
    }

   }

}
