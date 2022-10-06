import React, { useState } from "react";
import {
  Container,
  ContainerLayout,
  Span,
  Title,
  ContactTitle,
  FormContainer,
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
  name: yup.string().required(),
  email: yup.string().email().required(),
  companyName: yup.string().required(),
  role: yup.string().required(),
  message: yup.string().required(),
});

export function ContactUsSection() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState<boolean>();
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
    console.log("entrou");

    if (value.length < maxLengthInput) {
      setErro(true);
      return;
    }
    setValid(true);
    console.log("value", value.length);
    console.log("max length", maxLengthInput);
    return true;
  };

  function onChangeInput(value: string) {
    setValue(value);
    setValid(false);
    setErro(false);
  }

  const onSubmit = handleSubmit((data: any) => {
    const isValid = validationInputPhone();
    if (isValid) {
      console.log({ value, ...data });
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
              <input type="text" placeholder="Name" {...register("name")} />
              <p style={{ color: "red" }}>{errors.name?.message}</p>

              <input type="email" placeholder="Email" {...register("email")} />
              <p style={{ color: "red" }}>{errors.email?.message}</p>

              <input
                type="text"
                placeholder="Company's Name"
                {...register("companyName")}
              />
              <p style={{ color: "red" }}>{errors.companyName?.message}</p>

              <input
                type="text"
                placeholder="Your Role"
                {...register("role")}
              />
              <p style={{ color: "red" }}>{errors.role?.message}</p>

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
              {erro && <p style={{ color: "red" }}>Número inválido!</p>}
              <h1>{value}</h1>
              {valid && (
                <h2 style={{ color: "greenyellow" }}>Este número é válido!</h2>
              )}

              <textarea
                {...register("message")}
                placeholder="Please feel free to enter all information that can help us to assist you"
              ></textarea>
              <p style={{ color: "red" }}>{errors.message?.message}</p>

              <button type="submit">Submit</button>
            </form>
          </FormContainer>
        </ContainerLayout>
      </motion.div>
    </Container>
  );
}
