import { useState } from 'react';
import { useAddReviewMutation } from '../../redux/review/reviewOperations';

export const AddReview = () => {
    const [addReview, { isLoading }] = useAddReviewMutation();
    const [review, setReview] = useState('');
    const [stars, setStars] = useState('')

    const handlInputChange = evt => {
        const field = evt.target;
        switch (field.name) {
          case 'review':
            return setReview(field.value);
          case 'stars':
            return setStars(field.value);
          default:
            return;
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        addReview({reviewText: review, stars})
    }

    return (
        <form onClick={handleSubmit}>
            <label>
                leave your review
                <textarea onChange={handlInputChange} value={review} name='review' disabled={isLoading} maxlength="189" cols="25" rows="7"></textarea>
             </label>
            <label>
                stars
                <input onChange={handlInputChange} type="number" value={stars} name='stars' min='1' max='5' />
            </label>
            {/* <label>
            <input type="radio"  
            name="stars" value="1"/>
            1</label>
            <label>
            <input type="radio"  
            name="stars" value="2"/>
            2</label>
            <label>
            <input type="radio"  
            name="stars" value="3"/>
            3</label>
            <label>
            <input type="radio"  
            name="stars" value="4"/>
            4</label>
            <label>
            <input type="radio"  
            name="stars" value="5"/>
            5</label> */}
          <button type="submit">add review</button>
        </form>
    )
}