const listaStatusSolicitacao: StatusCadastroEnum[] = [];

export class StatusCadastroEnum {
  static readonly ATIVO = new StatusCadastroEnum(true, 'Ativo');
  static readonly INATIVO = new StatusCadastroEnum(false, 'Inativo');

  private constructor(
    public readonly id: boolean,
    public readonly descricao: string
  ) {
    listaStatusSolicitacao.push(this);
  }

  public static getAllValues(): StatusCadastroEnum[] {
    return listaStatusSolicitacao;
  }

  public static getById(id: boolean): StatusCadastroEnum | undefined {
    return listaStatusSolicitacao.find(
      (statusSolicitacao) => statusSolicitacao.id === id
    );
  }

  public static getByDescricao(
    descricao: string
  ): StatusCadastroEnum | undefined {
    return listaStatusSolicitacao.find(
      (statusSolicitacao) => statusSolicitacao.descricao === descricao
    );
  }
}
