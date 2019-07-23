import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Templateform } from '/src/app/templateform';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  templateform : Templateform[];
  obj:any;
  obj1:any;
  
  form:any;

  UserName: any;
  Email: any;
  NickName: any;
  Password: any;



  userfield:any;
  emailfield:any;
  namefield:any;
  passwordfield:any;

  isEditable:boolean = false;

  public formData:any=[];

constructor()
{

}


post()
{ 

 this.obj=
 {
  "userName" : this.UserName,
  "email" : this.Email,
  "nickName" : this.NickName,
  "password" : this.Password

 }
 this.formData.push(this.obj);
console.log(this.obj);
    
}

  onSubmit(form: NgForm) 
  {
    if (form.valid) 
    {
      console.log(form.value);
    }
  }

  delete(index)
  {
    this.formData.splice(index,1);
  }



  

  update()
  {
    var obj1 = 
    {
      "userName":this.userfield,
      "email":this.emailfield,
      "nickName":this.namefield,
      "password":this.passwordfield,
    }
    console.log(this.obj1);
  }


}
