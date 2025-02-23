import { DadosContato, DadosEndereco, DadosPessoais } from "../models";

export class DadosAlunoDto {
    public dadosPessoais!: DadosPessoais;
    public dadosEndereco!: DadosEndereco;
    public dadosContato!: DadosContato;
}
