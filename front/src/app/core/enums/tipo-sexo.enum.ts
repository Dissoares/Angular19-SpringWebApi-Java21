export class TipoSexoEnum {
  static readonly MASCULINO = new TipoSexoEnum(1, 'MASCULINO');
  static readonly FEMININO = new TipoSexoEnum(2, 'FEMININO');

  constructor(
    public readonly codigo: number,
    public readonly descricao: string
  ) {}

  public static getAllValues() {
    return Object.values(TipoSexoEnum);
  }

  public static getByCodigo(codigo: number | string): TipoSexoEnum {
    return TipoSexoEnum.getAllValues().filter(
      (sexo) => sexo.codigo === Number(codigo)
    )[0];
  }

  public static getByDescricao(descricao: string): TipoSexoEnum {
    return this.getAllValues().find((sexo) => sexo.descricao === descricao);
  }
}
