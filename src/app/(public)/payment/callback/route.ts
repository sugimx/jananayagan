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
    
   
    
    if (!base64Response) {
      console.error('No base64Response in query params');
      return NextResponse.redirect(new URL('/payment/fail?reason=missing_response', baseOrigin), 303);
    }

    let decoded: PhonePeDecoded | null = null;
    try {
      decoded = JSON.parse(Buffer.from(base64Response, 'base64').toString());
    
    } catch (_e) {
      console.error('Failed to decode base64 response:', _e);
      return NextResponse.redirect(new URL('/payment/fail?reason=invalid_payload', baseOrigin), 303);
    }

    const responseCode = decoded?.responseCode;
    const merchantTransactionId = decoded?.merchantTransactionId;
    const transactionId = decoded?.transactionId;
    

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

    
    let base64Response: string | null = null;

    const contentType = req.headers.get('content-type') || '';
   
    
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const form = await req.formData();
            base64Response = (form.get('response') as string) || null;
      
    } else if (contentType.includes('multipart/form-data')) {
      const form = await req.formData();
      
      base64Response = (form.get('response') as string) || null;
     
    } else if (contentType.includes('application/json')) {
      const body = await req.json().catch(() => null);
      
      if (body && typeof body.response === 'string') {
        base64Response = body.response;
      }
    
    } else {
      
      try {
        const text = await req.text();
       
        const params = new URLSearchParams(text);
        base64Response = params.get('response');
    
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
    
    } catch (_e) {
      console.error('Failed to decode base64 response:', _e);
      return NextResponse.redirect(new URL('/payment/fail?reason=invalid_payload', baseOrigin), 303);
    }

    const responseCode = decoded?.responseCode;
    const merchantTransactionId = decoded?.merchantTransactionId;
    const transactionId = decoded?.transactionId;
  

    if (responseCode === 'PAYMENT_SUCCESS') {
      const url = new URL('/payment/success', baseOrigin);
      if (merchantTransactionId) url.searchParams.set('mtx', merchantTransactionId);
      if (transactionId) url.searchParams.set('tx', transactionId);
     
      return NextResponse.redirect(url, 303);
    }

   
    const failUrl = new URL('/payment/fail', baseOrigin);
    if (merchantTransactionId) failUrl.searchParams.set('mtx', merchantTransactionId);
    if (transactionId) failUrl.searchParams.set('tx', transactionId);
    if (responseCode) failUrl.searchParams.set('code', responseCode);
  
    return NextResponse.redirect(failUrl, 303);
  } catch (_error) {
    console.error('Error in POST handler:', _error);
    const url = new URL('/payment/fail?reason=unexpected', baseOrigin);
    return NextResponse.redirect(url, 303);
  }
}


