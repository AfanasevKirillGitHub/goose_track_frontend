import { useState } from 'react';
import { useAddReviewMutation } from '../../redux/review/reviewOperations';

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
        <form onSubmit={handleSubmit}>
            <label>
                leave your review
                <textarea onChange={handlInputChange} value={review} name='review'  maxlength="189" cols="25" rows="7"></textarea>
             </label>
            <label>
                stars
                <input onChange={handlInputChange} type="number" value={stars} name='stars' min='1' max='5' />
            </label>
          <button type="submit" disabled={isLoading || review==='' ||stars===''} >add review</button>
        </form>
    )
}