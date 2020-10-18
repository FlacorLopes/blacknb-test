import { useState } from 'react';
import styles from './mainSection.module.css';

export default function CompanyFigures({ pictures }) {
  const [selectedPicture, setSelectedPicture] = useState(pictures[0].name);

  return (
    <figure className={styles.figureContainer}>
      <button type="button">
        <img
          src={selectedPicture}
          alt="lead image"
          className={styles.figureBg}
        />
      </button>
      <div className={styles.thumbnailsContainer}>
        <div className={styles.thumbnails}>
          {pictures.map((img) => (
            <img
              key={img.name}
              src={img.name}
              alt="image thumbnail"
              onClick={() => setSelectedPicture(img.name)}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
