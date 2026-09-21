-- ─────────────────────────────────────────────────────────────────────────────
-- HeavenlyNova — Supabase Schema v2 (Printify)
-- Rulează în Supabase Dashboard → SQL Editor
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS orders (
  id                          UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Referințe externe
  stripe_session_id           TEXT UNIQUE NOT NULL,
  stripe_payment_intent       TEXT,
  printify_order_id           TEXT,

  -- Date client
  customer_name               TEXT,
  customer_email              TEXT,

  -- Adresă și rutare
  shipping_country            TEXT,           -- ex: 'US', 'RO', 'DE'
  shipping_address            JSONB,
  fulfillment_region          TEXT,           -- 'us' (Shaka Wear) | 'eu' (Stanley/Stella)

  -- Produse [{ productId, size, productTitle, quantity }]
  items                       JSONB NOT NULL DEFAULT '[]'::JSONB,

  -- Financiar (în cenți — ex: 4499 = $44.99)
  total_amount                INTEGER NOT NULL DEFAULT 0,
  currency                    TEXT NOT NULL DEFAULT 'usd',

  -- Status: 'pending' | 'fulfilled' | 'fulfillment_error' | 'refunded'
  status                      TEXT NOT NULL DEFAULT 'pending',

  -- Debugging
  printify_raw_response       JSONB,
  fulfillment_error           TEXT,

  -- Timestamps
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexuri
CREATE INDEX IF NOT EXISTS orders_customer_email_idx   ON orders(customer_email);
CREATE INDEX IF NOT EXISTS orders_status_idx           ON orders(status);
CREATE INDEX IF NOT EXISTS orders_created_at_idx       ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS orders_shipping_country_idx ON orders(shipping_country);
CREATE INDEX IF NOT EXISTS orders_fulfillment_region_idx ON orders(fulfillment_region);

-- Trigger updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_orders_updated_at ON orders;
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- RLS: acces exclusiv cu service_role key
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- View: statistici dashboard
CREATE OR REPLACE VIEW order_stats AS
SELECT
  COUNT(*)                                                    AS total_orders,
  COUNT(*) FILTER (WHERE status = 'fulfilled')               AS fulfilled,
  COUNT(*) FILTER (WHERE status = 'fulfillment_error')       AS errors,
  COUNT(*) FILTER (WHERE status = 'pending')                 AS pending,
  COUNT(*) FILTER (WHERE fulfillment_region = 'us')          AS us_orders,
  COUNT(*) FILTER (WHERE fulfillment_region = 'eu')          AS eu_orders,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '30 days') AS last_30_days,
  ROUND(SUM(total_amount) FILTER (WHERE status = 'fulfilled') / 100.0, 2) AS revenue_usd,
  ROUND(AVG(total_amount) FILTER (WHERE status = 'fulfilled') / 100.0, 2) AS avg_order_usd
FROM orders;

-- ─── Queries utile ────────────────────────────────────────────────────────────
-- Comenzi cu erori de fulfillment (necesită atenție manuală):
--   SELECT id, stripe_session_id, customer_email, fulfillment_error, created_at
--   FROM orders WHERE status = 'fulfillment_error' ORDER BY created_at DESC;
--
-- Statistici pe regiune:
--   SELECT fulfillment_region, COUNT(*), SUM(total_amount)/100.0 AS revenue
--   FROM orders WHERE status = 'fulfilled'
--   GROUP BY fulfillment_region;
--
-- Caută după email:
--   SELECT * FROM orders WHERE customer_email = 'client@example.com';
