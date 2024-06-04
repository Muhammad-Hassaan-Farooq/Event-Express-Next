import axios from "axios";
import { cookies } from "next/headers";

const DetialPage = async ({ params }) => {
  const token = cookies().get("token");

  const response = await axios.get(
    `http://localhost:3000/event/getEvent/${params._id}`,
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );
  return (
    <div>
      <h1>{response.data.data.title}</h1>
      <h1>{response.data.data.description}</h1>
      <h1>{response.data.data.location}</h1>
    </div>
  );
};

export default DetialPage;
