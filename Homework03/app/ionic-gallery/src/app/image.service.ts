import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Injectable()
export class ImageService {



   /**
    * @name cameraImage
    * @type {String}
    * @public
    * @description              Stores the returned base64 data URI
    */
   public cameraImage : String



   constructor(public http     : HttpClient,
               private _CAMERA : Camera)
   {

   }



   /**
    * Uses the Ionic Native Camera plugin to open the device camera
    * and allows the user to take a photograph which is then returned
    * as a base64 data URI
    *
    * @public
    * @method takePhotograph
    * @return {Promise}
    */
   takePhotograph() : Promise<any>
   {
      return new Promise(resolve =>
      {
         this._CAMERA.getPicture(
       {
          destinationType : this._CAMERA.DestinationType.DATA_URL,
          targetWidth     : 320,
          targetHeight    : 240
       })
       .then((data) =>
       {
          this.cameraImage  = "data:image/jpeg;base64," + data;
          resolve(this.cameraImage);
       });
      });
   }



   /**
    * Uses the Ionic Native Camera plugin to open the device photolibrary
    * and allows the user to select an image which is then returned as a
    * base64 data URI
    *
    * @public
    * @method selectPhotograph
    * @return {Promise}
    */
   selectPhotograph() : Promise<any>
   {
      return new Promise(resolve =>
      {
         let cameraOptions : CameraOptions = {
             sourceType         : this._CAMERA.PictureSourceType.PHOTOLIBRARY,
             destinationType    : this._CAMERA.DestinationType.DATA_URL,
           quality              : 100,
           targetWidth          : 320,
           targetHeight         : 240,
           encodingType         : this._CAMERA.EncodingType.JPEG,
           correctOrientation   : true
         };

         this._CAMERA.getPicture(cameraOptions)
         .then((data) =>
         {
            this.cameraImage  = "data:image/jpeg;base64," + data;
      resolve(this.cameraImage);
         });

      });
   }

}