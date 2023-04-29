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

    const ratingChanged = (newRating) => {
      setStars(newRating)
    }

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
                <SC.Textarea onChange={(e) => setReview(e.target.value)} value={review} name='review'  maxLength="200" cols="30" rows="7"></SC.Textarea>
             </SC.Label>
            <div style={{marginBottom: "20px"}}>
            <ReactStars
            half={false}
            size={24}
            onChange={ratingChanged}
            />
            </div>
          <SC.Button type="submit" disabled={isLoading || review==='' ||stars===''} > {t('Add review')}</SC.Button>
        </SC.Form>
    )
}