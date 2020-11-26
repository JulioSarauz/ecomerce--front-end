import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {


  products: Product[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  items: MegaMenuItem[];

  constructor() { }

  ngOnInit(): void {
    //this.productService.getProducts().then(data => this.products = data);
    this.cargaritem();
    this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];
  }


  
  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  cargaritem(){
    this.items = [
      {
          label: 'Videos', icon: 'pi pi-fw pi-video',
          items: [
              [
                  {
                      label: 'Video 1',
                      items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
                  },
                  {
                      label: 'Video 2',
                      items: [{label: 'Video 2.1'}, {label: 'Video 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Video 3',
                      items: [{label: 'Video 3.1'}, {label: 'Video 3.2'}]
                  },
                  {
                      label: 'Video 4',
                      items: [{label: 'Video 4.1'}, {label: 'Video 4.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Users', icon: 'pi pi-fw pi-users',
          items: [
              [
                  {
                      label: 'User 1',
                      items: [{label: 'User 1.1'}, {label: 'User 1.2'}]
                  },
                  {
                      label: 'User 2',
                      items: [{label: 'User 2.1'}, {label: 'User 2.2'}]
                  },
              ],
              [
                  {
                      label: 'User 3',
                      items: [{label: 'User 3.1'}, {label: 'User 3.2'}]
                  },
                  {
                      label: 'User 4',
                      items: [{label: 'User 4.1'}, {label: 'User 4.2'}]
                  }
              ],
              [
                  {
                      label: 'User 5',
                      items: [{label: 'User 5.1'}, {label: 'User 5.2'}]
                  },
                  {
                      label: 'User 6',
                      items: [{label: 'User 6.1'}, {label: 'User 6.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Events', icon: 'pi pi-fw pi-calendar',
          items: [
              [
                  {
                      label: 'Event 1',
                      items: [{label: 'Event 1.1'}, {label: 'Event 1.2'}]
                  },
                  {
                      label: 'Event 2',
                      items: [{label: 'Event 2.1'}, {label: 'Event 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Event 3',
                      items: [{label: 'Event 3.1'}, {label: 'Event 3.2'}]
                  },
                  {
                      label: 'Event 4',
                      items: [{label: 'Event 4.1'}, {label: 'Event 4.2'}]
                  }
              ]
          ]
      },
      {
          label: 'Settings', icon: 'pi pi-fw pi-cog',
          items: [
              [
                  {
                      label: 'Setting 1',
                      items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
                  },
                  {
                      label: 'Setting 2',
                      items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
                  },
                  {
                      label: 'Setting 3',
                      items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
                  }
              ],
              [
                  {
                      label: 'Technology 4',
                      items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
                  }
              ]
          ]
      }
  ]
  }

}



export interface Product {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price?:number;
  quantity?:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}