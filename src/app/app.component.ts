import { Component } from '@angular/core';
import { Device } from './Device';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeviceManager';
  public addDeviceForm?: FormGroup;

  public onAddDevice(/*addForm: NgForm*/): void {
   
  }
  public onDeleteDevice(employeeId: number): void {
    
  }

  /*public onOpenModal(device : Device , mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addDeviceModal');
    }
    
    if (mode === 'delete') {
     // this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();
  }*/

}
