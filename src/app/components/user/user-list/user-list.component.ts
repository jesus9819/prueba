import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) { }

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
  deleteUser(user: User): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(user.id).then(
        () => {
          console.log('User deleted successfully.');
          this.loadUsers();
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }
  updateUser(user: User): void {
    const updatedUser: User = {
      // Create an updated user object with new values
      id: user.id,
      nombres: '',
      apellidos: '',
      fechaNacimiento: '',
      email: '',
      numeroDocumento: '',
      salario: 0,
      estado: ''
    };
    this.userService.updateUser(user.id, updatedUser).then(
      () => {
        console.log('User updated successfully.');
        this.loadUsers();
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
}
}
