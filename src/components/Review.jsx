import Heading from "./heading";
import HeadSubject from "./HeadSubject";
import ReviewItem from "./ReviewItem";
import styles from './Review.module.css'
const Review = () => {
  return (
    <>
      <Heading text={"TOURIST LOVES US"} />
      <HeadSubject text={"Checkout all our reviews"} />
      <div className={`${styles.fullWidth} d-flex flex-column justify-content-center align-items-center`}>
        <ReviewItem
        name="John Doe"
        rating={4}
        reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas, ducimus labore sequi quos deserunt optio id repellendus tempora veniam amet porro corporis exercitationem numquam debitis culpa laudantium odio, velit vel minus sit? Veritatis aut maiores ducimus fugit error ex sit, dignissimos eum tempora perferendis a rem culpa ab aliquid modi? Est vitae neque esse, cumque, quam tenetur rem earum eaque mollitia modi ipsum aspernatur, dignissimos excepturi aliquam architecto soluta necessitatibus vero?"
      />

      <ReviewItem
        name="John Doe"
        rating={4}
        reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas, ducimus labore sequi quos deserunt optio id repellendus tempora veniam amet porro corporis exercitationem numquam debitis culpa laudantium odio, velit vel minus sit? Veritatis aut maiores ducimus fugit error ex sit, dignissimos eum tempora perferendis a rem culpa ab aliquid modi? Est vitae neque esse, cumque, quam tenetur rem earum eaque mollitia modi ipsum aspernatur, dignissimos excepturi aliquam architecto soluta necessitatibus vero?"
      />
      </div>
    </>
  );
};
export default Review;
