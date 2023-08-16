import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AreaService } from '../../../services/area.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css']
})
export class AreaFormComponent implements OnInit {
  areaForm: FormGroup;
  users: User[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private areaService: AreaService,
    private userService: UserService
  ) {
    this.areaForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      lider: ['', Validators.required],
      estado: ['Activo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().then(
      (users: User[]) => {
        this.users = users;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.areaForm.valid) {
      const newArea = this.areaForm.value;
      this.areaService.createArea(newArea).then(
        () => {
          console.log('Area created successfully.');
          // Reset form
          this.areaForm.reset();
        },
        (error) => {
          console.error('Error creating area:', error);
        }
      );
    }
  }
}
