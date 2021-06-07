db.voos.find({
  $and: [{ litrosCombustivel: { $exists: 1 } }, { litrosCombustivel: { $lte: 1000 } }],
}, { _id: 0, vooId: 1, litrosCombustivel: 1 }).limit(1);
