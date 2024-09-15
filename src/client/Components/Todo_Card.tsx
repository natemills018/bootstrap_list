import React, { useState, useEffect } from 'react';

const RandomImageCard = () => {


  const imageArray = [
    '../images/arts.png',
    '../images/man.png',
    '../images/shield.png',
    '../images/superhero.png',
  ];

  const [randomImage, setRandomImage] = useState('');

  useEffect(() => {
    const selectedImage = getRandomImage(imageArray);
    setRandomImage(selectedImage);
  }, []);

  function getRandomImage(images: string | any[]) {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={randomImage} className="card-img-top" alt="Random" />
      <div className="card-body">
        <h5 className="card-title">Random Image Card</h5>
        <p className="card-text">This card displays a randomly selected image from an array of images.</p>
      </div>
    </div>
  );
};

export default RandomImageCard;