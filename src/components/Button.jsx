import styles from './Button.module.css'

export function Button({ children, variant = 'secondary', fullWidth = false, ...props }) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${fullWidth ? styles.fullWidth : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
