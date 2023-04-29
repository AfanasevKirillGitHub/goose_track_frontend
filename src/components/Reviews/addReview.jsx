import { useState } from 'react';
import { useAddReviewMutation } from '../../redux/review/reviewOperations';
import ReactStars from 'react-stars'
import * as SC from './addReview.styled';
import { useTranslation } from 'react-i18next';

export const AddReview = () => {
    const [addReview, { isLoading }] = useAddReviewMutation();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('');
    const { t } = useTranslation();

    const handlInputChange = evt => {
        const {value,name} = evt.target;
        switch (name) {
          case 'review':
            return setReview(value);
          case 'stars':
            return setStars(value);
          default:
            return;
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addReview({reviewText: review, stars})
        setReview('');
        setStars('');
    }

    return (
        <SC.Form onSubmit={handleSubmit}>
            <SC.Label>
            {t('Leave your review')}
                <SC.Textarea onChange={handlInputChange} value={review} name='review'  maxLength="200" cols="30" rows="7"></SC.Textarea>
             </SC.Label>
            <SC.Label>
            {t('Rating (1-5)')}
                <SC.Rating onChange={handlInputChange} type="number" value={stars} name='stars' min='1' max='5' />
            </SC.Label>
          <SC.Button type="submit" disabled={isLoading || review==='' ||stars===''} > {t('Add review')}</SC.Button>
        </SC.Form>
    )
}