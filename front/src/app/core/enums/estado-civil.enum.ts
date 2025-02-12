const listaEstadoCivil: Array<EstadoCivilEnum> = [];

export class EstadoCivilEnum {
  static SOLTEIRO = new EstadoCivilEnum(1, 'SOLTEIRO');
  static CASADO = new EstadoCivilEnum(2, 'CASADO');
  static DIVORCIADO = new EstadoCivilEnum(3, 'DIVORCIADO');
  static Viuvo = new EstadoCivilEnum(4, 'VIÚVO');
  static SEPARADO = new EstadoCivilEnum(5, 'SEPARADO');
  static UNIAO_ESTAVEL = new EstadoCivilEnum(6, 'UNIÃO ESTÁVEL');

  constructor(public id: number, public descricao: string) {
    listaEstadoCivil.push(this);
  }

  public static getAllValues(): Array<EstadoCivilEnum> {
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
