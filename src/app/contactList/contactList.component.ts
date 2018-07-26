import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../shared/contact';
@Component({
    selector: 'contactList',
    templateUrl: './contactList.component.html',
    styleUrls: ['./contactList.component.css']
})
export class ContactListComponent implements OnInit {
    public contacts: Contact[] = [];
    public isDeleteFirst: boolean = false;
    public deleteContact: Contact;
    constructor(private contactService: ContactService) { }

    public ngOnInit() {
        this.getContacts();
    }

    public getContacts(): void {
        this.contactService.getContacts().subscribe(
            (contacts) => {
                this.contacts = contacts;
            },
            (err) => {
                console.log(err);
            }
        )
    }

    public delete(contact) {
        this.isDeleteFirst = true;
        this.deleteContact = contact;
    }

    public confirmDelete() {
        this.contactService.deleteContact(this.deleteContact.id).subscribe(
            (data) => { 
                this.isDeleteFirst = false;
                this.deleteContact = undefined;
                this.contacts = data;
             },
            (err) => { console.log(err); }
        );
    }

    public cancelDelete() {
        this.isDeleteFirst = false;
        this.deleteContact = undefined;
    }
}