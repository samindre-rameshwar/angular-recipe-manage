import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	constructor(private _dataStorageService: DataStorageService) { }

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

}
