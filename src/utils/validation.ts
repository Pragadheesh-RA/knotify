export const validateName = (name: string): string => {
  if (!name.trim()) return 'Name is required';
  if (name.length < 2) return 'Name must be at least 2 characters';
  return '';
};

export const validateEmail = (email: string): string => {
  if (!email.trim()) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validateMessage = (message: string): string => {
  if (!message.trim()) return 'Message is required';
  if (message.length < 10) return 'Message must be at least 10 characters';
  return '';
};