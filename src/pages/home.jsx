import React, { useState } from "react";
import Card from "./../components/Card";
import Modal from "../components/Modal";
import Cardimg1 from "../img/Card-1.jpg";
import Cardimg2 from "../img/Card-2.jpg";
import Cardimg3 from "../img/Card-3.jpg";

const Home = () => {
  const [activeCard, setActiveCard] = useState(null);

  const openModal = (cardIndex) => {
    setActiveCard(cardIndex);
  };

  const closeModal = () => {
    setActiveCard(null);
  };

  const cardsData = [
    {
      img: Cardimg1,
      title: "Discover the Wonders of Thailand",
      description:
        "Embark on an adventure to Thailand's tropical paradise. Enjoy the stunning beaches, visit ancient temples, savor delicious street food, and explore the rich culture of this Southeast Asian.",
      price: "$1,499",
    },
    {
      img: Cardimg2,
      title: "Explore the Magic of Venice",
      description:
        "Immerse yourself in the breathtaking wildlife of Kenya. Witness the Big Five on thrilling safaris, interact with local tribes, and stay in luxurious eco-friendly lodges. An unforgettable African experience awaits.",
      price: "$2,299",
    },
    {
      img: Cardimg3,
      title: "Safari Adventure in Kenya",
      description:
        "Experience the enchanting canals, historic architecture, and vibrant culture of Venice. This package includes guided tours of iconic landmarks, romantic gondola rides, and a taste of authentic Italian cuisine.",
      price: "$3,599",
    },
  ];

  return (
    <div>
      <div className="flex justify-center pt-10">
        <h1 className="text-3xl font-medium">Home Page</h1>
      </div>
      <div className="flex justify-evenly mt-10">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
            price={card.price}
            onButtonClick={() => openModal(index)}
          />
        ))}
      </div>
      {activeCard !== null && (
        <Modal
          isOpen={true}
          closeModal={closeModal}
          title={cardsData[activeCard].title}
          content={cardsData[activeCard].description}
          price={cardsData[activeCard].price}
          img={cardsData[activeCard].img}
        />
      )}
    </div>
  );
};

export default Home;
