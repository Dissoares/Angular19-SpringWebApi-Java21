export class DadosEndereco {
  public id!: number;
  public logradouro!: string;
  public complemento!: string;
  public numero!: string;
  public cep!: string;
  public bairro!: string;
  public cidade!: string;
  public estado!: string;
  public pais!: string;
  public ativo!: boolean;

  constructor(init?: Partial<DadosEndereco>) {
    Object.assign(this, init);
  }
}
