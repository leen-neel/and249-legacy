import axios from "axios";

const API_URL = "https://and249-portfolio-api.herokuapp.com/api/";

const sendMail = async (message) => {
  try {
    await axios({
      method: "post",
      url: `${API_URL}email/contactsend`,
      data: {
        message,
      },
    });
  } catch (error) {
    throw new Error("EmailFailed");
  }
};

export { sendMail };
