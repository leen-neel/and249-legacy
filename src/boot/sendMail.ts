import axios from "axios";

type Message = {
  name: String;
  sender: String;
  subject: String;
  body: String;
};

const API_URL = "http://localhost:3000/api/";

const sendMail = async (message: Message): Promise<void> => {
  try {
    const email = await axios({
      method: "post",
      url: `${API_URL}email/contactsend`,
      data: {
        message,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export { sendMail };
