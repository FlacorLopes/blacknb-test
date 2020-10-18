import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#">
        <img src="/images/logo.svg" alt="BlacknB" />
      </a>
      <div className={styles.sideControls}>
        <div className={styles.locationSelector}>
          <button className={styles.pickerContainer}>
            <div className={styles.picker}>
              <svg width="17" height="25" viewBox="0 0 17 25" fill="none">
                <path
                  d="M8.127 2.967c2.75 0 4.96 2.24 4.96 5.025 0 2.725-2.21 4.965-4.96 4.965-2.689 0-4.96-2.24-4.96-4.965 0-2.785 2.271-5.025 4.96-5.025zm0 1.09c-2.091 0-3.824 1.755-3.824 3.935 0 2.12 1.733 3.875 3.824 3.875 2.152 0 3.825-1.756 3.825-3.875 0-2.18-1.673-3.935-3.825-3.935z"
                  fill="#BF8514"
                ></path>
                <path
                  d="M8.127 0c4.542 0 8.187 3.693 8.187 8.234 0 3.996-2.151 6.358-4.064 9.445L8.127 24.4l-4.123-6.72C2.092 14.591 0 12.23 0 8.233 0 3.694 3.645 0 8.127 0zm0 1.15c-3.884 0-6.992 3.149-6.992 7.084 0 3.633 2.092 5.994 3.825 8.84l3.167 5.207 3.167-5.207c1.793-2.846 3.884-5.207 3.884-8.84 0-3.935-3.167-7.084-7.05-7.084z"
                  fill="#BF8514"
                ></path>
              </svg>
              <p>Localização: </p>
              <p>Escolher uma localização</p>
            </div>
          </button>
        </div>
        <a href="/login?from=%2Fpt%2Fcompanies%2FDysoft">
          <button type="button" className={styles.login}>
            Login
          </button>
        </a>
      </div>
    </header>
  );
}
