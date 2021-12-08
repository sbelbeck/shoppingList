import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	listItems:any[] = [];
	newItem:string = '';
	deleteItem:string = '';
	duplicateMsg = '';
  constructor() {
		this.listItems = JSON.parse(localStorage.getItem("shoppingList") || '[]');
	}

  ngOnInit(): void {
  }

	addItem() {
		this.duplicateMsg = '';
		if(this.listItems.includes(this.newItem.toLowerCase())){
			this.duplicateMsg =  'This item is already on your list.';
		} else {
			this.listItems.push(this.newItem.toLowerCase());
			this.newItem = '';
			localStorage.setItem("shoppingList", JSON.stringify(this.listItems));
		}
	}

	removeItem(item:string){
		this.deleteItem = item;
		this.listItems.forEach((item,index)=>{
			if(item==this.deleteItem) this.listItems.splice(index,1);
			localStorage.setItem("shoppingList", JSON.stringify(this.listItems));
	 });
	}
}
