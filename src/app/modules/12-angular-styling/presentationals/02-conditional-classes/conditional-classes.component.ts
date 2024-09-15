import { ChangeDetectionStrategy, Component } from '@angular/core';

type ListItem = {
  name: string,
  city: string,
  dateOfBirth: string
}

@Component({
  selector: 'app-conditional-classes',
  standalone: true,
  imports: [],
  templateUrl: './conditional-classes.component.html',
  styleUrl: './conditional-classes.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionalClassesComponent {
  readonly items: ListItem[] = [
    {
      name: 'John Lawrence',
      city: 'Los Angeles',
      dateOfBirth: '02.05.1983'
    },
    {
      name: 'Mike O\'Neil',
      city: 'San Francisco',
      dateOfBirth: '22.09.1999'
    },
    {
      name: 'Thomas Beck',
      city: 'Las Vegas',
      dateOfBirth: '02.05.1983'
    },
    {
      name: 'John Lawrence',
      city: 'Los Angeles',
      dateOfBirth: '09.12.2001'
    },
    {
      name: 'Edward Hall',
      city: 'Los Angeles',
      dateOfBirth: '16.08.1995'
    },
    {
      name: 'Mara May',
      city: 'San Diego',
      dateOfBirth: '01.02.1968'
    },
    {
      name: 'Jennifer McLovin',
      city: 'Los Angeles',
      dateOfBirth: '28.07.1999'
    },
    {
      name: 'Courtney Miller',
      city: 'New York',
      dateOfBirth: '05.11.1991'
    },
    {
      name: 'Bob Meyers',
      city: 'Chicago',
      dateOfBirth: '19.06.1988'
    },
  ]
}
