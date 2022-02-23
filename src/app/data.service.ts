import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getColumnData(): Observable<string[]> {
    return of (["Name", "Address", "Age"]);
  }

  public getUserData(): Observable<any> {
    return of (
      [{
        "Name": "Ankit",
        "Address": "Nerul",
        "Age": "21"
      },
      {
        "Name": "Ankita",
        "Address": "Mumbai",
        "Age": "21"
      },
      {
        "Name": "Aadway",
        "Address": "Bangalore",
        "Age": "21"
      }]
    );
  }
}
