import { Component, OnInit, ViewChild } from '@angular/core';

import { ToasterService, IUserData, IUserProfile, LayoutService, ResourceService, ConfigService, OnDemandReportService } from '@sunbird/shared';
import { TelemetryService } from '@sunbird/telemetry';
import { Subject, Subscription } from 'rxjs';
import { KendraService, UserService, FormService } from '@sunbird/core';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash-es';


@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})

export class DatasetsComponent implements OnInit {

  public activatedRoute: ActivatedRoute;
  public showConfirmationModal = false;

  config;
  reportTypes = [];
  programs = [];
  solutions = [];
  @ViewChild('modal', { static: false }) modal;
  popup: boolean = false;
  awaitPopUp: boolean = false;
  reportStatus = {
    'submitted': 'SUBMITTED',
    'processing': 'PROCESSING',
    'failed': 'FAILED',
    'success': 'SUCCESS',
  };

  public isProcessed = false;

  formData: Object;
  public columns = [
    { name: 'Report type', isSortable: true, prop: 'datasetConfig.title', placeholder: 'Filter report type' },
    { name: 'Request date', isSortable: true, prop: 'jobStats.dtJobSubmitted', placeholder: 'Filter request date', type: 'date' },
    { name: 'Status', isSortable: false, prop: 'status', placeholder: 'Filter status' },
    { name: 'Report link', isSortable: false, prop: 'downloadUrls', placeholder: 'Filter download link' },
    { name: 'Generated date', isSortable: true, prop: 'jobStats.dtJobCompleted', placeholder: 'Filter generated date', type: 'dateTime' },
    // { name: 'Requested by', isSortable: true, prop: 'requested_by', placeholder: 'Filter request by' },
  ];

  public onDemandReportData = [];

  downloadCSV = true;
  isColumnsSearchable = false;
  tag: string = "PROGRAM-REPORT1";

  reportForm = new FormGroup({
    programName: new FormControl('', [Validators.required]),
    solution: new FormControl('', [Validators.required]),
    reportType: new FormControl('', [Validators.required])
  });

  passwordForm = new FormGroup({
    password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')])
  });

  programSelected: any;


  constructor(
    activatedRoute: ActivatedRoute,
    public layoutService: LayoutService,
    public telemetryService: TelemetryService,
    public resourceService: ResourceService,
    public kendraService: KendraService,
    public userService: UserService,
    public onDemandReportService: OnDemandReportService,
    config: ConfigService,
    public toasterService: ToasterService,
    public formService: FormService,
    public router: Router
  ) {
    this.config = config;
    this.activatedRoute = activatedRoute;
  }

  layoutConfiguration: any;
  public unsubscribe$ = new Subject<void>();
  userDataSubscription: Subscription;
  /**
   * Reference of User Profile interface
   */
  userProfile: IUserProfile;
  /**
   * all user role
   */
  private userRoles: Array<string> = [];
  public userId: string;
  public selectedReport;

  getProgramsList() {

    // const paramOptions = {
    //   url:
    //     this.config.urlConFig.URLS.KENDRA.PROGRAMS_BY_PLATFORM_ROLES+"?role="+this.userRoles.toString()
    // };

    const paramOptions = {
      url:
        this.config.urlConFig.URLS.KENDRA.PROGRAMS_BY_PLATFORM_ROLES
    };
    this.kendraService.get(paramOptions).subscribe(data => {
      if (data && data.result) {
        console.log("data",data);
        this.programs = data.result;
      }
    }, error => {
      console.log("data error");
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    })

  }

  getSolutionList(program) {

    const paramOptions = {
      url:
        this.config.urlConFig.URLS.KENDRA.SOLUTIONS_BY_PROGRAMID + "/" + program._id + "?role=" + program.role
    };
    this.kendraService.get(paramOptions).subscribe(data => {
      if (data && data.result) {
        this.solutions = data.result;
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    })

  }

  ngOnInit() {

    this.loadReports();
    this.userDataSubscription = this.userService.userData$.subscribe(
      (user: IUserData) => {
        if (user && !user.err) {
          console.log("user profile");
          this.userProfile = user.userProfile;
          this.userRoles = user.userProfile.userRoles;
          this.userId = user.userProfile.id;
        }
      });
    this.initLayout();
    this.getProgramsList();
    this.getFormDetails();
  }
  initLayout() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
    this.layoutService.switchableLayout().pipe(takeUntil(this.unsubscribe$)).subscribe(layoutConfig => {
      if (layoutConfig != null) {
        this.layoutConfiguration = layoutConfig.layout;
      }
    });
  }

  public programSelection($event) {

    let program = this.programs.filter(data => {
      if (data._id == $event) {
        return data
      }
    })

    this.solutions = [];
    this.reportTypes = [];
    this.getSolutionList(program[0]);

  }
  public selectSolution($event) {

    if (this.programSelected && this.reportForm.value && this.reportForm.value['solution']) {
      let solution = this.solutions.filter(data => {
        if (data._id == $event) {
          return data
        }
      });
      if (solution[0].isRubricDriven == true && solution[0].type == "observation") {
        let type = solution[0].type + "_with_rubric";
        this.reportTypes = this.formData[type];
      } else {
        this.reportTypes = this.formData[solution[0].type];
      }

    }
  }

