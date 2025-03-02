import { MatPaginatorIntl } from '@angular/material/paginator';

export function getPaginatorPortugues() {
  const traducao = new MatPaginatorIntl();

  traducao.itemsPerPageLabel = 'Itens por página:';
  traducao.nextPageLabel = 'Próxima página';
  traducao.previousPageLabel = 'Página anterior';
  traducao.firstPageLabel = 'Primeira página';
  traducao.lastPageLabel = 'Última página';

  traducao.getRangeLabel = (
    pagina: number,
    tamanhoDaPagina: number,
    length: number
  ) => {
    const inicio = pagina * tamanhoDaPagina + 1;
    const fim =
      (pagina + 1) * tamanhoDaPagina < length
        ? (pagina + 1) * tamanhoDaPagina
        : length;
    return `${inicio} – ${fim} de ${length}`;
  };

  return traducao;
}
