export async function POST(request: Request) {
  const body = (await request.json()) as {
    name?: string;
    email?: string;
    subject?: string;
    requestType?: string;
    message?: string;
    contactConsent?: boolean;
  };

  if (
    !body.name?.trim() ||
    !body.email?.trim() ||
    !body.subject?.trim() ||
    !body.requestType?.trim() ||
    !body.message?.trim() ||
    !body.contactConsent
  ) {
    return Response.json({ message: 'Niepoprawne dane formularza.' }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(body.email)) {
    return Response.json({ message: 'Niepoprawny adres e-mail.' }, { status: 400 });
  }

  return Response.json({ message: 'Zgłoszenie zostało przyjęte.' }, { status: 200 });
}
