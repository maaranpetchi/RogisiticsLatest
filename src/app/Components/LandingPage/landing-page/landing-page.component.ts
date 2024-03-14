import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  @ViewChild('scriptElement', { static: true }) scriptElement: ElementRef | undefined;

  constructor(private elRef: ElementRef, private route: Router) { }

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
      // Send email using SMTPJS
      emailjs.init('5cYgjfhsJVzlkDYdF')
      emailjs.send("service_q9prn92", "template_wn4geiw", {
        name: form.value.name,
        company: form.value.company,
        website: form.value.website,
        message: form.value.message,
      });

      Swal.fire({
        title: "Done!",
        text: "Send Email Successfully!",
        icon: "success"
      }).then((res) => {
        if (res.isConfirmed) {
          form.reset();
        }
      });
    }
  }

  navigatetoTerms() {
    const url = '/Rowgistic/TermsAndCondition';
    window.open(this.route.serializeUrl(this.route.createUrlTree([url])), '_blank');
  }



}