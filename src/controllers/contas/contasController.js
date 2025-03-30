import createConta from "./createConta.js";
import deleteConta from "./deleteConta.js";
import getAllConta from "./getAllConta.js";
import getConta from "./getConta.js";
import templateConta from "./templateConta.js";
import updateConta from "./updateConta.js";

const contasController = {
    create: createConta,
    getAll: getAllConta,
    template: templateConta,
    getOne: getConta,
    update: updateConta,
    delete: deleteConta
}

export default contasController;