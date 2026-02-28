import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  private dashboardService = inject(DashboardService);

  dados: any;

  ngOnInit() {
    console.log("DashboardComponent inicializado");
    this.dashboardService.obterDashboard().subscribe({
      next: (res) => {
        console.log('API Response:', res);
        this.dados = res;
      },
      error: (err) => console.error(err)
    });
  }
}
