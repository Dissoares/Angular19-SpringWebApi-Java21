import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string): Promise<T> {
    return firstValueFrom(this.http.get<T>(url));
  }

  public post<T>(url: string, data: any): Promise<T> {
    return firstValueFrom(this.http.post<T>(url, data));
  }

  public put<T>(url: string, data: any): Promise<T> {
    return firstValueFrom(this.http.put<T>(url, data));
  }

  public delete<T>(url: string): Promise<T> {
    return firstValueFrom(this.http.delete<T>(url));
  }
}
