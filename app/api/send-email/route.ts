import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {  
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: 'Consulta Experiencias Aereas <onboarding@resend.dev>',
      to: ['imaaugus04@gmail.com'],
      subject: 'Nuevo mensaje de contacto',
      react: ContactFormEmail({ name, email, message }) as React.ReactElement,
    });

    return NextResponse.json({ message: 'Email enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el email:', error);
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 });
  }
}


