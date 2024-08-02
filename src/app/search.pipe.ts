import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


transform(users: any[], searchTerm: string): any[] {
  if (!users || !searchTerm) {
    return users;
  }

  return users.filter(user =>
    user.id.toString().includes(searchTerm)
  );
}
}
