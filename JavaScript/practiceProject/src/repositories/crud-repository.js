const { Logger } = require("../../../Flights/src/config");

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
            const response = await this.model.create(data);
            return response;
    }

    async destroy(id) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: id
                }
            })
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : destroy");
            throw error;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : get");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in Crud Repo : getAll");
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Somrething went wrong in Crud Repo : update");
        }
    }
}

module.exports = CrudRepository;