import * as yup from "yup";
import VMasker from "vanilla-masker";

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Nome obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),
  phone: yup
    .string()
    .trim()
    .required("Telefone obrigatório")
    .test("testPhone", "Telefone inválido", (value) => {
      const num = VMasker.toNumber(value);
      if (num.length === 11) {
        return true;
      }
      return false;
    }),
  email: yup
    .string()
    .trim()
    .required("E-mail obrigatório")
    .email("E-mail inválido"),
  password: yup
    .string()
    .trim()
    .required("Senha obrigatória")
    .min(6, "Senha deve ter pelo menos 6 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais")
    .required("Confirme sua senha"),
});
