import { NextRequest, NextResponse } from 'next/server';

interface PhonePeDecoded {
  responseCode?: string;
  merchantTransactionId?: string;
  transactionId?: string;
}

export async function GET(req: NextRequest) {
  const baseOrigin = req.nextUrl?.origin || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  try {
    // Handle GET request from PhonePe redirect
    const searchParams = req.nextUrl.searchParams;
    const base64Response = searchParams.get('response');
    
    console.log('GET request received');
    console.log('Has response param:', !!base64Response);
    
    if (!base64Response) {
      console.error('No base64Response in query params');
      return NextResponse.redirect(new URL('/payment/fail?reason=missing_response', baseOrigin), 303);
    }

    let decoded: PhonePeDecoded | null = null;
    try {
      decoded = JSON.parse(Buffer.from(base64Response, 'base64').toString());
      console.log('Decoded response:', decoded);
    } catch (_e) {
      console.error('Failed to decode base64 response:', _e);
      return NextResponse.redirect(new URL('/payment/fail?reason=invalid_payload', baseOrigin), 303);
    }

    const responseCode = decoded?.responseCode;
    const merchantTransactionId = decoded?.merchantTransactionId;
    const transactionId = decoded?.transactionId;
    
    console.log('Response code:', responseCode);
    console.log('Merchant Transaction ID:', merchantTransactionId);
    console.log('Transaction ID:', transactionId);

    if (responseCode === 'PAYMENT_SUCCESS') {
      const url = new URL('/payment/success', baseOrigin);
      if (merchantTransactionId) url.searchParams.set('mtx', merchantTransactionId);
      if (transactionId) url.searchParams.set('tx', transactionId);
      console.log('Redirecting to success page:', url.toString());
      return NextResponse.redirect(url, 303);
    }

    const failUrl = new URL('/payment/fail', baseOrigin);
    if (merchantTransactionId) failUrl.searchParams.set('mtx', merchantTransactionId);
    if (transactionId) failUrl.searchParams.set('tx', transactionId);
    if (responseCode) failUrl.searchParams.set('code', responseCode);
    return NextResponse.redirect(failUrl, 303);
  } catch (_error) {
    console.error('Error in GET handler:', _error);
    const url = new URL('/payment/fail?reason=unexpected', baseOrigin);
    return NextResponse.redirect(url, 303);
  }
}

export async function POST(req: NextRequest) {
  const baseOrigin = req.nextUrl?.origin || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  try {
    console.log('POST request received to callback route');
    
    let base64Response: string | null = null;

    const contentType = req.headers.get('content-type') || '';
    console.log('Content-Type:', contentType);
    console.log('All headers:', Object.fromEntries(req.headers.entries()));
    
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await req.formData();
      console.log('Form data entries:', Array.from(form.entries()).map(([k, v]) => [k, typeof v === 'string' ? v.substring(0, 50) : v]));
      base64Response = (form.get('response') as string) || null;
      console.log('Got response from form-data:', !!base64Response);
    } else if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();
      console.log('Multipart form data entries:', Array.from(form.entries()).map(([k, v]) => [k, typeof v === 'string' ? v.substring(0, 50) : v]));
      base64Response = (form.get('response') as string) || null;
      console.log('Got response from multipart form-data:', !!base64Response);
    } else if (contentType.includes('application/json')) {
      const body = await req.json().catch(() => null);
      console.log('JSON body:', body);
      if (body && typeof body.response === 'string') {
        base64Response = body.response;
      }
      console.log('Got response from JSON:', !!base64Response);
    } else {
      // Try to parse as URLSearchParams if no content-type matches
      try {
        const text = await req.text();
        console.log('Raw text body (first 200 chars):', text.substring(0, 200));
        const params = new URLSearchParams(text);
        base64Response = params.get('response');
        console.log('Got response from URLSearchParams:', !!base64Response);
      } catch (e) {
        console.error('Failed to parse as URLSearchParams:', e);
      }
    }

    if (!base64Response) {
      console.error('No base64Response found - redirecting to fail page');
      return NextResponse.redirect(new URL('/payment/fail?reason=missing_response', baseOrigin), 303);
    }

   
    let decoded: PhonePeDecoded | null = null;
    try {
      decoded = JSON.parse(Buffer.from(base64Response, 'base64').toString());
      console.log('Decoded response:', decoded);
    } catch (_e) {
      console.error('Failed to decode base64 response:', _e);
      return NextResponse.redirect(new URL('/payment/fail?reason=invalid_payload', baseOrigin), 303);
    }

    const responseCode = decoded?.responseCode;
    const merchantTransactionId = decoded?.merchantTransactionId;
    const transactionId = decoded?.transactionId;
    
    console.log('Response code:', responseCode);
    console.log('Merchant Transaction ID:', merchantTransactionId);
    console.log('Transaction ID:', transactionId);

    if (responseCode === 'PAYMENT_SUCCESS') {
      const url = new URL('/payment/success', baseOrigin);
      if (merchantTransactionId) url.searchParams.set('mtx', merchantTransactionId);
      if (transactionId) url.searchParams.set('tx', transactionId);
      console.log('Redirecting to success page:', url.toString());
      return NextResponse.redirect(url, 303);
    }

   
    const failUrl = new URL('/payment/fail', baseOrigin);
    if (merchantTransactionId) failUrl.searchParams.set('mtx', merchantTransactionId);
    if (transactionId) failUrl.searchParams.set('tx', transactionId);
    if (responseCode) failUrl.searchParams.set('code', responseCode);
    console.log('Redirecting to fail page:', failUrl.toString());
    return NextResponse.redirect(failUrl, 303);
  } catch (_error) {
    console.error('Error in POST handler:', _error);
    const url = new URL('/payment/fail?reason=unexpected', baseOrigin);
    return NextResponse.redirect(url, 303);
  }
}


