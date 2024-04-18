import contactSchema from "./_components/contactSchema";

export default function Page() {
  async function subscribe(formData: FormData) {
    "use server";

    const email = formData.get("email");

    const { email: parsedEmail } = contactSchema.parse({ email });
    console.log(parsedEmail);
  }

  return (
    <form action={subscribe}>
      <input type='email' name='email' />
      <button type='submit'>ok</button>
    </form>
  );
}
