export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  
  if (password.length < 8) {
    errors.push('Le mot de passe doit contenir au moins 8 caractères');
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une majuscule');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins une minuscule');
  }
  
  if (!/\d/.test(password)) {
    errors.push('Le mot de passe doit contenir au moins un chiffre');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const formatCalories = (calories: number): string => {
  return calories.toLocaleString('fr-FR');
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};
