export class Disciplina {
    codigo: number;
    nome: string;
    descricao: string;
    data: string;
    ativo: boolean;
    tipo: string;
    periodo: string;

    constructor(cod: number, nome: string, descricao?: string, data?: string, ativo?: boolean, tipo?: string, periodo?: string) {
        this.codigo = cod;
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.ativo = ativo;
        this.tipo = tipo;
        this.periodo = periodo;
    }
}
