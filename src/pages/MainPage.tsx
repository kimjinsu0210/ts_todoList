import Todos from "../components/Todo/Todos";
import Form from "../components/Form/Form";
import { Layout } from "../components/Layout/Layout";

function MainPage() {
  return (
    <Layout>
      <Form />
      <Todos />
    </Layout>
  );
}

export default MainPage;