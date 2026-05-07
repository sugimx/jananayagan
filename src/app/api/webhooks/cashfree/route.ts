export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (body.type !== 'PAYMENT_FORM_ORDER_WEBHOOK') {
      return Response.json({ success: false, message: 'Invalid webhook type' }, { status: 400 });
    }

    if (body.data?.order?.order_status !== 'PAID') {
      return Response.json({ success: false, message: 'Payment not completed' }, { status: 400 });
    }

    return Response.json({ success: true, message: 'Order received' });
  } catch (error) {
    return Response.json({ success: false, message: 'Error processing webhook' }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ success: true, message: 'Webhook endpoint is running' });
}
