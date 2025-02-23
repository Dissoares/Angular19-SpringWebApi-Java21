const listaStatusSolicitacao: StatusSolicitacaoEnum[] = [];

export class StatusSolicitacaoEnum {
  static readonly APROVADO = new StatusSolicitacaoEnum(1, 'APROVADO');
  static readonly REPROVADO = new StatusSolicitacaoEnum(2, 'REPROVADO');
  static readonly EM_ANALISE = new StatusSolicitacaoEnum(3, 'EM ANÁLISE');
  static readonly AGUARDANDO_REVISAO = new StatusSolicitacaoEnum(
    4,
    'AGUARDANDO REVISÃO'
  );
  static readonly CANCELADO = new StatusSolicitacaoEnum(5, 'CANCELADO');
  static readonly PENDENTE = new StatusSolicitacaoEnum(6, 'PENDENTE');

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
