import { BallTriangle } from "react-loader-spinner";
import { Container } from "@material-ui/core";

export default function Loading() {
  return (
    <Container className="container">
      <BallTriangle color="#0c0636" />
    </Container>
  );
}
