import { useState } from 'react';
import classNames from 'classnames';
import Styles from './Gallery.module.css';

export const Gallery = () => {
  const [activeThumbnailNumber, setActiveThumbnailNumber] = useState(1);
  const { active, gallery, item, thumbnail, mainImg, foregroundImg } = Styles;
  const clickHandler = (thumbnailNumber: number) => {
    setActiveThumbnailNumber(thumbnailNumber);
  };

  return (
    <>
      <img
        className={mainImg}
        src={`src/assets/hero/slides/${activeThumbnailNumber}-background.png`}
        alt={`Rico Dog slide ${activeThumbnailNumber}`}
      />

      {activeThumbnailNumber === 1 ? (
        <img
          className={foregroundImg}
          src={`src/assets/hero/slides/${activeThumbnailNumber}-foreground-cutout.png`}
          alt="Rico Dog"
        />
      ) : null}

      <ul className={gallery}>
        {[1, 2, 3, 4, 5, 6].map((thumbnailNumber) => (
          <li
            className={classNames(item, activeThumbnailNumber === thumbnailNumber ? active : null)}
            onClick={() => clickHandler(thumbnailNumber)}
          >
            <img
              src={`src/assets/hero/thumbnails/${thumbnailNumber}-thumbnail.png`}
              alt={`Rico Dog pose ${thumbnailNumber}`}
              className={thumbnail}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
