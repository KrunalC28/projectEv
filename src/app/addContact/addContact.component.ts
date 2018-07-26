import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'addContact',
    templateUrl: './addContact.component.html',
    styleUrls: ['./addContact.component.css']
})
export class AddContactComponent {
    public contactForm: FormGroup;
    public contact: Contact;
    public emailPattern = "[^@\s]+@[^@\s]+\.[^@\s]+";

    constructor(
        private fb: FormBuilder,
        private contactService: ContactService
    ) {

        this.contactForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            phone: [ , [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            status: ['Select a Status', Validators.required],
        });
    }

    public register() {
        let cont = Object.assign({}, this.contact, this.contactForm.value);
        this.contactService.addContact(cont).subscribe(
            (data) => {
                console.log(data);
                this.contactForm.reset();
            },
            (err) => { console.log(err); }
        );
    }
}