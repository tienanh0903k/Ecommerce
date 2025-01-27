// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UploadService {
//   private apiUrl = 'http://localhost:3000/api/s3url';

//   constructor(private http: HttpClient) {}

//   getPresignedUrl(fileName: string, fileType: string): Observable<any> {
//     return this.http.post<any>(this.apiUrl, { fileName, fileType });
//   }


//   uploadFileToS3(url: string, file: File): Observable<any> {
//     return this.http.put(url, file, {
//       headers: {
//         'Content-Type': file.type
//       }
//     });
//   }

// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  private apiUrl = 'http://localhost:3000/upload'; // URL API upload file

  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file); // Key phải khớp với "file" trong backend

    return this.http.post(this.apiUrl, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
