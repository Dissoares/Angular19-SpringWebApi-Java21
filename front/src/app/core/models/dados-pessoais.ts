import { DadosEndereco } from './dados-endereco';
import { DadosContato } from './dados-contato';
import { TipoSexoEnum } from '../enums';
export class DadosPessoais {
  public id!: number;
  public nome!: string;
  public cpf!: string;
  public dataNascimento!: Date;
  public sexo!: TipoSexoEnum;
  public contato!: DadosContato;
  public endereco!: DadosEndereco;
  public ativo!: boolean;

  constructor(init?: Partial<DadosPessoais>) {
    Object.assign(this, init);
  }
}
