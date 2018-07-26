import { TestBed, async } from '@angular/core/testing';
import { ContactDetailComponent } from './contactDetail.component';
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';

describe('ContactListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactDetailComponent
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
  it('should get the contact detail ', async(() => {
    const fixture = TestBed.createComponent(ContactDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
