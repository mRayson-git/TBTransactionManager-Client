import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Reply } from '../../shared/models/reply';

import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [''],
      email: [''],
      password: [''],
      cpassword: [''],
    });
  }

  submit(): void {
    const user: User = {
      username: this.registerForm.get('username').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
    }
    this.us.registerUser(user);
    this.registerForm.reset();
  }

}
