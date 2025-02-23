const listaStatusSolicitacao: StatusSolicitacaoEnum[] = [];

export class StatusSolicitacaoEnum {
  static readonly ATIVO = new StatusSolicitacaoEnum(1, 'ATIVO');
  static readonly INATIVO = new StatusSolicitacaoEnum(2, 'INATIVO');

  private constructor(
    public readonly id: number,
    public readonly descricao: string
  ) {
    listaStatusSolicitacao.push(this);
  }

  public static getAllValues(): StatusSolicitacaoEnum[] {
    return listaStatusSolicitacao;
  }

  public static getById(id: number): StatusSolicitacaoEnum | undefined {
    return listaStatusSolicitacao.find(
      (statusSolicitacao) => statusSolicitacao.id === id
    );
  }

  public static getByDescricao(
    descricao: string
  ): StatusSolicitacaoEnum | undefined {
    return listaStatusSolicitacao.find(
      (statusSolicitacao) => statusSolicitacao.descricao === descricao
    );
  }
}
