const AbstractSeeder = require("./AbstractSeeder");

class ProductsSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "products", truncate: true });
  }

  async run() {
    const products = [
      {
        name: "Tarte citron / noisette",
        description: "Une tarte au citron noisette se compose d'une pâte sablée aux noisettes, garnie d'une crème au citron onctueuse et acidulée, faite de jus et zeste de citron, sucre, oeufs et beurre, offrant un mariage de saveurs.",
        price: 15.00,
        flavor: "Agrumes",
        allergen: "Lactose, Oeufs et fruits à coque",
        photo: "../public/assets/images/tarte_citron_noisette.jpeg"
      },
      {
        name: "Tarte snickers",
        description: "Une tarte gourmande avec une base sablée croustillante, garnie de caramel fondant et de cacahuètes grillées. Recouverte d'une ganache au chocolat au lait et parsemée de morceaux de barres Snickers, elle offre une explosion de saveurs sucrées et croquantes à chaque bouchée.",
        price: 25.00,
        flavor: "Gourmand",
        allergen: "Lactose, Oeufs, Cacahuètes, Gluten",
        photo: "../public/assets/images/tarte_snickers.jpeg"
      },
      {
        name: "Boule de chocolat",
        description: "une sphère gourmande, alliant un cœur fondant de chocolat noir intense à une coque croquante. Sublimé par une fine couche de ganache, il ravira les palais des amateurs de cacao.",
        price: 5.00,
        flavor: "Chocolat",
        allergen: "Lait, soja, gluten, œufs, et peut contenir des traces de fruits à coque et d'arachides",
        photo: "../public/assets/images/BouleChocolat.jpeg"
      }
    ];

    products.forEach(product => {
      this.insert(product);
    });

    // await Promise.all(this.promises);
    // console.log('Products successfully seeded');
  }
}

module.exports = ProductsSeeder;
