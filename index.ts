import AppDataSource from './data-source';

const initializeDB = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Banco de dados sincronizado com sucesso!');
 } captura (erro) {
 console. log(erro);
  }
};

 inicialização padrão de exportaçãoDB;
