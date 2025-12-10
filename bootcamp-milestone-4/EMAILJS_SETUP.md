# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form on your website.

## Step 1: Install the Package

Run this command in your terminal (in the `bootcamp-milestone-4` directory):

```bash
npm install @emailjs/browser
```

## Step 2: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)
3. Verify your email address

## Step 3: Set Up Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

## Step 4: Create an Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Set the **To Email** field to your email address
5. **Copy the Template ID** (you'll need this later)

## Step 5: Get Your Public Key

1. Go to **Account** → **General** in EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key**

## Step 6: Add Environment Variables

1. In your project root (`bootcamp-milestone-4`), create or edit `.env.local` file
2. Add these three variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with the actual IDs you copied:

- `your_service_id_here` → Your Service ID from Step 3
- `your_template_id_here` → Your Template ID from Step 4
- `your_public_key_here` → Your Public Key from Step 5

## Step 7: Restart Your Development Server

After adding the environment variables:

1. Stop your development server (Ctrl+C)
2. Start it again: `npm run dev`
3. Environment variables are only loaded when the server starts

## Step 8: Test the Form

1. Navigate to `/contact` on your website
2. Fill out the form with test data
3. Submit the form
4. Check your email inbox for the message!

## Troubleshooting

### "EmailJS configuration is missing" error

- Make sure your `.env.local` file is in the `bootcamp-milestone-4` directory
- Make sure the variable names start with `NEXT_PUBLIC_`
- Restart your development server after adding environment variables

### Email not received

- Check your spam folder
- Verify your email service is properly connected in EmailJS
- Check the EmailJS dashboard for any error logs
- Make sure your template's "To Email" field is set correctly

### Form validation errors

- All fields are required
- Email must be in valid format (e.g., user@example.com)
- Message must be at least 10 characters long

## Notes

- The free tier allows 200 emails per month
- EmailJS sends emails directly from the client (browser), so no backend API is needed
- All environment variables must start with `NEXT_PUBLIC_` to be accessible in the browser
