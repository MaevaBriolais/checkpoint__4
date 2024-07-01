const AbstractRepository = require("./AbstractRepository");

class ProductsRepository extends AbstractRepository {
  constructor() {
    super({ table: "products" });
  }

  // The C of CRUD - Create operation

  async create(products) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, price, flavor, allergen, photo) values (?, ?, ?, ?, ?, ? )`,
      [
        products.name,
        products.description,
        products.price,
        products.flavor,
        products.allergen,
        products.photo,
      ]
    );

    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);

    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing pizza

  // async update(products) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an pizza by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = ProductsRepository;
