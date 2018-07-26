import { TestBed, async } from '@angular/core/testing';
import { ContactListComponent } from './contactList.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
describe('ContactListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactListComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ContactService }
      ]
    }).compileComponents();
  }));
  it('should create the contact list components', async(() => {
    const fixture = TestBed.createComponent(ContactListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
