import { Component, ElementRef, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  constructor(private elRef: ElementRef) {}

  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  scrollToSection(section: string): void {
    const element = this.elRef.nativeElement.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
      console.log('Form Submitted!', form.value.name);
      form.resetForm();

    }
  }

}