const listaEstadoCivil: EstadoCivilEnum[] = [];

export class EstadoCivilEnum {
  static readonly SOLTEIRO = new EstadoCivilEnum(1, 'SOLTEIRO');
  static readonly CASADO = new EstadoCivilEnum(2, 'CASADO');
  static readonly DIVORCIADO = new EstadoCivilEnum(3, 'DIVORCIADO');
  static readonly VIUVO = new EstadoCivilEnum(4, 'VIÚVO');
  static readonly SEPARADO = new EstadoCivilEnum(5, 'SEPARADO');
  static readonly UNIAO_ESTAVEL = new EstadoCivilEnum(6, 'UNIÃO ESTÁVEL');

  private constructor(
    public readonly id: number,
    public readonly descricao: string
  ) {
    listaEstadoCivil.push(this);
  }

  public static getAllValues(): EstadoCivilEnum[] {
    return listaEstadoCivil;
  }

  public static getById(id: number): EstadoCivilEnum | undefined {
    return listaEstadoCivil.find((estadoCivil) => estadoCivil.id === id);
  }

  public static getByDescricao(descricao: string): EstadoCivilEnum | undefined {
    return listaEstadoCivil.find(
      (estadoCivil) => estadoCivil.descricao === descricao
    );
  }
}
