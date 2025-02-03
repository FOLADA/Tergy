import React from 'react';
import './Offers.css';

interface InfoBoxProps {
  image: string;
  title: string;
  paragraph: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ image, title, paragraph }) => (
  <div className="info-box">
    <img src={image} alt={title} className="info-box-image" />
    <h3 className="info-box-title"><strong>{title}</strong></h3>
    <p className="info-box-paragraph"><strong>{paragraph}</strong></p>
  </div>
);

const WhatWeOffer: React.FC = () => {
  return (
<>
<h1 className='offers-h1'>რას გთავაზობთ?</h1>
<div className="info-container">
      <InfoBox 
        image="book.jpg"
        title="ნაწარმოებანი" 
        paragraph="პერიფრაზირებული, ვიზიუალური და ვერბალიზებული ნაწარმოებები, წაკითხულის გააზრების ტესტებითა და სწავლის გეგმით." 
      />
      <InfoBox 
        image="qoutes.png" 
        title="ციტატები" 
        paragraph="ციტატები სხვადასხვა ნაწარმოებებიდან, რათა გაგივითარდეს რიტორიკა და თემის წერის უნარი" 
      />
      <InfoBox 
        image="essayst.webp" 
        title="ესეისტი AI" 
        paragraph="ესეისტი AI, რომელიც შეგიმოწმებს თემას და მოგცემს საუკეთესო რჩევებს, რათა თვით გიორგი ლეონიძეს დონეს მიაღწიო" 
      />
    </div>
</>
  );
};

export default WhatWeOffer;
