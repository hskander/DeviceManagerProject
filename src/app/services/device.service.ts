import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Device } from '../Device';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  addDeviceApi(device: Device):Observable<Device>{
    return this.http.post<Device>("http://localhost:3000/devices", device).
    pipe(map((res:Device)=>{
      return res;
    }));
  }

  getAllDevicesApi(){
    return this.http.get<any>("http://localhost:3000/devices").
    pipe(map((res:any)=>{
      return res;
    }));
  }

  deleteDeviceApi(id:number){
    return this.http.delete<any>("http://localhost:3000/devices/"+id).
    pipe(map((res:any)=>{
      return res;
    }));
  }

}
