import Card from "../components/Card/Card";
import Container from "../components/Container/Container";
import Form from "../Form/Form";
import TextSchedule from "../TextSchedule/TextSchedule";

export default function Schedule() {
  return (
    <Card className="flex flex-col h-full">
      <Container className="flex flex-col gap-6">
        <TextSchedule />
        <Form />
      </Container>
    </Card>
  )
}