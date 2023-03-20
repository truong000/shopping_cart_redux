import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import './ListReview.css';
import { ReviewInterface } from './productSlice';




export const ListReview: React.FC = (): JSX.Element => {
    const Reviews = useSelector((state: RootState) => state.product.productDetail.reviews)
    return (
        <div>
            {
                Reviews.length ? (
                    <table>
                    <tr>
                        <th>N.o</th>
                        <th>Name</th>
                        <th>Review product</th>
                    </tr>
                    {
                        Reviews.map((review: ReviewInterface, index: number) => (
                            <tr>
                                <th>{index + 1}</th>
                                <th>{review.nameCustomer}</th>
                                <th>{review.textReview}</th>
                            </tr>
                        ))
                    }
                </table>
                ) : ( <span>This product has no customer reviews yet. </span>)
            }

        </div>

    )
}