export interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
}

export const sendContactForm = async (data: ContactProps) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
