import styles from './mainSection.module.css';

export default function CompanyOpening({ openingHours }) {
  return (
    <div className={styles.companyOpening}>
      <h3>Horário de Abertura</h3>
      <div>
        <p>Segunda-Feira</p>
        <p>08:00</p>
      </div>
      <div>
        <p>Terça-Feira</p>
        <p>08:00</p>
      </div>
      <div>
        <p>Quarta-Feira</p>
        <p>08:00</p>
      </div>
      <div>
        <p>Quinta-Feira</p>
        <p>08:00</p>
      </div>
      <div>
        <p>Sexta-Feira</p>
        <p>08:00</p>
      </div>
    </div>
  );
}
