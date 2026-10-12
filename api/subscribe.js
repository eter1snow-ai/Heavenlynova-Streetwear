import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, type, website } = req.body

  if (website) return res.status(200).json({ success: true })
  if (!email) return res.status(400).json({ error: 'Email required' })

  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const adminSubject = type === 'join'
    ? `[HVN JOIN] Inner Circle Request: ${email}`
    : `[HVN NEWSLETTER] New Subscriber: ${email}`

  // Customer Welcome Email Template
  const customerHtml = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#ffffff;">
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#0a0a0a;padding:40px 20px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" max-width="580" style="max-width:580px;background-color:#000000;border:1px solid #262626;padding:40px 32px;text-align:center;">
            <tr>
              <td>
                <p style="margin:0 0 16px 0;font-size:11px;letter-spacing:0.35em;text-transform:uppercase;color:#888888;font-family:monospace;">
                  MEMBERS ONLY // ARCHIVAL ACCESS
                </p>
                <h1 style="margin:0 0 24px 0;font-size:24px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;color:#ffffff;line-height:1.3;">
                  HEAVENLYNOVA
                </h1>
                <p style="margin:0 0 32px 0;font-size:14px;line-height:1.7;color:#c2c2c2;letter-spacing:0.04em;">
                  Your initiation is confirmed. As a member of the Inner Circle, your 10% welcome privilege is ready to be claimed on your first acquisition.
                </p>

                <!-- Code Block -->
                <div style="background-color:#121212;border:1px solid #333333;padding:24px 16px;margin:0 0 32px 0;text-align:center;">
                  <p style="margin:0 0 8px 0;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#888888;font-family:monospace;">
                    YOUR WELCOME DISCOUNT CODE
                  </p>
                  <p style="margin:0 0 8px 0;font-size:26px;font-weight:800;letter-spacing:0.25em;color:#ffffff;font-family:monospace;">
                    NOVA10
                  </p>
                  <p style="margin:0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#a3a3a3;">
                    10% OFF YOUR ORDER • ENTER AT CHECKOUT
                  </p>
                </div>

                <!-- CTA Button -->
                <a href="https://heavenlynova.com/drops" style="display:inline-block;background-color:#ffffff;color:#000000;padding:14px 36px;font-size:11px;font-weight:700;letter-spacing:0.25em;text-transform:uppercase;text-decoration:none;margin:0 0 32px 0;">
                  ENTER COLLECTION
                </a>

                <p style="margin:0 0 16px 0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;color:#737373;">
                  Free Worldwide Shipping: USA, Canada, UK & Europe
                </p>

                <hr style="border:none;border-top:1px solid #1f1f1f;margin:32px 0 24px 0;" />

                <p style="margin:0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#525252;line-height:1.6;">
                  Between Light & Shadow • heavenlynova.com<br />
                  If you did not request this transmission, you may ignore this email.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `

  try {
    // Trimite email de confirmare către abonat + notificare către admin
    await Promise.allSettled([
      // 1. Email către noul abonat cu codul de reducere
      transporter.sendMail({
        from: `"HeavenlyNova" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `[HVN // INNER CIRCLE] Welcome Privilege — Code: NOVA10`,
        html: customerHtml,
      }),
      // 2. Alertă către tine (admin)
      transporter.sendMail({
        from: `"HeavenlyNova" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: adminSubject,
        html: `<div style="font-family:sans-serif;padding:24px;color:#111">
          <h2 style="text-transform:uppercase;letter-spacing:0.1em">${type === 'join' ? 'Join Request' : 'Newsletter Subscriber'} — HeavenlyNova</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Code Sent:</strong> NOVA10 (10% OFF)</p>
        </div>`,
      }),
    ])

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mail error:', err)
    return res.status(500).json({ error: 'Failed to send' })
  }
}
