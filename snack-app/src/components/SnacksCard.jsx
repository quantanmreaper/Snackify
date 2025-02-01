import React from "react";

const snacksData = [
  {
    id: 1,
    name: "Sev",
    description: "Crispy and delicious traditional Indian snack.",
    price: "Ksh50",
    image: "/assets/images/sev.jpeg",
  },
  {
    id: 2,
    name: "Nuts",
    description: "Roasted nuts seasoned with authentic spices.",
    price: "Ksh120",
    image: "/assets/images/nuts.jpeg",
  },
  {
    id: 3,
    name: "Chakri",
    description: "Spicy and crunchy chakri, perfect for tea time.",
    price: "Ksh70",
    image: "/assets/images/chakri.jpeg",
  },
  {
    id: 4,
    name: "Peanut Chikki",
    description: "Sweet and nutty peanut chikki made with jaggery.",
    price: "Ksh80",
    image: "/assets/images/peanutchiki.jpeg",
  },
  {
    id: 5,
    name: "Sev",
    description: "Crispy and delicious traditional Indian snack.",
    price: "Ksh50",
    image: "/assets/images/sev.jpeg",
  },
  {
    id: 6,
    name: "Nuts",
    description: "Roasted nuts seasoned with authentic spices.",
    price: "Ksh120",
    image: "/assets/images/nuts.jpeg",
  },
  {
    id: 7,
    name: "Chakri",
    description: "Spicy and crunchy chakri, perfect for tea time.",
    price: "Ksh70",
    image: "/assets/images/chakri.jpeg",
  },
  {
    id: 8,
    name: "Peanut Chikki",
    description: "Sweet and nutty peanut chikki made with jaggery.",
    price: "Ksh80",
    image: "/assets/images/peanutchiki.jpeg",
  },
  // Add more snacks here...
];

const Snacks = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Our Snacks</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {snacksData.map((snack) => (
          <div
            key={snack.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={snack.image}
              alt={snack.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{snack.name}</h3>
            <p className="text-gray-600 mb-4">{snack.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-green-600 font-bold">{snack.price}</span>
              <button className="bg-yellow-300 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Snacks;
