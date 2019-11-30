import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private database: SQLiteObject;

  constructor(private sqlite: SQLite) {
    this.sqlite.create({
      name:'items.db',
      location: 'default'   
     })
     .then((db:SQLiteObject) => {
       this.database = db;
       db.executeSql( 
          `CREATE TABLE IF NOT EXISTS items (
            reference CHAR(10) PRIMARY KEY,
            name CHAR(30),
            qMin FLOAT,
            qReal FLOAT
          ))`, [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
     })
     .catch(e => console.log(e));
  }   

}
