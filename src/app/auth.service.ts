import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: any; // Replace 'any' with your user model interface or type

  constructor() {
    // Initialize the loggedInUser from storage or session
    this.loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  }

  login(email: string, password: string): void {
    // Implement your login logic here
    // Upon successful login, set the logged-in user's details
    const user = {
      email: email,
      // Other user details
    };
    this.loggedInUser = user;
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  logout(): void {
    // Implement your logout logic here
    // Clear the logged-in user's details
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
  }

  isLoggedIn(): boolean {
    // Check if the user is logged in
    return !!this.loggedInUser;
  }

  getLoggedInUserEmail(): string {
    // Return the logged-in user's email
    return this.loggedInUser ? this.loggedInUser.email : '';
  }
}
