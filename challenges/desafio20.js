db.voos.find({ rtk: { $exists: 0 } }, { _id: 0, vooId: 1 }).limit(1);
