
import { createContact } from "../../../server/controller/contact";

export default async (req, res) => {
  const { name, email, category , title , message , isUser  } = req.body;

  const data = await createContact({  name, email, category , title , message , isUser});

  if (data.status === "SUCCESS") {
    res.status(200).json(data);
  } else if (data.status === "Error") {
    res.status(400).json(data);
  }
};
