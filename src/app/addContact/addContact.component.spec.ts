import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { AddContactComponent } from './addContact.component';
import { ContactService } from '../services/contact.service'

describe('AddContactComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                ReactiveFormsModule
            ],
            declarations: [
                AddContactComponent
            ],
            providers: [
                { provide: ContactService }
            ]
        }).compileComponents();
    }));
    it('should create add contact component', async(() => {
        const fixture = TestBed.createComponent(AddContactComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
