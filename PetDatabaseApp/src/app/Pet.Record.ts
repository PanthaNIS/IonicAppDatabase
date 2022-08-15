import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PetRecord } from './PetRecord';
// Reference : unit content HTTP,AJAX and REST page.
@Injectable()
export class PetRecordService {
    private url: string = "http://spike.scu.edu.au:8080/PetServ/";
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) { }

    public getData(): Observable<PetRecord> {
        return this.http.get<PetRecord>(this.url + "getPetRecords");
    }
    
    }


