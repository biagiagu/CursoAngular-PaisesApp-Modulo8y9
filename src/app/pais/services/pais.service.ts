import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

	private apiURL:string='http://api.countrylayer.com/v2';
	private apiKey:string='?access_key=da057f36433124999061e11b7beee94a';
	
	
	constructor(private http: HttpClient) { }

	buscarPais( termino:string ): Observable <Country[]> {
		
		const url = `${this.apiURL}/name/${termino}${this.apiKey}`;
		console.log(url);
		return this.http.get<Country[]>( url );
	}

	buscarCapital(termino:string) : Observable<Country[]> {
		const url =`${this.apiURL}/capital/${termino}`;

		return this.http.get<Country[]>(url);
	}
}
