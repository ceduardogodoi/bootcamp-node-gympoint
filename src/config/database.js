module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timestamps: true, // cria timestamps para criação e alteração de dados
    underscored: true, // cria nome das tabelas no padrão underscored
    underscoredAll: true // cria nome das colunas no padrão underscored
  }
};
