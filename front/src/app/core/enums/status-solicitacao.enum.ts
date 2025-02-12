const listaStatusSolicitacao: Array<StatusSolicitacaoEnum> = [];
export class StatusSolicitacaoEnum {
  static ATIVO = new StatusSolicitacaoEnum(1, 'ATIVO');
  static INATIVO = new StatusSolicitacaoEnum(2, 'INATIVO');

  constructor(public id: number, public descricao: string) {
    listaStatusSolicitacao.push(this);
  }

  public static getAllValues(): Array<StatusSolicitacaoEnum> {
    return listaStatusSolicitacao;
  }

  public static getById(id: number): StatusSolicitacaoEnum | undefined {
    return listaStatusSolicitacao.find(
      (tipoSolicitacao) => tipoSolicitacao.id === id
    );
  }

  public static getByDescricao(
    descricao: string
  ): StatusSolicitacaoEnum | undefined {
    return listaStatusSolicitacao.find(
      (tipoSolicitacao) => tipoSolicitacao.descricao === descricao
    );
  }
}
