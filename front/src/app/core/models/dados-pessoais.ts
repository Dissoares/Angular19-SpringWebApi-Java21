import { EstadoCivilEnum, TipoSexoEnum, UfEnum } from '../enums';
import { DadosEndereco } from './dados-endereco';
import { DadosContato } from './dados-contato';
export class DadosPessoais {
  public id!: number;
  public nome!: string;
  public cpf!: string;
  public dataNascimento!: string;
  public sexo!: TipoSexoEnum;
  public estadoCivil!: EstadoCivilEnum;
  public uf!: UfEnum;
  public contato!: DadosContato;
  public endereco!: DadosEndereco;
  public ativo!: boolean;

  constructor(init?: Partial<DadosPessoais>) {
    Object.assign(this, init);
  }
}
