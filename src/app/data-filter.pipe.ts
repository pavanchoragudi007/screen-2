import { PipeTransform, Pipe } from "@angular/core";
import { PersonalModule } from './personal.model';

@Pipe({
    name:'dataFilter'
})

export class DataFilterPipe implements PipeTransform {
    transform(employees: PersonalModule[], searchTerm: string) {
        if (!employees || !searchTerm) {
            return employees
        }
        return employees.filter(employee =>
            employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }

}