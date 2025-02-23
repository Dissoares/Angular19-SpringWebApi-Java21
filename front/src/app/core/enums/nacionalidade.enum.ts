const listaNacionalidade: NacionalidadeEnum[] = [];

export class NacionalidadeEnum {
  static readonly BRASILEIRO = new NacionalidadeEnum(1, 'BRASILEIRO');
  static readonly ESTRANGEIRO = new NacionalidadeEnum(2, 'ESTRANGEIRO');

  private constructor(
    public readonly id: number,
    public readonly descricao: string
  ) {
    listaNacionalidade.push(this);
  }

  public static getAllValues(): NacionalidadeEnum[] {
    return listaNacionalidade;
  }

  public static getById(id: number): NacionalidadeEnum | undefined {
    return listaNacionalidade.find((nacionalidade) => nacionalidade.id === id);
  }

  public static getByDescricao(
    descricao: string
  ): NacionalidadeEnum | undefined {
    return listaNacionalidade.find(
      (nacionalidade) => nacionalidade.descricao === descricao
    );
  }
}
