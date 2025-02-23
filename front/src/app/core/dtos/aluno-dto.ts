import { DadosContato, DadosEndereco, DadosPessoais } from "../models";

export class AlunoDto {
    public dadosPessoais!: DadosPessoais;
    public dadosEndereco!: DadosEndereco;
    public dadosContato!: DadosContato;
}
