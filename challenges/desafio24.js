db.voos.find({ 
  $and: [
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    { litrosCombustivel: { $exists: 1 } }, { litrosCombustivel: { $lte: 600 } },
  ] }, { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 }).limit(1);
