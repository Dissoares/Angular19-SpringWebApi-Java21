const listaUf: UfEnum[] = [];

export class UfEnum {
  static readonly ACRE = new UfEnum(1, 'ACRE', 'AC');
  static readonly ALAGOAS = new UfEnum(2, 'ALAGOAS', 'AL');
  static readonly AMAPA = new UfEnum(3, 'AMAPÁ', 'AP');
  static readonly AMAZONAS = new UfEnum(4, 'AMAZONAS', 'AM');
  static readonly BAHIA = new UfEnum(5, 'BAHIA', 'BA');
  static readonly CEARA = new UfEnum(6, 'CEARÁ', 'CE');
  static readonly DISTRITO_FEDERAL = new UfEnum(7, 'DISTRITO FEDERAL', 'DF');
  static readonly ESPIRITO_SANTO = new UfEnum(8, 'ESPÍRITO SANTO', 'ES');
  static readonly GOIAS = new UfEnum(9, 'GOIÁS', 'GO');
  static readonly MARANHAO = new UfEnum(10, 'MARANHÃO', 'MA');
  static readonly MATO_GROSSO = new UfEnum(11, 'MATO GROSSO', 'MT');
  static readonly MATO_GROSSO_DO_SUL = new UfEnum(
    12,
    'MATO GROSSO DO SUL',
    'MS'
  );
  static readonly MINAS_GERAIS = new UfEnum(13, 'MINAS GERAIS', 'MG');
  static readonly PARA = new UfEnum(14, 'PARÁ', 'PA');
  static readonly PARAIBA = new UfEnum(15, 'PARAÍBA', 'PB');
  static readonly PARANA = new UfEnum(16, 'PARANÁ', 'PR');
  static readonly PERNAMBUCO = new UfEnum(17, 'PERNAMBUCO', 'PE');
  static readonly PIAUI = new UfEnum(18, 'PIAUÍ', 'PI');
  static readonly RIO_DE_JANEIRO = new UfEnum(19, 'RIO DE JANEIRO', 'RJ');
  static readonly RIO_GRANDE_DO_NORTE = new UfEnum(
    20,
    'RIO GRANDE DO NORTE',
    'RN'
  );
  static readonly RIO_GRANDE_DO_SUL = new UfEnum(21, 'RIO GRANDE DO SUL', 'RS');
  static readonly RONDONIA = new UfEnum(22, 'RONDÔNIA', 'RO');
  static readonly RORAIMA = new UfEnum(23, 'RORAIMA', 'RR');
  static readonly SANTA_CATARINA = new UfEnum(24, 'SANTA CATARINA', 'SC');
  static readonly SAO_PAULO = new UfEnum(25, 'SÃO PAULO', 'SP');
  static readonly SERGIPE = new UfEnum(26, 'SERGIPE', 'SE');
  static readonly TOCANTINS = new UfEnum(27, 'TOCANTINS', 'TO');

  private constructor(
    public readonly id: number,
    public readonly descricao: string,
    public readonly uf: string
  ) {
    listaUf.push(this);
  }

  public static getAllValues(): UfEnum[] {
    return listaUf;
  }

  public static getById(id: number): UfEnum | undefined {
    return listaUf.find((uf) => uf.id === id);
  }

  public static getByDescricao(descricao: string): UfEnum | undefined {
    return listaUf.find((uf) => uf.descricao === descricao);
  }
}
