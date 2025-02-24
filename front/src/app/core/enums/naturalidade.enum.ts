const listaNaturalidade: NaturalidadeEnum[] = [];

export class NaturalidadeEnum {
  static readonly ACRE = new NaturalidadeEnum(1, 'ACRE', 'AC');
  static readonly ALAGOAS = new NaturalidadeEnum(2, 'ALAGOAS', 'AL');
  static readonly AMAPA = new NaturalidadeEnum(3, 'AMAPÁ', 'AP');
  static readonly AMAZONAS = new NaturalidadeEnum(4, 'AMAZONAS', 'AM');
  static readonly BAHIA = new NaturalidadeEnum(5, 'BAHIA', 'BA');
  static readonly CEARA = new NaturalidadeEnum(6, 'CEARÁ', 'CE');
  static readonly DISTRITO_FEDERAL = new NaturalidadeEnum(
    7,
    'DISTRITO FEDERAL',
    'DF'
  );
  static readonly ESPIRITO_SANTO = new NaturalidadeEnum(
    8,
    'ESPÍRITO SANTO',
    'ES'
  );
  static readonly GOIAS = new NaturalidadeEnum(9, 'GOIÁS', 'GO');
  static readonly MARANHAO = new NaturalidadeEnum(10, 'MARANHÃO', 'MA');
  static readonly MATO_GROSSO = new NaturalidadeEnum(11, 'MATO GROSSO', 'MT');
  static readonly MATO_GROSSO_DO_SUL = new NaturalidadeEnum(
    12,
    'MATO GROSSO DO SUL',
    'MS'
  );
  static readonly MINAS_GERAIS = new NaturalidadeEnum(13, 'MINAS GERAIS', 'MG');
  static readonly PARA = new NaturalidadeEnum(14, 'PARÁ', 'PA');
  static readonly PARAIBA = new NaturalidadeEnum(15, 'PARAÍBA', 'PB');
  static readonly PARANA = new NaturalidadeEnum(16, 'PARANÁ', 'PR');
  static readonly PERNAMBUCO = new NaturalidadeEnum(17, 'PERNAMBUCO', 'PE');
  static readonly PIAUI = new NaturalidadeEnum(18, 'PIAUÍ', 'PI');
  static readonly RIO_DE_JANEIRO = new NaturalidadeEnum(
    19,
    'RIO DE JANEIRO',
    'RJ'
  );
  static readonly RIO_GRANDE_DO_NORTE = new NaturalidadeEnum(
    20,
    'RIO GRANDE DO NORTE',
    'RN'
  );
  static readonly RIO_GRANDE_DO_SUL = new NaturalidadeEnum(
    21,
    'RIO GRANDE DO SUL',
    'RS'
  );
  static readonly RONDONIA = new NaturalidadeEnum(22, 'RONDÔNIA', 'RO');
  static readonly RORAIMA = new NaturalidadeEnum(23, 'RORAIMA', 'RR');
  static readonly SANTA_CATARINA = new NaturalidadeEnum(
    24,
    'SANTA CATARINA',
    'SC'
  );
  static readonly SAO_PAULO = new NaturalidadeEnum(25, 'SÃO PAULO', 'SP');
  static readonly SERGIPE = new NaturalidadeEnum(26, 'SERGIPE', 'SE');
  static readonly TOCANTINS = new NaturalidadeEnum(27, 'TOCANTINS', 'TO');

  private constructor(
    public readonly id: number,
    public readonly descricao: string,
    public readonly uf: string
  ) {
    listaNaturalidade.push(this);
  }

  public static getAllValues(): NaturalidadeEnum[] {
    return listaNaturalidade;
  }

  public static getById(id: number): NaturalidadeEnum | undefined {
    return listaNaturalidade.find((naturalidade) => naturalidade.id === id);
  }

  public static getByDescricao(
    descricao: string
  ): NaturalidadeEnum | undefined {
    return listaNaturalidade.find(
      (naturalidade) => naturalidade.descricao === descricao
    );
  }
}
