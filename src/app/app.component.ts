import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordStrength: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength(event: any) {
    const password = event.target.value;
    console.log(password);
    this.passwordStrength = this.calculateStrength(password);
  }

  calculateStrength(password: string): string[] {
    if (password.length === 0) {
      return ['gray', 'gray', 'gray'];
    } else if (password.length < 8) {
      return ['red', 'red', 'red'];
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) {
      return ['green', 'green', 'green'];
    } else if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return ['yellow', 'yellow', 'gray'];
    } else {
      return ['red', 'gray', 'gray'];
    }
  }
}
