import { Request, Response } from "express";
import { Livro } from "../model/Livro";

interface LivroDTO {
    titulo: string,
    autor: string,
    editora: string,
    anoPublicacao: Date,
    isbn: string,
    quantTotal: number,
    quantDisponivel: number,
    valorAquisicao: number,
    statusLivroEmprestado: string
}

/**
 * A classe `LivroController` estende a funcionalidade da classe `Livro` e gerencia as operações para os livros.
 * 
 * - Atua como controlador na API REST, manipulando as ações relacionadas aos livros.
 * - Ao herdar de `Livro`, ela tem acesso a métodos e atributos da classe original.
 */
export class LivroController extends Livro {

    /**
    * Retorna a lista completa dos livros.
    * @param req Objeto de entrada da requisição HTTP.
    * @param res Objeto de saída da resposta HTTP.
    * @returns JSON contendo os livros e o status 200 se bem-sucedido.
    * @throws Retorna um status 400 e uma mensagem caso ocorra uma falha na listagem dos livros.
    */
    static async listar(req: Request, res: Response): Promise<any> {
        try {
            // Chama a função para listar os livros e armazena o retorno
            const listaDeLivros = await Livro.listarLivro();

            // Envia a lista de livros na resposta da requisição
            return res.status(200).json(listaDeLivros);
        } catch (error) {
            // Mostra uma mensagem de erro no console
            console.log('Falha ao obter a lista de livros');

            // Retorna uma resposta de erro para o solicitante
            return res.status(400).json({ mensagem: "Não foi possível acessar a listagem de livros" });
        }
    }

    /**
    * Controlador responsável por cadastrar um novo livro.
    * 
    * Esta função recebe os dados de um livro na requisição e tenta registrá-lo no sistema 
    * através do método `cadastroLivro`. Se bem-sucedida, retorna um status 200 com confirmação. Caso contrário, retorna um status 400 com erro.
    * 
    * @param {Request} req - Objeto de requisição HTTP, com os dados do livro no formato `LivroDTO`.
    * @param {Response} res - Objeto de resposta HTTP para enviar o status e a mensagem ao aluno.
    * @returns {Promise<Response>} - Resposta com status 200 em caso de sucesso ou 400 para erro.
    * 
    * @throws {Error} - Se ocorrer um erro no cadastro, exibe uma mensagem no console e retorna status 400 ao aluno.
    */
    static async cadastro(req: Request, res: Response): Promise<any> {
        try {
            // Extrai os dados do livro do corpo da requisição e os coloca no formato LivroDTO
            const livroRecebido: LivroDTO = req.body;

            // Cria uma nova instância de livro com os dados recebidos
            const novoLivro = new Livro(
                livroRecebido.titulo,
                livroRecebido.autor,
                livroRecebido.editora,
                livroRecebido.anoPublicacao,
                livroRecebido.isbn,
                livroRecebido.quantTotal,
                livroRecebido.quantDisponivel,
                livroRecebido.valorAquisicao,
                livroRecebido.statusLivroEmprestado
            );

            // Executa o método de cadastro com o novo objeto
            const respostaClasse = await Livro.cadastrarLivro(novoLivro);

            // Avalia o retorno do método de cadastro
            if (respostaClasse) {
                // Envia uma mensagem de sucesso na resposta
                return res.status(200).json({ mensagem: "Livro cadastrado com sucesso!" });
            } else {
                // Envia uma mensagem de erro na resposta
                return res.status(400).json({ mensagem: "Erro ao cadastrar o livro. Entre em contato com o administrador do sistema." });
            }
        } catch (error) {
            // Exibe mensagem de erro no console
            console.log(`Falha no cadastro do livro. ${error}`);

            // Retorna uma mensagem de erro ao aluno
            return res.status(400).json({ mensagem: "Não foi possível cadastrar o livro. Entre em contato com o administrador do sistema." });
        }
    }
}
