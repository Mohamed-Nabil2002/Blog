import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appPagination]',
  exportAs: 'pagination',
})
export class PaginationDirective {

  @Input() totalPages:any;
  pageNo: number = 1;
  constructor() { }

  onNext() {
  this.setPage(Math.min(this.totalPages, this.pageNo + 1))
}

setPage(page: number) {
  this.pageNo = page;
  console.log(this.pageNo);
}

}
