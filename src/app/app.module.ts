import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule, // Ensure CommonModule is imported
    RouterModule.forRoot([]), // Ensure RouterModule is imported
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
