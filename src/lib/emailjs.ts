import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  serviceId: 'SERVICE_ID', 
  templateId: 'TEMPLATE_ID', 
  publicKey: 'PUBLIC_KEY', 
};

// Email template parameters interface
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_name?: string;
  [key: string]: string | undefined;
}

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.publicKey);
};

// Send email using EmailJS
export const sendEmail = async (templateParams: EmailTemplateParams): Promise<boolean> => {
  try {
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
    return true;
  } catch (error) {
    console.error('EmailJS Error:', error);
    return false;
  }
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};