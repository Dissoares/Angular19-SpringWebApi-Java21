import { DadosContato, DadosEndereco, DadosPessoais } from "../models";

export class DadosFormularioDto {
    public dadosPessoais!: DadosPessoais;
    public dadosEndereco!: DadosEndereco;
    public dadosContato!: DadosContato;
}
