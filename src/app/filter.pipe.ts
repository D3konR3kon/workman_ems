import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './shared/models/employee';

@Pipe({
  name: 'sFilter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Employee[], searchText: string): any[] {
    if(!values) return [];
    if(!searchText) return values;

        searchText = searchText.toLowerCase();

    return values.filter(v =>
      v.fname.toLowerCase().startsWith(searchText.toLowerCase()));
  }

}
