import { useEffect, useState } from 'react';
import CompanyData from './company-data';
import CompanyFigures from './company-figures';
import CompanyOpening from './company-opening';
import Heading from './heading';
import styles from './mainSection.module.css';
import ReviewStars from './review-stars';
import CompanyReviews from './reviews';
import Questions from './questions';
import axios from 'axios';

export default function MainSection() {
  const [loading, setLoading] = useState(true);
  const [companyName, setcompanyName] = useState(null);
  const [companyRating, setCompanyRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [companyAbout, setCompanyAbout] = useState('');
  const [phone, setPhone] = useState('');
  const [site, setSite] = useState('');
  const [address, setAddress] = useState('');
  const [faq, setFaq] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    if (companyName !== null) return;
    axios.get('http://localhost:1337/companies/2').then((response) => {
      const { data } = response;

      setcompanyName(data.name);
      setCompanyAbout(data.about);
      setCompanyRating(data.rating);
      setReviews(data.user_reviews);
      setCompanyAbout(data.about);
      setPhone(data.phone);
      setSite(data.site);
      setAddress(data.address);
      setFaq(data.faqs);
      setPictures(data.pictures);
      setLoading(false);

      console.log(response.data);
    });
  }, []);

  return (
    <>
      {!loading && (
        <section className={styles.mainSection}>
          <div className={styles.mainContainer}>
            <div className={styles.header}>
              <div>
                <button type="button" className={styles.btnBack}>
                  &lt; Voltar
                </button>
              </div>
              <div className={styles.companyIntro}>
                <div className={styles.companyName}>
                  <h1>{companyName}</h1>
                  <ReviewStars count={companyRating} />
                </div>
              </div>
              <div className={styles.companyNavbar}>
                <div className={styles.companySectionsContainer}>
                  <div className={styles.companySections}>
                    <button className={styles.companyAbout}>
                      Sobre a Empresa
                    </button>
                    <Heading text="Colaboradores" />
                    <Heading text="Entrevistas" />
                    <Heading text="Produtos" />
                    <Heading text="Vagas de Emprego" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.gridSection}>
              <div className={styles.leftSection}>
                <CompanyFigures pictures={pictures} />
                <CompanyReviews companyName={companyName} reviews={reviews} />
              </div>
              <div className={styles.rightSection}>
                <div className={styles.rightWrapper}>
                  <CompanyData
                    heading="Sobre"
                    contents={<p>{companyAbout}</p>}
                  />
                  <CompanyData heading="Telefone" contents={<p>{phone}</p>} />
                  <CompanyData
                    heading="Site"
                    contents={<a href={site}>{site}</a>}
                  />
                  <CompanyOpening openingHours={[]} />
                  <CompanyData heading="Endereço" contents={<p>{address}</p>} />
                </div>
                <Questions questions={faq} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
