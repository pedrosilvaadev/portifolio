/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactProps } from "@/lib/api";
import { transporter, mailOptions } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const req: ContactProps = await request.json();

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: req.subject,
      text: req.message,
      html: `
      <h1>Nome: ${req.name}</h1> 
      <h2>Email: ${req.email}</h2>
      <p>${req.phone}</p>
      <p>${req.message}</p>
      `,
    });
  } catch (err: any) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({
        message: err.message,
      }),
      { status: 400 }
    );
  }

  return new NextResponse(
    JSON.stringify({
      success: true,
    }),
    { status: 201 }
  );
}
