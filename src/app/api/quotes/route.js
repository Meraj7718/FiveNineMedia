// import sql from '@/app/api/utils/sql';
// import { Hono } from 'hono';

// const quote = new Hono();

// // Convert your export functions to Hono route methods
// quote.post('/', async (c) => {
//   try {
//     const body = await c.req.json();
//     const { name, email, company, service, budget, message } = body;

//     if (!name || !email) {
//       return c.json({ error: 'Name and email are required' }, 400);
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return c.json({ error: 'Please provide a valid email address' }, 400);
//     }

//     const rows = await sql`
//       INSERT INTO quote_requests (name, email, company, service, budget, message)
//       VALUES (${name}, ${email}, ${company || null}, ${service || null}, ${budget || null}, ${message || null})
//       RETURNING id, created_at
//     `;

//   // rows is an array of inserted rows; use the first one
//   const { id, created_at } = rows[0] || {};

//     return c.json({
//       success: true,
//       message: "Thank you for your quote request! We'll get back to you within 24 hours.",
//       id,
//       created_at,
//     });
//   } catch (error) {
//     console.error('Quote request error:', error);
//     return c.json({ error: 'Failed to submit quote request. Please try again.' }, 500);
//   }
// });

// quote.get('/', async (c) => {
//   try {
//     const url = new URL(c.req.url);
//     const limit = parseInt(url.searchParams.get('limit') || '50', 10);
//     const offset = parseInt(url.searchParams.get('offset') || '0', 10);
//     const service = url.searchParams.get('service');
//     const budget = url.searchParams.get('budget');

//     // Return quotes (omit optional filters here to avoid nested template issues)
//     const quotes = await sql`
//       SELECT id, name, email, company, service, budget, message, created_at
//       FROM quote_requests
//       ORDER BY created_at DESC
//       LIMIT ${limit} OFFSET ${offset}
//     `;

//   const totalRows = await sql`SELECT COUNT(*) AS count FROM quote_requests`;
//   const total = Number(totalRows[0]?.count ?? 0);

//     return c.json({ quotes, total, limit, offset, filters: { service, budget } });
//   } catch (error) {
//     console.error('Failed to fetch quote requests:', error);
//     return c.json({ error: 'Failed to fetch quote requests' }, 500);
//   }
// });

// export default quote; // Export the Hono app, not individual functions

/////////////////////////////////////////////////////////////

// import sql from '@/app/api/utils/sql';
// import { Hono } from 'hono';

// const quote = new Hono();

// quote.post('/', async (c) => {
//   try {
//     const body = await c.req.json();
//     let { name, email, mobile_no, company, service, budget, message } = body;

//     // 🧹 Clean inputs
//     name = name?.trim();
//     email = email?.trim().toLowerCase(); // lowercase emails for consistency
//     mobile_no = mobile_no?.replace(/\s+/g, ''); // remove spaces
//     company = company?.trim();
//     service = service?.trim();
//     budget = budget?.trim();
//     message = message?.trim();

//     // ✅ Validations
//     if (!name || !email || !mobile_no) {
//       return c.json({ error: 'Name, email and mobile number are required' }, 400);
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return c.json({ error: 'Please provide a valid email address' }, 400);
//     }

//     // Normalize mobile (remove +91 if present)
//     mobile_no = mobile_no.replace(/^(\+91)/, '');

//     // Mobile validation (10 digits only, Indian numbers starting with 6–9)
//     const mobileRegex = /^[6-9]\d{9}$/;
//     if (!mobileRegex.test(mobile_no)) {
//       return c.json({ error: 'Please provide a valid 10-digit mobile number' }, 400);
//     }

//     // Insert into DB
//     const rows = await sql`
//       INSERT INTO quote_requests (name, email, mobile_no, company, service, budget, message)
//       VALUES (${name}, ${email}, ${mobile_no}, ${company || null}, ${service || null}, ${budget || null}, ${message || null})
//       RETURNING id, created_at
//     `;

//     const { id, created_at } = rows[0] || {};

//     return c.json({
//       success: true,
//       message: "Thank you for your quote request! We'll get back to you within 24 hours.",
//       id,
//       created_at,
//     });
//   } catch (error) {
//     console.error('Quote request error:', error);
//     return c.json({ error: 'Failed to submit quote request. Please try again.' }, 500);
//   }
// });

// quote.get('/', async (c) => {
//   try {
//     const url = new URL(c.req.url);
//     const limit = parseInt(url.searchParams.get('limit') || '50', 10);
//     const offset = parseInt(url.searchParams.get('offset') || '0', 10);

//     const quotes = await sql`
//       SELECT id, name, email, mobile_no, company, service, budget, message, created_at
//       FROM quote_requests
//       ORDER BY created_at DESC
//       LIMIT ${limit} OFFSET ${offset}
//     `;

//     const totalRows = await sql`SELECT COUNT(*) AS count FROM quote_requests`;
//     const total = Number(totalRows[0]?.count ?? 0);

//     return c.json({ quotes, total, limit, offset });
//   } catch (error) {
//     console.error('Failed to fetch quote requests:', error);
//     return c.json({ error: 'Failed to fetch quote requests' }, 500);
//   }
// });

// export default quote;


import { Hono } from 'hono';
import sql from '@/app/api/utils/sql';

const quote = new Hono();

// POST /api/quote
quote.post('/', async (c) => {
  try {
    const body = await c.req.json();
    let { name, email, mobile_no, company, service, budget, message } = body;

    name = name?.trim();
    email = email?.trim().toLowerCase();
    mobile_no = mobile_no?.replace(/\s+/g, '');
    company = company?.trim();
    service = service?.trim();
    budget = budget?.trim();
    message = message?.trim();

    if (!name || !email || !mobile_no) {
      return c.json({ error: 'Name, email, and mobile number are required' }, 400);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: 'Invalid email address' }, 400);
    }

    // Mobile validation (Indian 10-digit)
    mobile_no = mobile_no.replace(/^(\+91)/, '');
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile_no)) {
      return c.json({ error: 'Invalid 10-digit mobile number' }, 400);
    }

    const rows = await sql`
      INSERT INTO quote_requests (name, email, mobile_no, company, service, budget, message)
      VALUES (${name}, ${email}, ${mobile_no}, ${company || null}, ${service || null}, ${budget || null}, ${message || null})
      RETURNING id, created_at
    `;

    const { id, created_at } = rows[0] || {};
    return c.json({
      success: true,
      message: "Quote request submitted successfully!",
      id,
      created_at,
    });
  } catch (err) {
    console.error('Quote POST error:', err);
    return c.json({ error: 'Failed to submit quote request' }, 500);
  }
});

// GET /api/quote
quote.get('/', async (c) => {
  try {
    const url = new URL(c.req.url);
    const limit = parseInt(url.searchParams.get('limit') || '50', 10);
    const offset = parseInt(url.searchParams.get('offset') || '0', 10);

    const quotes = await sql`
      SELECT id, name, email, mobile_no, company, service, budget, message, created_at
      FROM quote_requests
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const totalRows = await sql`SELECT COUNT(*) AS count FROM quote_requests`;
    const total = Number(totalRows[0]?.count ?? 0);

    return c.json({ quotes, total, limit, offset });
  } catch (err) {
    console.error('Quote GET error:', err);
    return c.json({ error: 'Failed to fetch quote requests' }, 500);
  }
});

export default quote;
