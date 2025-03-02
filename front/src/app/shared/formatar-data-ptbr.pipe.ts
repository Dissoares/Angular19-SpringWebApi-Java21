import { Pipe, PipeTransform } from '@angular/core';
import { ptBR } from 'date-fns/locale';
import { format } from 'date-fns';

@Pipe({
  name: 'formatarDataPtbr',
  standalone: true,
})

export class FormatarDataPtbrPipe implements PipeTransform {
  transform(data: string | Date, formato: string = 'dd/MM/yyyy'): string {
    if (!data) return '';
    return format(new Date(data), formato, { locale: ptBR });
  }
}
