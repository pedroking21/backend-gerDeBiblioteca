import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Representa um registro de empréstimo de livro.
 */
export class Emprestimo {

    /* Propriedades */
    /* Código de identificação do empréstimo */
    private idEmprestimo: number = 0;
    /* Código de identificação do aluno */
    private idAluno: number;
    /* Código de identificação do livro */
    private idLivro: number;
    /* Data em que o empréstimo foi realizado */
    private dataEmprestimo: Date;
    /* Data prevista para devolução */
    private dataDevolucao: Date;
    /* Situação atual do empréstimo */
    private statusEmprestimo: Date;

    /**
     * Constrói um novo empréstimo.
     * 
     * @param idAluno Código do aluno que realizou o empréstimo
     * @param idLivro Código do livro emprestado
     * @param dataEmprestimo Data em que o empréstimo ocorreu
     * @param dataDevolucao Data prevista para devolução
     * @param statusEmprestimo Situação atual do empréstimo
     */
    constructor(
        idAluno: number,
        idLivro: number,
        dataEmprestimo: Date,
        dataDevolucao: Date,
        statusEmprestimo: Date
    ) {
        this.idAluno = idAluno;
        this.idLivro = idLivro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
        this.statusEmprestimo = statusEmprestimo;
    }

    /* Métodos de acesso e modificação */

    /**
     * Obtém o código do empréstimo.
     * @returns Código do empréstimo.
     */
    public getIdEmprestimo(): number {
        return this.idEmprestimo;
    }

    /**
     * Define o código do empréstimo.
     * @param idEmprestimo Novo código do empréstimo.
     */
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    /**
     * Obtém o código do aluno associado ao empréstimo.
     *
     * @returns Código do aluno.
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Define o código do aluno associado ao empréstimo.
     * 
     * @param idAluno Novo código do aluno.
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Obtém o código do livro associado ao empréstimo.
     *
     * @returns Código do livro.
     */
    public getIdLivro(): number {
        return this.idLivro;
    }

    /**
     * Define o código do livro associado ao empréstimo.
     * 
     * @param idLivro Novo código do livro.
     */
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    /**
     * Obtém a data em que o empréstimo foi realizado.
     *
     * @returns Data do empréstimo.
     */
    public getDataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    /**
     * Define a data em que o empréstimo foi realizado.
     * 
     * @param dataEmprestimo Nova data do empréstimo.
     */
    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    /**
     * Obtém a data prevista para devolução.
     *
     * @returns Data de devolução.
     */
    public getDataDevolucao(): Date {
        return this.dataDevolucao;
    }

    /**
     * Define a data prevista para devolução.
     * 
     * @param dataDevolucao Nova data de devolução.
     */
    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    /**
     * Obtém o status atual do empréstimo.
     *
     * @returns Status do empréstimo.
     */
    public getStatusEmprestimo(): Date {
        return this.statusEmprestimo;
    }

    /**
     * Define o status atual do empréstimo.
     * 
     * @param statusEmprestimo Novo status do empréstimo.
     */
    public setStatusEmprestimo(statusEmprestimo: Date): void {
        this.statusEmprestimo = statusEmprestimo;
    }

    /**
     * Lista todos os empréstimos cadastrados no banco de dados.
     * 
     * Realiza uma consulta na tabela `emprestimo` e retorna um array de objetos `Emprestimo`.
     * Retorna `null` em caso de falha na consulta.
     * 
     * @returns Lista de objetos `Emprestimo` ou `null` em caso de erro.
     */
    static async listarEmprestimos(): Promise<Array<Emprestimo> | null> {
        const listaDeEmprestimos: Array<Emprestimo> = [];

        try {
            const querySelectEmprestimos = `SELECT * FROM emprestimo;`;
            const respostaBD = await database.query(querySelectEmprestimos);

            respostaBD.rows.forEach((linha: { id_aluno: number; id_livro: number; data_emprestimo: string | number | Date; data_devolucao: string | number | Date; status_emprestimo: Date; id_emprestimo: number; }) => {
                const novoEmprestimo = new Emprestimo(
                    linha.id_aluno,
                    linha.id_livro,
                    new Date(linha.data_emprestimo),
                    new Date(linha.data_devolucao),
                    linha.status_emprestimo
                );

                novoEmprestimo.setIdEmprestimo(linha.id_emprestimo);

                listaDeEmprestimos.push(novoEmprestimo);
            });

            return listaDeEmprestimos;
        } catch (error) {
            console.log('Erro ao buscar lista de empréstimos');
            return null;
        }
    }

    /**
     * Realiza o cadastro de um novo empréstimo no banco de dados.
     * 
     * Insere os dados do novo empréstimo na tabela `emprestimo`. Retorna `true` se o registro for bem-sucedido, ou `false` se ocorrer um erro.
     * 
     * @param idAluno Código do aluno que fez o empréstimo.
     * @param idLivro Código do livro emprestado.
     * @param dataEmprestimo Data do empréstimo.
     * @param dataDevolucao Data prevista para devolução.
     * @param statusEmprestimo Status atual do empréstimo.
     * 
     * @returns `true` se o cadastro foi realizado com sucesso, ou `false` em caso de erro.
     */
    static async cadastrarEmprestimo(idAluno: number, idLivro: number, dataEmprestimo: Date, dataDevolucao: Date, statusEmprestimo: string): Promise<boolean> {
        try {
            const queryInsertEmprestimo = `INSERT INTO emprestimo (id_aluno, id_livro, data_emprestimo, data_devolucao, status_emprestimo)
                                           VALUES
                                           (${idAluno}, ${idLivro}, '${dataEmprestimo.toISOString()}', '${dataDevolucao.toISOString()}', '${statusEmprestimo}')
                                           RETURNING id_emprestimo;`;

            const respostaBD = await database.query(queryInsertEmprestimo);
            if (respostaBD.rowCount != 0) {
                console.log(`Empréstimo cadastrado com sucesso. ID empréstimo: ${respostaBD.rows[0].id_emprestimo}`);
                return true;
            }

            return false;
        } catch (error) {
            console.log('Erro ao cadastrar o empréstimo. Consulte os logs para mais detalhes.');
            console.log(error);
            return false;
        }
    }
}
