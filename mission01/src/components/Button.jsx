
import styles from '@/styles/Button.module.css'

function Button({ status='Default' }) {

  let className = ''
  if (status === 'Default') {
    className = styles.Default; // styles 객체를 사용하여 CSS 클래스 이름을 가져옴
  } else if (status === 'Hover') {
    className = styles.Hover;
  } else {
    className = styles.OnClick;
  }

// console.log(...restPros);
  return (
    <div className={styles.buttonWrapper}>
     { 
     <button
        type="button"
        className={className}
      >
        로그인
      </button>
      }
      <span className={styles.description}>{status}</span>
    </div>
  );
}

export default Button;
