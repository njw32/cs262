import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Camera } from '@ionic-native/camera';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePage} from '../app/home/home.page';
import { ImageService } from './image.service'

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [HomePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
