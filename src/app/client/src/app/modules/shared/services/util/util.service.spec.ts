import { TestBed, inject } from '@angular/core/testing';
import {servicemockRes} from './util.service.spec.data';
import { UtilService } from './util.service';

describe('UtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilService]
    });
  });

  it('should be created', inject([UtilService], (service: UtilService) => {
    expect(service).toBeTruthy();
  }));
  it('should call manipulateSoftConstraint when filter present',
    inject([UtilService], (service: UtilService) => {
      const softConstraintData = {
        filters: {channel: 'b00bc992ef25f1a9a8d63291e20efc8d',
        board: ['NCERT']},
        softConstraints: { badgeAssertions: 98, board: 99, channel: 100 },
        mode: 'soft'
      };
      const userFrameworkData = {
        board: ['CBSE']
      };
      const filter =  true;
      const softconstraintsdata = service.manipulateSoftConstraint(filter, softConstraintData, userFrameworkData);
      expect(service.manipulateSoftConstraint).toBeDefined();
      expect(softconstraintsdata).toBeFalsy();
    }));

  it('should call manipulateSoftConstraint when filters are not present and userFrameworkData is present',
    inject([UtilService], (service: UtilService) => {
      const softConstraintData = {
        filters: {channel: 'b00bc992ef25f1a9a8d63291e20efc8d',
        board: ['NCERT']},
        softConstraints: { badgeAssertions: 98, board: 99, channel: 100 },
        mode: 'soft'
      };
      const userFrameworkData = {
        board: ['CBSE']
      };
      const filter = undefined;
      const softconstraintsdata = service.manipulateSoftConstraint(filter, softConstraintData, userFrameworkData);
      expect(service.manipulateSoftConstraint).toBeDefined();
      expect(softconstraintsdata).toEqual({filters: userFrameworkData , mode: 'soft'});
    }));

  it('should call translateLabels ',
    inject([UtilService], (service: UtilService) => {
      const data = service.translateLabel(servicemockRes.formData, 'hi');
      expect(service.translateLabel).toBeDefined();
      expect(data.label).toEqual('Board/Syllabus');
    }));
  it('should call translateValues',
    inject([UtilService], (service: UtilService) => {
      const data = service.translateValues(servicemockRes.formData.range, 'hi');
      expect(service.translateValues).toBeDefined();
    }));
  it('should call convertSelectedOption',
    inject([UtilService], (service: UtilService) => {
      const selectedOption = { board: ['CBSE'] };
      const data = service.convertSelectedOption(selectedOption, servicemockRes.formData, 'en', 'hi');
      expect(service.convertSelectedOption).toBeDefined();
      expect(data).toEqual({board: ['CBSE']});
    }));
});
