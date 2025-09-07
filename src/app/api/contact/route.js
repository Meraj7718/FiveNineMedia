// // // import sql from "@/app/api/utils/sql";


// // // // Create contact submission
// // // export async function POST(request) {
// // //   try {
// // //     const body = await request.json();
// // //     const { name, email, phone, message } = body;

// // //     // Validate required fields
// // //     if (!name || !email || !message) {
// // //       return Response.json(
// // //         { error: 'Name, email, and message are required' },
// // //         { status: 400 }
// // //       );
// // //     }

// // //     // Validate email format
// // //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // //     if (!emailRegex.test(email)) {
// // //       return Response.json(
// // //         { error: 'Please provide a valid email address' },
// // //         { status: 400 }
// // //       );
// // //     }

// // //     // Insert contact submission
// // //     const result = await sql`
// // //       INSERT INTO contact_submissions (name, email, phone, message)
// // //       VALUES (${name}, ${email}, ${phone || null}, ${message})
// // //       RETURNING id, created_at
// // //     `;

// // //     return Response.json({
// // //       success: true,
// // //       message: 'Thank you for your message! We\'ll get back to you soon.',
// // //       id: result[0].id,
// // //       created_at: result[0].created_at
// // //     });

// // //   } catch (error) {
// // //     console.error('Contact submission error:', error);
// // //     return Response.json(
// // //       { error: 'Failed to submit contact form. Please try again.' },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }

// // // // Get all contact submissions (for admin)
// // // export async function GET(request) {
// // //   try {
// // //     const url = new URL(request.url);
// // //     const limit = parseInt(url.searchParams.get('limit')) || 50;
// // //     const offset = parseInt(url.searchParams.get('offset')) || 0;

// // //     const submissions = await sql`
// // //       SELECT id, name, email, phone, message, created_at
// // //       FROM contact_submissions
// // //       ORDER BY created_at DESC
// // //       LIMIT ${limit} OFFSET ${offset}
// // //     `;

// // //     const total = await sql`
// // //       SELECT COUNT(*) as count FROM contact_submissions
// // //     `;

// // //     return Response.json({
// // //       submissions,
// // //       total: parseInt(total[0].count),
// // //       limit,
// // //       offset
// // //     });

// // //   } catch (error) {
// // //     console.error('Failed to fetch contact submissions:', error);
// // //     return Response.json(
// // //       { error: 'Failed to fetch contact submissions' },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }

// // // /api/contact/route.ts
// // import { Hono } from 'hono';
// // import sql from '@/app/api/utils/sql';

// // const contact = new Hono();

// // // POST /api/contact — Create a contact submission
// // contact.post('/', async (c) => {
// //   try {
// //     const body = await c.req.json();
// //     const { name, email, phone, message } = body;

// //     // Validate required fields
// //     if (!name || !email || !message) {
// //       return c.json(
// //         { error: 'Name, email, and message are required' },
// //         400
// //       );
// //     }

