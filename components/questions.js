import styles from './mainSection.module.css';

export default function Questions({ questions }) {
  return (
    <div className={styles.companyQuestions}>
      <h2>Perguntas e Respostas</h2>

      <form>
        <div>
          <input type="text" placeholder="Escrever uma pergunta..."></input>
          <button className={styles.sendButton}>Enviar</button>
        </div>
      </form>
      {questions &&
        questions.map((q) => (
          <p key={q.question.substring(0, 10)}>
            <strong>P:</strong> {q.question}
          </p>
        ))}
    </div>
  );
}
