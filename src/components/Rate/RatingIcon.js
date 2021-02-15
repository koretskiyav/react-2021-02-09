import React from 'react';
import StarIcon from './StarIcon';

const RateIcon = ({ index, rating }) => {
  const fill = React.useMemo(() => {
    if (rating >= index) {
      return '#ffc107';
    }
    return '#cecece';
  }, [rating, index]);

  return <StarIcon fill={fill} />;
};

export default RateIcon;
