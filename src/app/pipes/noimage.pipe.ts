import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( images: any[] ): string {
    const errorImage = 'assets/img/noimage.png'; 
    if ( !images ){
      return errorImage;
    }

    if ( images.length > 0){
      return images[0].url;
    } else {
      return errorImage;
    }
    
  }

}
