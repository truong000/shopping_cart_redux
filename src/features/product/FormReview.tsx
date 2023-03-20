import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import './FormReview.css';
import { reviewProduct } from './productSlice';


const Review: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const reviews = useSelector((state: RootState) => state.product.productDetail.reviews)
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleInputReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setReview(e.target.value);
    }

    const clickSubmitReviewBtn = () => {
        const newReview = { nameCustomer: name, textReview: review };
        dispatch(reviewProduct(newReview))
    }

    return (
        <form action="">
            <div className="row">
                <div className="col-25">
                    <label>Name</label>
                </div>
                <div className="col-75">
                    <input
                        type="text"
                        placeholder="Your name.."
                        value={name}
                        onChange={handleInputName}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-25">
                    <label>Review</label>
                </div>
                <div className="col-75">
                    <textarea
                        placeholder="Your review.."
                        value={review}
                        onChange={handleInputReview}
                    >
                    </textarea>
                </div>
            </div>
            <div className="row">
                <input
                    type="button"
                    value="Submit"
                    onClick={clickSubmitReviewBtn}
                />
            </div>
        </form>
    );
}

export { Review }