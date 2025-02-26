import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  public post<T>(url: string, data: any): Observable<T> {
    return this.http.post<T>(url, data);
  }

  public put<T>(url: string, data: any): Observable<T> {
    return this.http.put<T>(url, data);
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
