import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../shared/contact';

@Component({
    selector: 'contactDetail',
    templateUrl: './contactDetail.component.html',
    styleUrls: ['./contactDetail.component.css']
})
export class ContactDetailComponent implements OnInit {
    public contact: Contact;
    public contactForm: FormGroup;
    public emailPattern = '[^@\s]+@[^@\s]+\.[^@\s]+';
    constructor(
        private fb: FormBuilder,
        private contactService: ContactService,
        private router: Router,
        private route: ActivatedRoute) { }

    public ngOnInit() {
        this.getContact();
    }

    public getContact(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.contactService.getContact(id).subscribe(
            (contact) => {
                this.contact = contact;
                this.contactForm = this.fb.group({
                    firstName: [this.contact.firstName, Validators.required],
                    lastName: [this.contact.lastName, Validators.required],
                    email: [this.contact.email, [Validators.required, Validators.pattern(this.emailPattern)]],
                    phone: [this.contact.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
                    status: [this.contact.status, Validators.required],
                });
            },
            (err) => {
                console.log(err);
            }
        )
    }

    public update() {
        let cont = Object.assign({}, this.contact, this.contactForm.value);
        this.contactService.updateContact(cont).subscribe(
            (data) => {
                this.router.navigate(['contacts']);
            },
            (err) => { console.log(err); }
        );
    }
}