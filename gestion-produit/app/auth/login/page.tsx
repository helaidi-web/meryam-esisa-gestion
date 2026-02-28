'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

interface LoginForm {
  email: string;
  password: string;
}

const validCredentials = [
  { email: 'admin@mh.com', password: 'admin123' },
  { email: 'user@mh.com', password: 'user123' },
  { email: 'demo@mh.com', password: 'demo123' },
];

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      const isValid = validCredentials.some(
        cred => cred.email === formData.email && cred.password === formData.password
      );

      if (isValid) {
        // Store auth token in localStorage
        localStorage.setItem('mh_auth_token', 'token_' + Date.now());
        localStorage.setItem('mh_user_email', formData.email);
        router.push('/');
      } else {
        setError('Email ou mot de passe incorrect');
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bgGradient}></div>
      
      <div className={styles.loginBox}>
        <div className={styles.header}>
          <span className={styles.icon}>🎯</span>
          <h1>MH Gestion</h1>
          <p>Connexion à votre compte</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">📧 Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@mh.com"
              required
              disabled={isLoading}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">🔐 Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              disabled={isLoading}
              className={styles.input}
            />
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button
            type="submit"
            disabled={isLoading}
            className={styles.submitBtn}
          >
            {isLoading ? '⏳ Connexion...' : '🔓 Se connecter'}
          </button>
        </form>

        <div className={styles.demo}>
          <p className={styles.demoTitle}>📝 Comptes de démonstration:</p>
          <div className={styles.demoCredentials}>
            <div className={styles.credential}>
              <span className={styles.label}>Admin:</span>
              <code>admin@mh.com / admin123</code>
            </div>
            <div className={styles.credential}>
              <span className={styles.label}>User:</span>
              <code>user@mh.com / user123</code>
            </div>
            <div className={styles.credential}>
              <span className={styles.label}>Demo:</span>
              <code>demo@mh.com / demo123</code>
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <p>🔒 Vos données sont sécurisées et stockées localement.</p>
        </div>
      </div>
    </div>
  );
}
