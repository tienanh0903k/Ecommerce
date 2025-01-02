import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /**
   * Lấy token xác thực từ localStorage
   */
  private getToken(): string {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.token || '';
  }

  /**
   * Tạo HttpHeaders với token xác thực
   */
  private createHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      'Content-Type': 'application/json',
    });
  }

  /**
   * Xử lý lỗi từ API
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('HTTP Error:', error);
    return throwError(() => error.error || 'Something went wrong');
  }

  /**
   * Gửi yêu cầu GET
   */
  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}/${path}`, {
        headers: this.createHeaders(),
        params,
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * Gửi yêu cầu POST
   */
  post<T>(path: string, body: any): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}/${path}`, body, {
        headers: this.createHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * Gửi yêu cầu PUT
   */
  put<T>(path: string, body: any): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}/${path}`, body, {
        headers: this.createHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * Gửi yêu cầu DELETE
   */
  delete<T>(path: string): Observable<T> {
    return this.http
      .delete<T>(`${this.baseUrl}/${path}`, {
        headers: this.createHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * Gửi FormData (POST hoặc PUT)
   */
  postFormData<T>(path: string, formData: FormData): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
    return this.http
      .post<T>(`${this.baseUrl}/${path}`, formData, { headers })
      .pipe(catchError(this.handleError));
  }

  putFormData<T>(path: string, formData: FormData): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
    });
    return this.http
      .put<T>(`${this.baseUrl}/${path}`, formData, { headers })
      .pipe(catchError(this.handleError));
  }
}
