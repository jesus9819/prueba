import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numeroDocumento: ['', Validators.required],
      salario: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      estado: ['Activo']
    });
  }
  ngOnInit(): void {}

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;
      this.userService.createUser(user)
        .then(() => {
          console.log('Usuario creado exitosamente.');
          this.userForm.reset();
        })
        .catch(error => {
          console.error('Error al crear usuario:', error);
        });
    }
  }
}
