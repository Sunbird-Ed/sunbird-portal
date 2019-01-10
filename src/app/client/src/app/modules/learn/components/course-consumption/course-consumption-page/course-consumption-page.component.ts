import { combineLatest, Subject, throwError } from 'rxjs';
import { map, mergeMap, first, takeUntil } from 'rxjs/operators';
import { ResourceService, ToasterService, ConfigService } from '@sunbird/shared';
import { CourseConsumptionService, CourseBatchService } from './../../../services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { CoursesService, BreadcrumbsService } from '@sunbird/core';
import * as moment from 'moment';
@Component({
  templateUrl: './course-consumption-page.component.html',
  styleUrls: ['./course-consumption-page.component.css']
})
export class CourseConsumptionPageComponent implements OnInit, OnDestroy {
  public courseId: string;
  public batchId: string;
  public showLoader = true;
  public showError = false;
  public courseHierarchy: any;
  public unsubscribe$ = new Subject<void>();
  public enrolledBatchInfo: any;
  constructor(private activatedRoute: ActivatedRoute, private configService: ConfigService,
    private courseConsumptionService: CourseConsumptionService, private coursesService: CoursesService,
    public toasterService: ToasterService, public courseBatchService: CourseBatchService,
    private resourceService: ResourceService, public router: Router, public breadcrumbsService: BreadcrumbsService) {
  }
  ngOnInit() {
    this.coursesService.enrolledCourseData$.pipe(first(),
      mergeMap(({ enrolledCourses }) => {
        const routeParams: any = { ...this.activatedRoute.snapshot.params, ...this.activatedRoute.snapshot.firstChild.params };
        this.courseId = routeParams.courseId;
        const inputParams = {params: this.configService.appConfig.CourseConsumption.contentApiQueryParams};
        const enrollCourses: any = this.getBatchDetailsFromEnrollList(enrolledCourses, routeParams);
        if (routeParams.batchId && !enrollCourses) { // batch not found in enrolled Batch list
          return throwError('ENROLL_BATCH_NOT_EXIST');
        }
        if (enrollCourses) { // batch found in enrolled list
          this.batchId = enrollCourses.batchId;
          if (enrollCourses.batchId !== routeParams.batchId) { // if batch from route dint match or not present
            this.router.navigate([`learn/course/${this.courseId}/batch/${this.batchId}`]); // but course was found in enroll list
          }
        }
        return this.getDetails(inputParams);
      }), takeUntil(this.unsubscribe$))
      .subscribe(({ courseHierarchy, enrolledBatchDetails }: any) => {
        this.enrolledBatchInfo = enrolledBatchDetails;
        this.courseHierarchy = courseHierarchy;
        this.checkCourseStatus(courseHierarchy);
        this.updateBreadCrumbs();
        this.showLoader = false;
      }, (err) => {
        this.toasterService.error(this.resourceService.messages.fmsg.m0003); // fmsg.m0001 for enrolled issue
        this.router.navigate([`/learn`]);
      });
  }
  private getBatchDetailsFromEnrollList(enrolledCourses = [], { courseId, batchId }) {
    const allBatchesOfCourse = _.filter(enrolledCourses, { courseId })
      .sort((cur: any, prev: any) => moment(cur.enrolledDate).valueOf() > moment(prev.enrolledDate).valueOf() ? -1 : 1);
    const curBatch = _.find(allBatchesOfCourse, { batchId }); // find batch matching route batchId
    if (curBatch) { // activateRoute batch found
      return curBatch;
    }
    if (allBatchesOfCourse[0]) { // recently enrolled batch found
      return allBatchesOfCourse[0];
    }
    return; // no batch found
  }
  private getDetails(inputParams) {
    if (this.batchId) {
      return combineLatest(
        this.courseConsumptionService.getCourseHierarchy(this.courseId, inputParams),
        this.courseBatchService.getEnrolledBatchDetails(this.batchId)
      ).pipe(map(result => ({ courseHierarchy: result[0], enrolledBatchDetails: result[1] })));
    } else {
      return this.courseConsumptionService.getCourseHierarchy(this.courseId, inputParams)
        .pipe(map(courseHierarchy => ({ courseHierarchy })));
    }
  }
  private checkCourseStatus(courseHierarchy) {
    if (!['Live', 'Unlisted', 'Flagged'].includes(courseHierarchy.status)) {
      this.toasterService.warning(this.resourceService.messages.imsg.m0026);
      this.router.navigate(['/learn']);
    }
  }
  private updateBreadCrumbs() {
    if (this.batchId) {
      this.breadcrumbsService.setBreadcrumbs([{
        label: this.courseHierarchy.name,
        url: '/learn/course/' + this.courseId + '/batch/' + this.batchId
      }]);
    } else {
      this.breadcrumbsService.setBreadcrumbs([{
        label: this.courseHierarchy.name,
        url: '/learn/course/' + this.courseId
      }]);
    }
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
