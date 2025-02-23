export class DadosContato {
  public id!: number;
  public email!: string;
  public telefone!: string;
  public tipoTelefone!: number;
  public ativo!: boolean;

  constructor(init?: Partial<DadosContato>) {
    Object.assign(this, init);
  }
}
