export class Disciplina {
    codigo: number;
    nome: string;
    descricao: string;

    constructor(cod:number, nome: string, descricao?: string) {
        this.codigo = cod;
        this.nome = nome;
        this.descricao = descricao;
    }
}