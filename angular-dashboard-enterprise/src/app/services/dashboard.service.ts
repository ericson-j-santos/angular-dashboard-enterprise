import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private http = inject(HttpClient);
  private api = environment.apiUrl;
  // private api = 'https://backend-dashboard-gvl3.onrender.com'; //backend remoto
  // private api = 'http://localhost:8010'; //backend local

  obterDashboard(): Observable<any> {
    return this.http.get(`${this.api}/api/dashboard`);
  }
}
