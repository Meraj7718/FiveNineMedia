import sql from '@/app/api/utils/sql';
import { Hono } from 'hono';

const quote = new Hono();

// Convert your export functions to Hono route methods
quote.post('/', async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, company, service, budget, message } = body;

    if (!name || !email) {
      return c.json({ error: 'Name and email are required' }, 400);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ error: 'Please provide a valid email address' }, 400);
    }

    const rows = await sql`
      INSERT INTO quote_requests (name, email, company, service, budget, message)
      VALUES (${name}, ${email}, ${company || null}, ${service || null}, ${budget || null}, ${message || null})
      RETURNING id, created_at
    `;

    const { id, created_at } = rows; // FIX: use rows

    return c.json({
      success: true,
      message: "Thank you for your quote request! We'll get back to you within 24 hours.",
      id,
      created_at,
    });
  } catch (error) {
    console.error('Quote request error:', error);
    return c.json({ error: 'Failed to submit quote request. Please try again.' }, 500);
  }
});

quote.get('/', async (c) => {
  try {
    const url = new URL(c.req.url);
    const limit = parseInt(url.searchParams.get('limit') || '50', 10);
    const offset = parseInt(url.searchParams.get('offset') || '0', 10);
    const service = url.searchParams.get('service');
    const budget = url.searchParams.get('budget');

    // Use template tags for simpler queries instead of sql.query()
    const quotes = await sql`
      SELECT id, name, email, company, service, budget, message, created_at
      FROM quote_requests
      ${service ? sql`WHERE service = ${service}` : sql``}
      ${budget ? sql`AND budget = ${budget}` : sql``}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const totalRows = await sql`SELECT COUNT(*) AS count FROM quote_requests`;
    const total = Number(totalRows?.count || 0);

    return c.json({ quotes, total, limit, offset, filters: { service, budget } });
  } catch (error) {
    console.error('Failed to fetch quote requests:', error);
    return c.json({ error: 'Failed to fetch quote requests' }, 500);
  }
});

export default quote; // Export the Hono app, not individual functions
