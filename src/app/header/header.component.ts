import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private _dataStorageService: DataStorageService,private _authService:AuthService,private _router:Router) { }

	ngOnInit() {
	}

	onSaveData() {
		this._dataStorageService.storeRecipes().subscribe(
			(response: Response) => console.log(response)
		)
	};

	onGetData(){
		this._dataStorageService.getRecipes();
	};

	onLogout(){
		this._authService.logOut();
		this._router.navigate(['/']);
	}

}
