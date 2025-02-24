export class DadosContato {
  public id!: number;
  public email!: string;
  public confirmacaoEmail!: string;
  public tipoTelefone!: number;
  public numero!: string;
  public ativo!: boolean;

  constructor(init?: Partial<DadosContato>) {
    Object.assign(this, init);
  }
}
