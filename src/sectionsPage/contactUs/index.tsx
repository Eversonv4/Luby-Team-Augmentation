import React, { useState } from "react";
import {
  Container,
  ContainerLayout,
  Span,
  Title,
  ContactTitle,
  FormContainer,
  InputLayout,
  ErrorMessage,
} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { motion, Variants } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const FadeAnimation: Variants = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

interface IContactForm {
  name: string;
  email: string;
  companyName: string;
  role: string;
  phone?: string;
  message: string;
}

const schemaValidation = yup.object({
  name: yup.string().required("Please, Insert a Name!"),
  email: yup.string().email().required("Insert a valid Email!"),
  companyName: yup.string().required("Please, insert a Company Name!"),
  role: yup.string().required("Please, insert your role in your company!"),
  message: yup.string().required("Please, leave us a message!"),
});

export function ContactUsSection() {
  const [value, setValue] = useState("");
  // const [valid, setValid] = useState<boolean>();
  const [maxLengthInput, setMaxLengthInput] = useState(0);
  const [erro, setErro] = useState<boolean>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({
    resolver: yupResolver(schemaValidation),
  });

  const validationInputPhone = () => {
    // console.log("entrou");

    if (value.length < maxLengthInput) {
      setErro(true);
      return;
    }
    // setValid(true);
    // console.log("value", value.length);
    // console.log("max length", maxLengthInput);
    return true;
  };

  function onChangeInput(value: string) {
    setValue(value);
    // setValid(false);
    setErro(false);
  }

  const onSubmit = handleSubmit((data: IContactForm) => {
    const isValid = validationInputPhone();
    if (isValid) {
      console.log({ phone: value, ...data });
    }
  });

  return (
    <Container id="contact-section">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "some" }}
        variants={FadeAnimation}
      >
        <ContainerLayout>
          <div>
            <Span>let's talk about</Span>
            <Title>Team Augmentation</Title>
            <ContactTitle>
              Please fill in the form
              <br />
              or call <strong>+1 305 600 1993</strong>
            </ContactTitle>
          </div>
          <FormContainer>
            <form onSubmit={onSubmit}>
              <InputLayout>
                <input type="text" placeholder="Name" {...register("name")} />
                <ErrorMessage>{errors.name?.message}</ErrorMessage>
              </InputLayout>

              <InputLayout>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                <ErrorMessage>{errors.email?.message}</ErrorMessage>
              </InputLayout>

              <InputLayout>
                <input
                  type="text"
                  placeholder="Company's Name"
                  {...register("companyName")}
                />
                <ErrorMessage>{errors.companyName?.message}</ErrorMessage>
              </InputLayout>

              <InputLayout>
                <input
                  type="text"
                  placeholder="Your Role"
                  {...register("role")}
                />
                <ErrorMessage>{errors.role?.message}</ErrorMessage>
              </InputLayout>

              <InputLayout>
                <PhoneInput
                  country="us"
                  value={value}
                  onChange={(value) => onChangeInput(value)}
                  autoFormat={true}
                  placeholder="Your phone number"
                  enableSearch={true}
                  disableSearchIcon={false}
                  isValid={(inputNumber, country: any, onlyCountries: any) => {
                    // console.log(country?.format);
                    let StringSplit = country?.format;
                    const SplitedString = StringSplit.split("");
                    let filteredString = SplitedString.filter(
                      (char: string) => char === "."
                    );
                    let resultLength;
                    if (StringSplit.match(/\s..$/gm)) {
                      // console.log("Matches!!");
                      resultLength = filteredString.slice(
                        0,
                        filteredString.length - 2
                      );
                    } else {
                      // console.log("NOT MATCHES!");
                      resultLength = filteredString;
                    }
                    setMaxLengthInput(resultLength.length);
                    return true;
                  }}
                />
                {erro && (
                  <ErrorMessage>Please, insert a valid number!</ErrorMessage>
                )}
              </InputLayout>

              <InputLayout>
                <textarea
                  {...register("message")}
                  placeholder="Please feel free to enter all information that can help us to assist you"
                ></textarea>
                <ErrorMessage>{errors.message?.message}</ErrorMessage>
              </InputLayout>

              <button type="submit">Submit</button>
            </form>
          </FormContainer>
        </ContainerLayout>
      </motion.div>
    </Container>
  );
}
