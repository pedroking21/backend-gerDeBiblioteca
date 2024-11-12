import { query } from "express";
import { DatabaseModel } from "./DatabaseModel";
import { inspect } from "util";

const database = new DatabaseModel().pool;

/** 
 * Classe que define o modelo de um aluno
 */
export class Aluno {

    /* Campos de dados */
    /* Identidade única do aluno */
    private idAluno: number = 0;
    /* Registro Acadêmico do aluno */
    private ra: string = "";
    /* Primeiro nome do aluno */
    private nome: string;
    /* Último nome do aluno */
    private sobrenome: string;
    /* Data de nascimento do aluno */
    private dataNascimento: Date;
    /* Endereço residencial do aluno */
    private endereco: string;
    /* Endereço de email do aluno */
    private email: string;
    /* Número de celular do aluno */
    private celular: string;

    /**
     * Método construtor da classe Aluno
     * 
     * @param nome Primeiro nome do aluno
     * @param sobrenome Último nome do aluno
     * @param dataNascimento Data de nascimento
     * @param endereco Endereço residencial
     * @param email Endereço de email
     * @param celular Número de celular
     */
    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos acessores */
    /**
     * Retorna o ID do aluno
     * @returns o identificador do aluno
     */
    public getIdAluno(): number {
        return this.idAluno;
    }

    /**
     * Define o valor do ID do aluno
     * @param idAluno novo ID a ser atribuído
     */
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    /**
     * Recupera o RA do aluno.
     *
     * @returns {string} O RA atual.
     */
    public getRa(): string {
        return this.ra;
    }

    /**
     * Atribui o RA do aluno.
     * 
     * @param ra - Novo valor de RA.
     */
    public setRa(ra: string): void {
        this.ra = ra;
    }

    /**
     * Retorna o primeiro nome do aluno.
     *
     * @returns {string} Primeiro nome.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o primeiro nome do aluno.
     *
     * @param nome - Novo nome.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Obtém o sobrenome do aluno.
     *
     * @returns {string} Sobrenome.
     */
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do aluno.
     *
     * @param sobrenome - Novo sobrenome.
     */
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
     * Recupera a data de nascimento do aluno.
     *
     * @returns {Date} Data de nascimento.
     */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define uma nova data de nascimento para o aluno.
     * 
     * @param dataNascimento - Data de nascimento.
     */
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    /**
     * Retorna o endereço do aluno.
     *
     * @returns {string} Endereço atual.
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Atribui um novo endereço ao aluno.
     * 
     * @param endereco - Novo endereço.
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    /**
     * Recupera o endereço de email do aluno.
     *
     * @returns {string} Email atual.
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email do aluno.
     * 
     * @param email - Novo email.
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Retorna o número de celular do aluno.
     *
     * @returns {string} Celular atual.
     */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define o número de celular do aluno.
     * 
     * @param celular - Novo número de celular.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }

    /**
     * Consulta todos os registros de alunos no banco de dados.
     * 
     * Esta função obtém todos os dados na tabela `aluno` e retorna um array de objetos Aluno. 
     * Se houver falha na operação, retorna `null`.
     * 
     * @returns {Promise<Array<Aluno> | null>} - Lista de objetos Aluno ou `null` em caso de erro.
     */
    static async listarAlunos(): Promise<Array<Aluno> | null> {
        const listaDeAlunos: Array<Aluno> = [];

        try {
            const querySelectAluno = `SELECT * FROM aluno`;
            const respostaBD = await database.query(querySelectAluno);

            respostaBD.rows.forEach((linha) => {
                const novoAluno = new Aluno(
                    linha.nome,
                    linha.sobrenome,
                    new Date(linha.data_nascimento),
                    linha.endereco,
                    linha.email,
                    linha.celular
                );

                novoAluno.setIdAluno(linha.id_aluno);
                novoAluno.setRa(linha.ra)

                listaDeAlunos.push(novoAluno);
            });

            return listaDeAlunos;
        } catch (error) {
            console.log('Erro ao buscar lista de alunos. Verifique os logs para detalhes.');
            console.log(error);
            return null;
        }
    }

    /**
     * Insere um novo registro de aluno no banco de dados.
     * 
     * Recebe um objeto Aluno, extrai suas informações e executa um comando INSERT na tabela `aluno`.
     * Retorna `true` caso a inserção seja bem-sucedida, senão retorna `false`.
     * 
     * @param {Aluno} aluno - Objeto que contém os dados a serem inseridos.
     * 
     * @returns {Promise<boolean>} - Retorna `true` se a operação foi bem-sucedida, ou `false` em caso de erro.
     */
    static async cadastrarAluno(aluno: Aluno): Promise<boolean> {
        try {
            const queryInsertAluno = `INSERT INTO aluno (nome, sobrenome, data_nascimento, endereco, email, celular)
                                      VALUES
                                      ('${aluno.getNome()}',
                                       '${aluno.getSobrenome()}',
                                       '${aluno.getDataNascimento()}',
                                       '${aluno.getEndereco()}',
                                       '${aluno.getEmail()}',
                                       '${aluno.getCelular()}')
                                      RETURNING id_aluno;`;

            const respostaBD = await database.query(queryInsertAluno);

            if (respostaBD.rowCount != 0) {
                console.log(`Novo aluno registrado. ID: ${respostaBD.rows[0].id_aluno}`);
                return true;
            }

            return false;
        } catch (error) {
            console.log('Erro ao inserir aluno no sistema. Verifique os detalhes nos logs.');
            console.log(error);
            return false;
        }
    }
}
