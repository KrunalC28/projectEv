import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONTACTS } from '../shared/data';
import { Contact } from '../shared/contact'
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ContactService {

  private contactUrl = 'api/contacts'; //WebApi URL

  constructor(
    private http: HttpClient) { }
  
  public getContacts() {
    return Observable.of(CONTACTS);
    // return this.http.get<Contact[]>(this.contactUrl)
    // .map((res) => res);
  }

  public getContact(id: any) {
    let contact = CONTACTS.find( i => i.id === id);
    console.log(contact);
    return Observable.of(contact);
    // return this.http.get<Contact[]>(this.contactUrl)
    // .map((res) => res);
  }

  public addContact(contact: any) {
    let len = CONTACTS.length;
    contact['id'] = CONTACTS[len - 1]['id'] + 1;
    CONTACTS.push(contact);
    return Observable.of(CONTACTS);
    // return this.http.post<Contact[]>(this.contactUrl, contact)
    // .map((res) => res);
  }

  public updateContact(contact: any) {
    let index = CONTACTS.findIndex( i => i.id === contact.id);
    CONTACTS[index] = contact;
    return Observable.of(CONTACTS);
    // return this.http.post<Contact[]>(this.contactUrl, contact)
    // .map((res) => res);
  }

  public deleteContact(id: any) {
    let newContacts = CONTACTS.filter((contact) => contact.id !== id);
    return Observable.of(newContacts);
    // return this.http.delete<Contact[]>(this.contactUrl, id)
    // .map((res) => res);
  }
}