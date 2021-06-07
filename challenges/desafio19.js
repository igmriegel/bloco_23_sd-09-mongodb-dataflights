db.voos.find({ litrosCombustivel: { $exists: 1 } }, { _id: 0, vooId: 1 }).limit(1);
