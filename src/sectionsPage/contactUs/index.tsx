import React from "react";
import {
  Container,
  ContainerLayout,
  Span,
  Title,
  ContactTitle,
  FormContainer,
} from "./styles";

import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { motion, Variants } from "framer-motion";

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

export function ContactUsSection() {
  function MessageConsole(e: any) {
    e.preventDefault();
    console.log("Hello");
  }

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log({ data });
  };

  const handleValidate = (value: string) => {
    const isValid = isValidPhoneNumber(value || "");
    console.log({ isValid });
    return isValid;
  };

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
            <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Company's Name" />
              <Controller
                name="phone-input"
                control={control}
                rules={{
                  validate: (value) => handleValidate(value),
                }}
                render={({ field: { onChange, value } }) => (
                  <PhoneInput
                    value={value}
                    onChange={onChange}
                    defaultCountry="US"
                    id="phone-input"
                    placeholder="Your phone number..."
                  />
                )}
              />
              {errors["phone-input"] && (
                <p className="error-message" style={{ color: "red" }}>
                  Invalid Phone Number
                </p>
              )}

              <input type="text" placeholder="Your Role" />
              <textarea placeholder="Please feel free to enter all information that can help us to assist you"></textarea>

              <button type="submit">Submit</button>
            </form>
          </FormContainer>
        </ContainerLayout>
      </motion.div>
    </Container>
  );
}
