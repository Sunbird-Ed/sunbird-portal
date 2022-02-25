
import {of as observableOf,  Observable } from 'rxjs';
import { TelemetryEndDirective } from './telemetry-end.directive';
import { IEndEventInput } from '../../interfaces';
import { TelemetryService, TELEMETRY_PROVIDER } from '../../services';
import {TestBed, ComponentFixture} from '@angular/core/testing';
import { configureTestSuite } from '@sunbird/test-util';
import {eventData} from './telemetry-end.directive.spec.data';
describe('TelemetryStartDirective', () => {
  configureTestSuite();
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelemetryEndDirective],
      providers: [TelemetryService, { provide: TELEMETRY_PROVIDER, useValue: EkTelemetry}]
    });
  });
  it('should take input and generate the telemetry end event ', () => {
    const telemetryService= <any> TestBed.inject(TelemetryService);
    const directive = new TelemetryEndDirective( telemetryService);
    spyOn(telemetryService, 'end').and.callFake(() => observableOf(eventData.inputData));
    directive.appTelemetryEnd = eventData.inputData;
    directive.ngOnDestroy();
    expect(directive.appTelemetryEnd).toBeDefined();
    expect(directive.appTelemetryEnd).toBe(eventData.inputData);
    expect(telemetryService.end).toHaveBeenCalled();
  });
});
