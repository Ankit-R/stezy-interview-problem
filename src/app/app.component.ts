import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public displayedColumns: string[] = [];
  public dataSource: any;
  public dataSourceCopy: any;

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.dataService.getColumnData().subscribe((data: string[]) => {
      this.displayedColumns = data;
    });
    this.dataService.getUserData().subscribe((data: any) => {
      this.dataSource = data;
      this.dataSourceCopy = data;
    });
  }

  public filterList(event: any, column: string): void {
    this.dataSourceCopy = this.dataSource.filter((data: any) => {
      return data[column].includes(event.value);
    });
  }
}
