import { useState } from 'react';
import { useAddReviewMutation } from '../../redux/review/reviewOperations';
import * as SC from './addReview.styled';

export const AddReview = () => {
    const [addReview, { isLoading }] = useAddReviewMutation();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('')

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
                leave your review
                <textarea onChange={handlInputChange} value={review} name='review'  maxlength="189" cols="25" rows="7"></textarea>
             </SC.Label>
            <SC.Label>
                stars
                <input onChange={handlInputChange} type="number" value={stars} name='stars' min='1' max='5' />
            </SC.Label>
          <SC.Button type="submit" disabled={isLoading || review==='' ||stars===''} >add review</SC.Button>
        </SC.Form>
    )
}