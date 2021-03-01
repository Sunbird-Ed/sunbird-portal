
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FilterComponent } from './filter.component';
import { mockChartData } from './filter.component.spec.data';
import { SuiModule } from 'ng2-semantic-ui';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { TelemetryModule } from '@sunbird/telemetry';
import { CoreModule } from '@sunbird/core';
import { configureTestSuite } from '@sunbird/test-util';
import { ActivatedRoute } from '@angular/router';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

import { of } from 'rxjs';
import { ResourceService } from '@sunbird/shared';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;
  const resourceServiceMockData = {
    messages: {
      imsg: {
        reportSummaryAdded: 'Summary Added Successfully',
        reportPublished: 'Report Published Successfully',
        reportRetired: 'Report Retired Successfully',
        confirmReportPublish: 'Are you sure you want to publish the report ?',
        confirmRetirePublish: 'Are you sure you want to retire the report ?'
      },
      emsg: {
        m0076: 'No data available to download ',
        m0005: 'Something went wrong, try later'
      },
      stmsg: {
        m0131: 'Could not find any reports',
        m0144: 'You do not have appropriate rights to access this page.'
      }
    },
    frmelmnts: {
      btn: {
        tryagain: 'tryagain',
        close: 'close'
      },
      lbl: {
        reportSummary: 'Report Summary'
      }
    },
    languageSelected$: of({})
  };
  configureTestSuite();
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [SuiModule, ReactiveFormsModule, TelemetryModule.forRoot(), CoreModule, NgxDaterangepickerMd.forRoot()],
      // providers:[ResourceService]
      providers: [{ provide: ResourceService, useValue: resourceServiceMockData },
      {
        provide: ActivatedRoute, useValue: {
          snapshot: {
            params: {
              reportId: '123'
            },
            data: {
              telemetry: { env: 'dashboard', pageid: 'org-admin-dashboard', type: 'view' }
            }
          }
        }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    component.filters = mockChartData.filters;
    component.chartData = mockChartData.chartData;
    component.selectedFilter = {};
    component.filterType = "chart-filter";
    component.chartLabels = [];
    component.dateFilterReferenceName = "";
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have filters and chartData as input', () => {
    component.ngOnInit();
    expect(component.filters).toBe(mockChartData.filters);
    expect(component.chartData).toBe(mockChartData.chartData);
  });


  it('should build filters form from the configuration', fakeAsync(() =>  {
    const spy = spyOn(component, 'buildFiltersForm').and.callThrough();
    tick(1000);
    component.ngOnInit();
    tick(1000);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(component.filtersFormGroup.contains('state')).toBe(true);
    expect(component.filtersFormGroup.controls).toBeTruthy();
    expect(component.selectedFilters).toEqual({});
  

  }));
  

  it('should change selected filters value whenever any filter is changed', fakeAsync(() => {
    const spy = spyOn(component, 'formGeneration').and.callThrough();
    component.ngOnInit();
    component.filtersFormGroup.get('state').setValue(['01285019302823526477']);
    tick(1000);
    expect(component.selectedFilters).toEqual({
      'state': ['01285019302823526477']
    });
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(mockChartData.chartData);

  }));

  it('should reset filter', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    component.filtersFormGroup.get('state').setValue(['01285019302823526477']);
    component.resetFilter();
    tick(1000);
    expect(component.showFilters).toEqual(true);
    expect(component.filtersFormGroup.value).toEqual({ state: null });

   
  }));

  it('should call selected filter ', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    spyOnProperty(component, 'selectedFilter', 'set').and.callThrough();
    component.selectedFilter = [{
      data: [{ state: "01285019302823526477", Plays: "10", Date: "2020-04-28" }],filters:mockChartData.filters
    }];
    tick(1000);
    expect(component.selectedFilters).toEqual({});
    expect(component.filters).toEqual(mockChartData.filters);
    tick(1000)

    component.selectedFilter = [{
      data: [{ state: "01285019302823526477", Plays: "10", Date: "2020-04-28" }],selectedFilters:mockChartData.filters
    }];
    tick(1000);
    expect(component.selectedFilters).toEqual({});

  }));

  it('should emit the filter data', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    component.filterData();
    expect(component.selectedFilters).toEqual({});
    expect(component.filters).toEqual(mockChartData.filters);

  }));

  it('should check checkFilterReferance', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    component.dateFilters = ['date'];
    const response = component.checkFilterReferance("date");
    expect(response).toEqual(true);
    const response2 = component.checkFilterReferance("date2");
    expect(response2).toEqual(false);
  }));

  it('should set resetFilters', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    spyOnProperty(component, 'resetFilters', 'set').and.callThrough();
    tick(1000);
    component.selectedFilters = {};
    component.resetFilters = { data:mockChartData.chartData,reset:true,filters:mockChartData.filters };
    tick(1000);
    expect(component.selectedFilters).toEqual({});
    tick(1000);
    expect(component.chartData).toEqual(mockChartData.chartData);
    tick(1000);
    component.resetFilters = { data:mockChartData.chartData,filters:mockChartData.filters };
    tick(1000);
    expect(component.selectedFilters).toEqual({});
    expect(component.chartData).toEqual(mockChartData.chartData);


  }));

  it('should run buildFiltersForm', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    component.filters = mockChartData.filters;
    component.chartData = mockChartData.chartData;
    tick(1000);
    component.buildFiltersForm();
    tick(1000);
    component.filtersFormGroup.get('state').setValue(['01285019302823526477']);
    tick(1000);
    expect(component.selectedFilters).toEqual({
      'state': ['01285019302823526477']
    });
  }));

  it('should get filter data with selected filter', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    component.filters = mockChartData.filters;
    component.chartData = mockChartData.chartData;
    tick(1000);
    component.buildFiltersForm();
    tick(1000);
    component.filtersFormGroup.get('state').setValue(['01285019302823526477']);
    tick(1000);
    component.filterData();
    expect(component.selectedFilters).toEqual({
      'state': ['01285019302823526477']
    });
    expect(component.filters).toEqual([{ controlType: 'multi-select',
     displayName: 'Select state', 
     options: [ '01285019302823526477', '013016492159606784174', '0130385861180866561', 'b00bc992ef25f1a9a8d', 'b00bc992ef25f1a9a8d63291e20efc8d' ], 
     reference: 'state' }]);
    
  }));

  it('should get filter data without selected filter', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    component.selectedFilters ={};
    tick(1000);
    component.filterData();
    expect(component.selectedFilters).toEqual({});
    expect(component.chartData).toEqual(mockChartData.chartData);
    expect(component.filters).toEqual(mockChartData.filters);

  }));

 
  it('should call setTelemetryInteractEdata', () => {
    const resp = component.setTelemetryInteractEdata('filter.reference');
    expect(resp).toEqual({ id: 'filter.reference', type: 'click', pageid:  component.activatedRoute.snapshot.data.telemetry.pageid });
  });

  xit('should set the dateRange', fakeAsync(() => {
    component.ngOnInit();
    tick(1000);
    component.getDateRange({
      startDate: 'Tue Jan 08 2019 00:00:00 GMT+0530 (India Standard Time)',
      endDate: 'Tue Jan 10 2019 00:00:00 GMT+0530 (India Standard Time)'
    }, 'Grade');
    tick(1000);
    expect(component.filtersFormGroup.get('Grade').value).toEqual(['08-01-2019', '09-01-2019', '10-01-2019']);
  }));

});
