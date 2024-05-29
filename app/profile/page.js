import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import ProfilePage from "../components/ProfilePage";

const MyProfile = async () => {
  const token = cookies().get("token");
  const decodedToken = jwtDecode(token.value);
  const response = await axios.post(
    "http://localhost:3000/profile/viewProfile",
    {
      id: decodedToken.id,
    },
    {
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    }
  );

  const handleDelete = async function (password) {
    "use server";
    try {
      const response = await axios.post(
        "http://localhost:3000/profile/deleteMyAccount",
        {
          id: decodedToken.id,
          password: password,
        },
        {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        }
      );
      if (response.data.success) {
        return { success: true, message: response.data.message };
      }
      return { success: false, message: response.data.message };
    } catch (error) {
      return { success: false, message: response.data.message };
    }

  };

  return (
    <div>
      <ProfilePage
        firstName={response.data.data.firstName}
        lastName={response.data.data.lastName}
        email={response.data.data.email}
        role={response.data.data.role}
        status={response.data.data.status}
        handleDelete={handleDelete}
      />
    </div>
  );
};


export default MyProfile;
