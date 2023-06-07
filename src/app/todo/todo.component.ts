import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { PlnPlcInfo } from './types/tarification-titre.response';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tarificationTitre: PlnPlcInfo[] = [];
  placeFilter: string = '';
  planFilter: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.tarificationTitre = this.todoService.PLN_PLC;
  }

  filterByPlace() {
    if (this.placeFilter) {
      this.tarificationTitre = this.todoService.PLN_PLC.filter(item => {
        return item.PLACECODE.toString() === this.placeFilter;
      });
    } else {
      this.tarificationTitre = this.todoService.PLN_PLC;
    }
  }

  //   filterByPlan() {
  //   this.tarificationTitre = this.todoService.PLN_PLC.filter(item => {
  //     return item.PLN_SVM.some(svm => {
  //       return svm.PLN.some(plan => plan.PLAN === parseInt(this.planFilter));
  //     });
  //   }).map(item => {
  //     item.PLN_SVM = item.PLN_SVM.filter(svm => {
  //       return svm.PLN.some(plan => plan.PLAN === parseInt(this.planFilter));
  //     });
  //     return item;
  //   });
  // }
  
  filterByPlan() {
    if (this.planFilter && this.planFilter !== '0') {
      this.tarificationTitre = this.todoService.PLN_PLC.filter(item => {
        return item.PLN_SVM.some(svm => {
          return svm.PLN.some(plan => plan.PLAN === parseInt(this.planFilter));
        });
      }).map(item => {
        item.PLN_SVM = item.PLN_SVM.filter(svm => {
          return svm.PLN.some(plan => plan.PLAN === parseInt(this.planFilter));
        });
        return item;
      });
    } else {
      this.tarificationTitre = this.todoService.PLN_PLC;
    }
  }
  

  
  
  
 
  
  
  
  

  
  
  


  
  
  
  
}
