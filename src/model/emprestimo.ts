export class Emprestimo {

    private idEmprestimo: number = 0; // Identificador único para o empréstimo
    private idAluno: number; // Identificador do aluno que fez o empréstimo
    private idLivro: number; // Identificador do livro emprestado
    private dataEmprestimo: Date; // Data em que o empréstimo foi feito
    private dataDevolucao: Date; // Data prevista para a devolução do livro
    private statusEmprestimo: string; // Status atual do empréstimo (ex: ativo, devolvido)

    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: string
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    public getIdEmprestimo(): number {
        return this.idEmprestimo; // Retorna o ID do empréstimo
    }

    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo; // Define um novo ID para o empréstimo
    }

    public getIdAluno(): number {
        return this.idAluno; // Retorna o ID do aluno
    }

    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno; // Atualiza o ID do aluno
    }

    public getIdLivro(): number {
        return this.idLivro; // Retorna o ID do livro
    }

    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro; // Atualiza o ID do livro
    }

    public getDataEmprestimo(): Date {
        return this.dataEmprestimo; // Retorna a data do empréstimo
    }

    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo; // Atualiza a data do empréstimo
    }

    public getDataDevolucao(): Date {
        return this.dataDevolucao; // Retorna a data de devolução
    }

    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao; // Atualiza a data de devolução
    }

    public getStatusEmprestimo(): string {
        return this.statusEmprestimo; // Retorna o status do empréstimo
    }

    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo; // Atualiza o status do empréstimo
    }
}
