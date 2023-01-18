import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidatePhoneNumber } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ValidatePhoneNumberService {

  url = 'https://veriphone.p.rapidapi.com/verify'

  constructor(private http: HttpClient) { }

  validatePhoneNumber(phoneNumber: string) {
    const params = new HttpParams().set('phone', phoneNumber)
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'c07a088d6fmsh79964970de4e445p1b9c92jsn4347b9b69552',
      'X-RapidAPI-Host': 'veriphone.p.rapidapi.com'
    })
    return this.http.get<ValidatePhoneNumber>(this.url, {
      headers,
      params
    })
  }
}
