import { EstadoCivilEnum, NaturalidadeEnum, TipoSexoEnum } from '../enums';
import { DadosEndereco } from './dados-endereco';
import { DadosContato } from './dados-contato';
export class DadosPessoais {
  public id!: number;
  public nome!: string;
  public sobrenome!: string;
  public cpf!: string;
  public dataNascimento!: Date;
  public sexo!: TipoSexoEnum;
  public estadoCivil!: EstadoCivilEnum;
  public naturalidade!: NaturalidadeEnum;
  public contato!: DadosContato;
  public endereco!: DadosEndereco;
  public ativo!: boolean;

  constructor(init?: Partial<DadosPessoais>) {
    Object.assign(this, init);
  }
}
