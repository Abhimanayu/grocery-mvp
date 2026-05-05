const baseUrl = process.env.BASE_URL ?? "http://localhost:3001";

const checks = [
  { method: "GET", path: "/", expect: 200 },
  { method: "GET", path: "/shop", expect: 200 },
  { method: "GET", path: "/product/potato", expect: 200 },
  { method: "GET", path: "/admin", expect: 200 },
  { method: "GET", path: "/robots.txt", expect: 200 },
  { method: "GET", path: "/sitemap.xml", expect: 200 },
  { method: "GET", path: "/api/health", expect: 200 },
  { method: "GET", path: "/api/home", expect: 200 },
  { method: "GET", path: "/api/categories", expect: 200 },
  { method: "GET", path: "/api/products", expect: 200 },
  { method: "GET", path: "/api/location/serviceability?pincode=302021", expect: 200 }
];

let cookie = "";

async function request(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      ...(cookie ? { cookie } : {}),
      ...(options.headers ?? {})
    }
  });

  const setCookies =
    typeof response.headers.getSetCookie === "function"
      ? response.headers.getSetCookie()
      : [...response.headers.entries()].filter(([key]) => key.toLowerCase() === "set-cookie").map(([, value]) => value);

  if (setCookies.length) {
    const jar = new Map(cookie.split("; ").filter(Boolean).map((part) => {
      const [name, ...rest] = part.split("=");
      return [name, rest.join("=")];
    }));

    for (const setCookie of setCookies) {
      const [pair] = setCookie.split(";");
      const [name, ...rest] = pair.split("=");
      jar.set(name, rest.join("="));
    }

    cookie = [...jar.entries()].map(([name, value]) => `${name}=${value}`).join("; ");
  }

  return response;
}

for (const check of checks) {
  const response = await request(check.path, { method: check.method });
  if (response.status !== check.expect) {
    throw new Error(`${check.method} ${check.path} returned ${response.status}, expected ${check.expect}`);
  }
  console.log(`ok ${check.method} ${check.path}`);
}

const addCart = await request("/api/cart/items", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ variantId: "var-potato-1kg", quantity: 14 })
});

if (addCart.status !== 200) {
  throw new Error(`Add cart failed: ${addCart.status} ${await addCart.text()}`);
}

const otp = await request("/api/auth/send-otp", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ phone: "9876543210" })
});

if (otp.status !== 200) throw new Error(`OTP send failed: ${otp.status}`);

const verify = await request("/api/auth/verify-otp", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ phone: "9876543210", otp: "123456" })
});

if (verify.status !== 200) throw new Error(`OTP verify failed: ${verify.status}`);

const order = await request("/api/orders", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    paymentMethod: "COD",
    couponCode: "FRESH50",
    address: {
      name: "Smoke Test",
      phone: "9876543210",
      line1: "B-49, Chitrakoot Stadium",
      line2: "Vaishali Nagar",
      city: "Jaipur",
      pincode: "302021"
    }
  })
});

if (order.status !== 200) {
  throw new Error(`Order create failed: ${order.status} ${await order.text()}`);
}

const orderPayload = await order.json();
if (!orderPayload.orderNo) throw new Error("Order response missing orderNo");

console.log(`ok order ${orderPayload.orderNo}`);
console.log("Smoke test passed");
