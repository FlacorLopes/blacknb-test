import CompanyData from './company-data';
import styles from './mainSection.module.css';
import ReviewStars from './review-stars';

export default function CompanyReviews({ companyName, reviews }) {
  return (
    <div className={styles.companyReview}>
      <div className={styles.title}>
        <h2>Avaliações de {companyName}</h2>
      </div>
      <div>
        <button type="button" className={styles.reviewCompany}>
          Avalie essa empresa
        </button>
      </div>
      {reviews.map((review) => {
        return (
          <div key={`review${review.title}`}>
            <ReviewStars count={review.rating} onlyStars />
            <CompanyData heading={review.title} contents={review.content} />
          </div>
        );
      })}
    </div>
  );
}
