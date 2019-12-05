import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    private database: SQLiteObject;
  
    constructor(public sqlite: SQLite){
      console.log('Constructor')
      this.sqlite.create(
        {
        name: 'ex.db',
        location: 'default' 
        
      }).then(
          (db : SQLiteObject) => {
            console.log('database created')
            // console.log(JSON.stringify(db))
            db.executeSql('CREATE TABLE table (name varchar)')
            console.log('table created')

          }
            )
          }
          
        // addHero(dbObj: SQLiteObject){
        //   let q = "INSERT INTO heros (name) VALUES(?)"
        //   return dbObj.executeSql(q, ['Iron Man']).then(
        //     (res) => {
        //       return res
        //   }
        //   )
        // }
        // printAllHeros(dbObj: SQLiteObject){
        //   let q = "SELECT name FROM heros"
        //   dbObj.executeSql(q,[]).then (
        //     (res) =>{
        //       for(let i =0; i< res.rows.length; i++){
        //         console.log(res.rows.item(i))
        //       }
        //     }
        //   )
      
        // }
}
