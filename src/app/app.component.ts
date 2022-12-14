import { Component, OnInit } from '@angular/core';
import { Device } from './Device';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { DeviceService } from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DeviceManager';
  public addDeviceForm!: FormGroup;
  public deviceModelObj:Device = new Device() ;
  public devices:Device[]=[];
  deleteDeviceObj:Device  = new Device();
  constructor(private formBuilder:FormBuilder, private api: DeviceService){}

  ngOnInit(){
    this.getAllDevices();
    this.addDeviceForm=this.formBuilder.group({
      Name: ["", [Validators.required]],
      Coordinates: ["", [Validators.required]],
      Format:  ["", [Validators.required]]
    });
  }
   
  public onAddDevice(): void {
    
     if(this.addDeviceForm.valid){
      this.deviceModelObj.devicename =  this.addDeviceForm.value.Name;
      this.deviceModelObj.coordinates =   this.addDeviceForm.value.Coordinates;
      this.deviceModelObj.format=  this.addDeviceForm.value.Format ;
      this.api.addDeviceApi(this.deviceModelObj).subscribe(()=>{
        this.addDeviceForm.reset();
        let ref=document.getElementById('cancel');
        ref?.click();
        alert("Device Added Successfully");
        this.getAllDevices();
      })
     }
    
  }

  public getAllDevices():void{
    this.api.getAllDevicesApi().subscribe(data=>{
      this.devices=data;
    })
  }
  public onDeleteDevice(): void {
    this.api.deleteDeviceApi(this.deleteDeviceObj.id).subscribe(()=>{
      let ref=document.getElementById('btn-canc');
      ref?.click();
      this.getAllDevices();
    })
  }

  public searchEmployees(key: string): void {
    const results: Device[] = [];
    for (const device of this.devices) {
      if (device.devicename.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || device.coordinates.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || device.format.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(device);
      }
    }
    this.devices = results;
    if (results.length === 0 || !key) {
      this.getAllDevices();
    }
  }
}
