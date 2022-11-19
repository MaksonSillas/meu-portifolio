import { toast } from "react-toastify";

export function copieEmail() {
  const email = "maksonsantoss4@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    toast.info("Email copiado para área de transferência", {
      autoClose: 2000,
    });
  });
}
