import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/all';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface StarReviewProps extends React.HTMLAttributes<'section'> {
  // eslint-disable-next-line react/require-default-props
  starSize?: number;
  onChangeStars: (starNumber: number) => void;
}

const StarReview: React.FC<StarReviewProps> = ({
  starSize = 0,
  onChangeStars,
}): JSX.Element => {
  const handleReviewStar = (e: React.FormEvent<HTMLElement>, value: number) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    onChangeStars(value);
  };

  const [sizeStarHover, setSizeStarHover] = useState(0);
  const arrayStars = [1, 2, 3, 4, 5];

  return (
    <section className="flex items-center">
      <form className="flex text-yellow-dark">
        {arrayStars.map((item) => {
          if (sizeStarHover === 0) {
            if (starSize < item) {
              return (
                <button
                  onMouseMove={() => {
                    if (starSize === item) return;
                    setSizeStarHover(item);
                  }}
                  onMouseLeave={() => setSizeStarHover(0)}
                  type="submit"
                  onClick={(e) => handleReviewStar(e, item)}
                >
                  <AiOutlineStar />
                </button>
              );
            }
            return (
              <button
                onMouseMove={() => {
                  if (starSize === item) return;
                  setSizeStarHover(item);
                }}
                onMouseLeave={() => setSizeStarHover(0)}
                type="submit"
                onClick={(e) => handleReviewStar(e, item)}
              >
                <AiFillStar />
              </button>
            );
          }
          if (sizeStarHover < item) {
            return (
              <button
                onMouseMove={() => {
                  if (sizeStarHover === item) return;
                  setSizeStarHover(item);
                }}
                onMouseLeave={() => setSizeStarHover(0)}
                type="submit"
                onClick={(e) => handleReviewStar(e, item)}
              >
                <AiOutlineStar />
              </button>
            );
          }
          return (
            <button
              onMouseMove={() => {
                if (sizeStarHover === item) return;
                setSizeStarHover(item);
              }}
              onMouseLeave={() => setSizeStarHover(0)}
              type="submit"
              onClick={(e) => handleReviewStar(e, item)}
            >
              <AiFillStar />
            </button>
          );
        })}
      </form>
      <span className="text-sm">(4.23)</span>
    </section>
  );
};
export default StarReview;
