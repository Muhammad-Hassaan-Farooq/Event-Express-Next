import axios from 'axios';
import Cookies from "js-cookie";

const DetialPage = async ({ params }) => {
    const token = Cookies.get("token");
    console.log(token);
    const response = await axios.get(`http://localhost:3000/event/getEvent/${params._id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    return (
        <div>
            <h1>{response.data.title}</h1>
        </div>
    );
}

export default DetialPage;