  public closeModal(): void {
    this.popup = false;
  }

  public csvRequest() {
    this.popup = false;
    this.submitRequest();
  }

  public requestDataset() {
    if (this.selectedReport.encrypt == true) {
      this.popup = true;
    } else {
      this.showConfirmationModal = true;
    }
  }

  private closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

  goBack() {
    this.router.navigate([`/`]);
  }

  public handleConfirmationEvent(event: boolean) {
    this.closeConfirmationModal();
    if (event == true) {
      this.submitRequest();
    }
  }
  public closeConfirmModal() {
    this.awaitPopUp = false;
  }

  loadReports() {
    this.onDemandReportService.getReportList(this.tag).subscribe((data) => {
      if (data) {
        const reportData = _.get(data, 'result.jobs');
        this.onDemandReportData = _.map(reportData, (row) => this.dataModification(row));
        this.onDemandReportData = [...this.onDemandReportData];
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    });
  }

  reportChanged(ev) {
    this.selectedReport = ev;
  }

  submitRequest() {
    const isRequestAllowed = this.checkStatus();
    if (isRequestAllowed) {
      this.isProcessed = false;
      let config = {
        batchId: this.programSelected,
        reportType: this.reportForm.controls.reportType.value,
        solution: this.reportForm.controls.solution.value,
        title: this.selectedReport.name
      }
      let request = {
        request: {
          tag: this.tag,
          requestedBy: this.userId,
          dataset: this.selectedReport['datasetId'],
          datasetConfig: config,
          output_format: 'csv'

        }
      };
      if (this.selectedReport.encrypt === true) {
        request.request['encryptionKey'] = this.passwordForm.controls.password.value;
      }

      this.onDemandReportService.submitRequest(request).subscribe((data: any) => {
        if (data && data.result) {
          if (data.result.status === this.reportStatus.failed) {
            const error = _.get(data, 'result.statusMessage') || _.get(this.resourceService, 'frmelmnts.lbl.requestFailed');
            this.toasterService.error(error);
          }
          data = this.dataModification(data['result']);
          const updatedReportList = [data, ...this.onDemandReportData];
          this.onDemandReportData = _.slice(updatedReportList, 0, 10);
        }
      }, error => {
        this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
      });
      this.awaitPopUp = true;
      this.reportForm.reset();
      this.passwordForm.reset();
    } else {
      this.popup = false;
      this.isProcessed = true;
      setTimeout(() => {
        this.isProcessed = false;
      }, 5000)
      this.toasterService.error(_.get(this.resourceService, 'frmelmnts.lbl.requestFailed'));
      this.reportForm.reset();
      this.passwordForm.reset();
    }
  }

  public getFormDetails() {

    const formServiceInputParams = {
      formType: 'program-dashboard',
      formAction: 'reportData',
      contentType: "csv-dataset",
      component: 'portal'
    };

    this.formService.getFormConfig(formServiceInputParams).subscribe((formData) => {
      if (formData) {
        console.log("---",JSON.stringify(formData));
        this.formData = formData;
      }
    }, error => {
      this.toasterService.error(this.resourceService.messages.emsg.m0005);
    });

  }
  dataModification(row) {
    const dataSet = _.find(this.reportTypes, { dataset: row.dataset }) || {};
    row.title = dataSet.title;
    return row;
  }

  checkStatus() {
    let requestStatus = true;
     const selectedReportList = [];
    _.forEach(this.onDemandReportData, (value) => {
      if (value.dataset === this.selectedReport.datasetId) {
        selectedReportList.push(value);
      }
    });
    const sortedReportList = _.sortBy(selectedReportList, [(data) => {
      return data && data.jobStats && data.jobStats.dtJobSubmitted;
    }]);
    const reportListData = _.last(sortedReportList) || {};
    if (!_.isEmpty(reportListData)) { // checking the report is already created or not
      let isInProgress = this.onDemandReportService.isInProgress(reportListData, this.reportStatus); // checking the report is in SUBMITTED/PROCESSING state 
      if (!isInProgress) {
        requestStatus = true;
      } else {
        requestStatus = false; // report is in SUBMITTED/PROCESSING state and can not create new report
      }
    }
    return requestStatus;
  }
  onDownloadLinkFail(data) {
    const tagId = data && data.tag && data.tag.split(':');
    this.onDemandReportService.getReport(_.head(tagId), data.requestId).subscribe((data: any) => {
      if (data) {
        const downloadUrls = _.get(data, 'result.downloadUrls') || [];
        const downloadPath = _.head(downloadUrls);
        if (downloadPath) {
          window.open(downloadPath, '_blank');
        } else {
          this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
        }
      }
    }, error => {
      this.toasterService.error(_.get(this.resourceService, 'messages.fmsg.m0004'));
    });
  }

}
