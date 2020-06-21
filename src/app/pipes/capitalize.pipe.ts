import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, every: boolean = true): unknown {
    value = value.toLocaleLowerCase();
    let texts = value.split(' ');

    if ( every ) {
      texts = texts.map( nombre => {
        return nombre[0].toUpperCase() + nombre.substr(1);
      });
    } else {
      texts[0] = texts[0][0].toUpperCase() + texts[0].substr(1);
    }

    return texts.join(' ');
  }

}
