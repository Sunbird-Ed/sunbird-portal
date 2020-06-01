import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateUserComponent } from './create-user.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TelemetryModule, TelemetryService } from '@sunbird/telemetry';
import { CoreModule, FormService, TncService, UserService } from '@sunbird/core';
import {NavigationHelperService, ResourceService, SharedModule, ToasterService} from '@sunbird/shared';
import { Router, ActivatedRoute } from '@angular/router';
import { throwError as observableThrowError, of as observableOf } from 'rxjs';
import { mockRes } from './create-user.component.spec.data';


describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let fixture: ComponentFixture<CreateUserComponent>;
  let router: Router;

  class RouterStub {
    navigate = jasmine.createSpy('navigate');
    snapshot: {
      data: {
        telemetry: {
          env: 'profile', pageid: 'profile', subtype: 'paginate', type: 'view',
          object: { type: '', ver: '1.0' }
        }
      }
    };
  }
  const env = 'profile';
  class ActivatedRouteStub {
    snapshot = {
      root: { firstChild : {data: { telemetry: { env: env} } } },
      data : {
         telemetry: { env: env }
      }
    };
  }

  const resourceBundle = {
    'messages': {
      'fmsg': {
        'm0085': 'There is some technical error',
        'm0004': 'Something went wrong, try later'
      },
      'stmsg': {
        'm0130': 'We are fetching districts',
      },
      'emsg': {
        'm0005': 'Something went wrong, try later'
      },
      'smsg': {
        'm0046': 'Profile updated successfully'
      },
      imsg: {
        m0096: 'Successfully added "{firstName}"'
      }
    },
    'frmelmnts': {
      'lbl': {
        'resentOTP': 'OTP resent'
        }
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule.forRoot(), CoreModule, FormsModule, ReactiveFormsModule,
        HttpClientTestingModule, TelemetryModule],
      declarations: [CreateUserComponent],
      providers: [{ provide: ResourceService, useValue: resourceBundle }, { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide: Router, useClass: RouterStub }, ToasterService, TelemetryService, FormService, TncService, UserService
        , NavigationHelperService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call ngOnInit', () => {
    spyOn(component, 'fetchTncData');
    spyOn(component, 'getFormDetails');
    component.ngOnInit();
    expect(component.instance).toEqual('SUNBIRD');
    expect(component.fetchTncData).toHaveBeenCalled();
    expect(component.getFormDetails).toHaveBeenCalled();
  });

  it('should call getFormDetails with success', () => {
    const formService = TestBed.get(FormService);
    spyOn(formService, 'getFormConfig').and.returnValue(observableOf(mockRes.formData));
    spyOn(component, 'initializeFormFields');
    component.getFormDetails();
    expect(component.formData).toEqual(mockRes.formData);
    expect(component.initializeFormFields).toHaveBeenCalled();
  });

  it('should call getFormDetails with error', () => {
    const formService = TestBed.get(FormService);
    spyOn(formService, 'getFormConfig').and.returnValue(observableThrowError({}));
    const toasterService = TestBed.get(ToasterService);
    spyOn(toasterService, 'error').and.callThrough();
    component.getFormDetails();
    expect(component.showLoader).toBeFalsy();
    expect(toasterService.error).toHaveBeenCalledWith(resourceBundle.messages.emsg.m0005);
  });

  it('should set mode', () => {
    component.showAndHidePopup(false);
    expect(component.showTncPopup).toBeFalsy();
  });

  it('should fetchTncData with success', () => {
    const tncService = TestBed.get(TncService);
    spyOn(tncService, 'getTncConfig').and.returnValue(observableOf(mockRes.tncConfigData));
    spyOn(component['utilService'], 'parseJson').and.returnValue(mockRes.tncParsedConfigData);
    component.fetchTncData();
    expect(component.tncLatestVersion).toEqual('v1');
    expect(component.termsAndConditionLink).toEqual('https://dev-sunbird-temp.azureedge.net/portal/terms-and-conditions-v1.html');
  });

  it('should fetchTncData with error', () => {
    const tncService = TestBed.get(TncService);
    spyOn(tncService, 'getTncConfig').and.returnValue(observableThrowError({}));
    const toasterService = TestBed.get(ToasterService);
    spyOn(toasterService, 'error').and.callThrough();
    component.fetchTncData();
    expect(toasterService.error).toHaveBeenCalledWith(resourceBundle.messages.fmsg.m0004);
  });

  it('should call onSubmitForm with success', () => {
    const userService = TestBed.get(UserService);
    component.userProfile = mockRes.userData;
    component.formData = mockRes.formData;
    spyOn(component, 'enableSubmitButton').and.callThrough();
    component.initializeFormFields();
    component.userDetailsForm.controls['name'].setValue('test');
    spyOn(userService, 'registerUser').and.returnValue(observableOf(mockRes.createUser));
    spyOn(userService, 'acceptTermsAndConditions').and.returnValue(observableOf(mockRes.tncAccept));
    component.onSubmitForm();
    expect(router.navigate).toHaveBeenCalledWith(['/profile/choose-managed-user']);
  });

  it('should call onSubmitForm with error', () => {
    const userService = TestBed.get(UserService);
    const toasterService = TestBed.get(ToasterService);
    component.formData = mockRes.formData;
    spyOn(component, 'enableSubmitButton').and.callThrough();
    component.initializeFormFields();
    spyOn(toasterService, 'error').and.callThrough();
    spyOn(userService, 'registerUser').and.returnValue(observableThrowError({}));
    component.onSubmitForm();
    expect(toasterService.error).toHaveBeenCalledWith(resourceBundle.messages.fmsg.m0085);
  });

  it('should call onSubmitForm with error', () => {
    const userService = TestBed.get(UserService);
    component.formData = mockRes.formData;
    spyOn(component, 'enableSubmitButton').and.callThrough();
    component.initializeFormFields();
    const toasterService = TestBed.get(ToasterService);
    spyOn(toasterService, 'error').and.callThrough();
    spyOn(userService, 'registerUser').and.returnValue(observableThrowError({}));
    component.onSubmitForm();
    expect(toasterService.error).toHaveBeenCalledWith(resourceBundle.messages.fmsg.m0085);
  });

  it('should call onSubmitForm with error', () => {
    component.formData = mockRes.formData;
    spyOn(component, 'enableSubmitButton').and.callThrough();
    component.initializeFormFields();
    expect(component.showLoader).toBeFalsy();
    expect(component.enableSubmitBtn).toBeFalsy();
    expect(component.enableSubmitButton).toHaveBeenCalled();
  });

  it('should redirect to profile page on cancel', () => {
    const navigationHelperService = TestBed.get(NavigationHelperService);
    spyOn(navigationHelperService, 'navigateToPreviousUrl').and.callThrough();
    component.onCancel();
    expect(navigationHelperService.navigateToPreviousUrl).toHaveBeenCalledWith('/profile');
  });

});
