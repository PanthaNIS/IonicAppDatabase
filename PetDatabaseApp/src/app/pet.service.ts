import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PetRecord } from './PetRecord';
// Reference : unit content HTTP,AJAX and REST page.
@Injectable()
export class PetRecordService {
    private url: string = "http://spike.scu.edu.au:8080/PetServ/";

    constructor(private http: HttpClient) { }

    public getAllData(): Observable<PetRecord> {
        return this.http.get<PetRecord>(this.url);
    }

    public getData(petname:string): Observable<PetRecord> {
        return this.http.get<PetRecord>(this.url + petname);
    }
    public doDelete(petname:string): Observable<PetRecord> {
        return this.http.delete<PetRecord>(this.url + petname);
    }
    public doCreate(petRecord: PetRecord): Observable<PetRecord> {
        return this.http.post<PetRecord>(this.url, petRecord);
    }
}
    