// //     // Validate email format
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (!emailRegex.test(email)) {
// //       return c.json(
// //         { error: 'Please provide a valid email address' },
// //         400
// //       );
// //     }

// //     // Insert contact submission safely
// //     const result = await sql`
// //       INSERT INTO contact_submissions (name, email, phone, message)
// //       VALUES (${name}, ${email}, ${phone ?? null}, ${message})
// //       RETURNING id, created_at
// //     `;

// //     return c.json({
// //       success: true,
// //       message: "Thank you for your message! We'll get back to you soon.",
// //       id: result[0].id,
// //       created_at: result[0].created_at,
// //     });
// //   } catch (error) {
// //     console.error('Contact submission error:', error);
// //     return c.json(
// //       { error: 'Failed to submit contact form. Please try again.' },
// //       500
// //     );
// //   }
// // });

// // // GET /api/contact — Fetch all contact submissions (for admin)
// // contact.get('/', async (c) => {
// //   try {
// //     const url = new URL(c.req.url);
// //     const limit = Number(url.searchParams.get('limit') ?? 50);
// //     const offset = Number(url.searchParams.get('offset') ?? 0);

// //     const submissions = await sql`
// //       SELECT id, name, email, phone, message, created_at
// //       FROM contact_submissions
// //       ORDER BY created_at DESC
// //       LIMIT ${limit} OFFSET ${offset}
// //     `;

// //     const totalResult = await sql`SELECT COUNT(*) AS count FROM contact_submissions`;
// //     const total = Number(totalResult[0]?.count ?? 0);

// //     return c.json({ submissions, total, limit, offset });
// //   } catch (error) {
// //     console.error('Failed to fetch contact submissions:', error);
// //     return c.json(
// //       { error: 'Failed to fetch contact submissions' },
// //       500
// //     );
// //   }
// // });

// // export default contact;

// // src/app/api/contact/route.js
// import { Hono } from 'hono';
// import sql from '@/app/api/utils/sql';

// const contact = new Hono();

// // POST /api/contact
// contact.post('/', async (c) => {
//   try {
//     const body = await c.req.json();
//     const { name, email, phone, message } = body;

//     if (!name || !email || !message) {
//       return c.json({ error: 'Name, email, and message are required' }, 400);
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return c.json({ error: 'Please provide a valid email address' }, 400);
//     }

//     const result = await sql`
//       INSERT INTO contact_submissions (name, email, phone, message)
//       VALUES (${name}, ${email}, ${phone ?? null}, ${message})
//       RETURNING id, created_at
//     `;

//     return c.json({
//       success: true,
//       message: "Thank you for your message! We'll get back to you soon.",
//       id: result[0].id,
//       created_at: result[0].created_at,
//     });
//   } catch (error) {
//     console.error('Contact submission error:', error);
//     return c.json({ error: 'Failed to submit contact form. Please try again.' }, 500);
//   }
// });

// // GET /api/contact
// contact.get('/', async (c) => {
//   try {
//     const url = new URL(c.req.url);
//     const limit = Number(url.searchParams.get('limit') ?? 50);
//     const offset = Number(url.searchParams.get('offset') ?? 0);

//     const submissions = await sql`
//       SELECT id, name, email, phone, message, created_at
//       FROM contact_submissions
//       ORDER BY created_at DESC
//       LIMIT ${limit} OFFSET ${offset}
//     `;

//     const totalResult = await sql`SELECT COUNT(*) AS count FROM contact_submissions`;
//     const total = Number(totalResult[0]?.count ?? 0);

//     return c.json({ submissions, total, limit, offset });
//   } catch (error) {
//     console.error('Failed to fetch contact submissions:', error);
//     return c.json({ error: 'Failed to fetch contact submissions' }, 500);
//   }
// });

// export default contact;


import { Hono } from 'hono';
import sql from '@/app/api/utils/sql';

const contact = new Hono();

// POST /api/contact
contact.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return c.json({ error: 'Name, email, and message are required' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: 'Please provide a valid email address' }, 400);
    }

    // Neon template-tag usage (safe, recommended)
    const rows = await sql`
      INSERT INTO contact_submissions (name, email, phone, message)
      VALUES (${name}, ${email}, ${phone ?? null}, ${message})
      RETURNING id, created_at
    `;

    // `rows` is an array of result rows; take the first one
    const { id, created_at } = rows[0] || {};

    return c.json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
      id,
      created_at,
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    return c.json({ error: 'Failed to submit contact form. Please try again.' }, 500);
  }
});

// GET /api/contact
// contact.get('/', async (c) => {
//   try {
//     const url = new URL(c.req.url);
//     const limit = Number(url.searchParams.get('limit') ?? 50);
//     const offset = Number(url.searchParams.get('offset') ?? 0);

//     const submissions = await sql`
//       SELECT id, name, email, phone, message, created_at
//       FROM contact_submissions
//       ORDER BY created_at DESC
//       LIMIT ${limit} OFFSET ${offset}
//     `;

//   const totalRows = await sql`SELECT COUNT(*) AS count FROM contact_submissions`;
//   // totalRows is an array like [{ count: '1' }]
//   const total = Number(totalRows[0]?.count ?? 0);

//   return c.json({ submissions, total, limit, offset });
//   } catch (error) {
//     console.error('Failed to fetch contact submissions:', error);
//     return c.json({ error: 'Failed to fetch contact submissions' }, 500);
//   }
// });

contact.get('/', async (c) => {
  try {
    const url = new URL(c.req.url);
    const limit = Number(url.searchParams.get('limit') ?? 50);
    const offset = Number(url.searchParams.get('offset') ?? 0);

    // All submissions (existing)
    const submissions = await sql`
      SELECT id, name, email, phone, message, created_at
      FROM contact_submissions
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    // Total submissions count
    const totalRows = await sql`SELECT COUNT(*) AS count FROM contact_submissions`;
    const total = Number(totalRows[0]?.count ?? 0);

    // Count for today
    const todayRows = await sql`
      SELECT COUNT(*) AS count
      FROM contact_submissions
      WHERE DATE(created_at) = CURRENT_DATE
    `;
    const todayCount = Number(todayRows[0]?.count ?? 0);

    return c.json({ submissions, total, todayCount, limit, offset });
  } catch (error) {
    console.error('Failed to fetch contact submissions:', error);
    return c.json({ error: 'Failed to fetch contact submissions' }, 500);
  }
});

export default contact;
