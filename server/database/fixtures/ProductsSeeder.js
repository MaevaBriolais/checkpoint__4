const AbstractSeeder = require("./AbstractSeeder");

const URL = `http://localhost:${process.env.APP_PORT}`;

class ProductsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "products", truncate: true });
  }

  async run() {
    const products = [
      {
        name: "Tarte citron / noisette",
        description:
          "Une tarte au citron noisette se compose d'une pâte sablée aux noisettes, garnie d'une crème au citron onctueuse et acidulée, faite de jus et zeste de citron, sucre, oeufs et beurre, offrant un mariage de saveurs.",
        price: 15.0,
        flavor: "Agrumes",
        allergen: "Lactose, Oeufs et fruits à coque",
        icon: `${URL}/public/assets/images/tarte_citron_noisette.png`,
      },
      {
        name: "Tarte snickers",
        description:
          "Une tarte gourmande avec une base sablée croustillante, garnie de caramel fondant et de cacahuètes grillées. Recouverte d'une ganache au chocolat au lait et parsemée de morceaux de barres Snickers, elle offre une explosion de saveurs sucrées et croquantes à chaque bouchée.",
        price: 25.0,
        flavor: "Gourmand",
        allergen: "Lactose, Oeufs, Cacahuètes, Gluten",
        icon: "../../public/assets/images/tarte_snickers.png",
      },
      {
        name: "Boule de chocolat",
        description:
          "une sphère gourmande, alliant un cœur fondant de chocolat noir intense à une coque croquante. Sublimé par une fine couche de ganache, il ravira les palais des amateurs de cacao.",
        price: 5.0,
        flavor: "Chocolat",
        allergen:
          "Lait, soja, gluten, œufs, et peut contenir des traces de fruits à coque et d'arachides",
        icon: "../../public/assets/images/BouleChocolat.png",
      },
    ];

    products.forEach((product) => {
      this.insert(product);
    });

    // await Promise.all(this.promises);
    // console.log('Products successfully seeded');
  }
}

module.exports = ProductsSeeder;
