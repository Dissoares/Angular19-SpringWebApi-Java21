const listaNacionalidade: Array<NacionalidadeEnum> = [];

export class NacionalidadeEnum {
  static BRASILEIRO = new NacionalidadeEnum(1, 'BRASILEIRO');
  static ESTRANGEIRO = new NacionalidadeEnum(2, 'ESTRANGEIRO');

  constructor(public id: number, public descricao: string) {
    listaNacionalidade.push(this);
  }

  public static getAllValues(): Array<NacionalidadeEnum> {
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
