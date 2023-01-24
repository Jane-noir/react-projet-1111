export default function signinScreen() {
  return (
    <Container className="small-container">
      <Helmet>
        <title></title>
      </Helmet>
      <h1 className="my-3">Signe in</h1>
      <form>
        <form.Group className="mb-3" controlId="email"></form.Group>
      </form>
    </Container>
  );
}
