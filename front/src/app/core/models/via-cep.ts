export class ViaCep {
  public cep!: string;
  public logradouro!: string;
  public bairro!: string;
  public complemento!: string;
  public localidade!: string;
  public estado!: string;
  public uf!: string;

  constructor(init?: Partial<ViaCep>) {
    Object.assign(this, init);
  }
}
