import { ChangeEvent, useState } from 'react';
import { useAddReviewMutation } from '../../redux/review/reviewOperations';
import { Rating } from 'react-simple-star-rating';
import * as SC from './addReview.styled';
import { useTranslation } from 'react-i18next';

export const AddReview = () => {
  const [addReview, { isLoading }] = useAddReviewMutation();
  const [review, setReview] = useState('');
  const [stars, setStars] = useState(0);
  const { t } = useTranslation();

  const handleRating = (rate: number) => {
    setStars(rate);
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    addReview({ reviewText: review, stars });
    setReview('');
    setStars(0);
  };

  return (
    <SC.Form onSubmit={handleSubmit}>
      <SC.Label>
        {t('Leave your review')}
        <SC.Textarea
          onChange={handleInputChange}
          value={review}
          name="review"
          maxLength={200}
          cols={30}
          rows={7}
        ></SC.Textarea>
      </SC.Label>
      <div style={{ marginBottom: '20px' }}>
        <Rating
          onClick={handleRating}
          ratingValue={stars}
          size={20}
          label
          transition
          fillColor="orange"
          emptyColor="gray"
          className="foo"
        />
      </div>
      <SC.Button
        type="submit"
        disabled={isLoading || review === '' || stars === 0}
      >
        {t('Add review')}
      </SC.Button>
    </SC.Form>
  );
};
