import Button from "../components/common/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Minimum 3 characters required")
      .required("Please enter your full name"),
    subject: yup
      .string()
      .min(3, "Minimum 3 characters required")
      .required("Enter a subject"),
    email: yup
      .string()
      .email("Enter a valid email address")
      .required("Please enter your email address"),
    message: yup
      .string()
      .min(3, "Minimum 3 characters required")
      .required("Write your message here"),
  })
  .required();

function Contact(value) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [submitted, setSubmitted] = useState(false);

  function onFormSubmit(data) {
    console.log("Form data:", data);
    setSubmitted(true);
  }

  return (
    <div className="">
      <div className="bg-ecom-white w-full">
        <h1 className="container text-3xl">Contact us</h1>
        <p className="container ">
          We’d love to hear from you! <br /> Whether you have questions,
          feedback, or need assistance with your order, <br /> our team is here
          to help. <br className="mb-4" />
        </p>
      </div>
      <div className="container flex flex-wrap gap-10 justify-between my-6">
        <div className="max-w-[36rem] w-full">
          <p className="py-5">
            Feel free to reach out to us using the form below <br /> or through
            any of our contact methods. <br /> We aim to respond to all
            inquiries within 24-48 hours.
          </p>
          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="flex flex-col gap-1 bg-ecom-dark p-8 rounded-sm shadow-md"
          >
            <label htmlFor="fullName" className="text-ecom-light">
              Full name
            </label>
            <input type="text" id="fullName" {...register("fullName")} />
            <p className="text-red-300" role="alert">
              {errors.fullName?.message}
            </p>

            <label htmlFor="subject" className="text-ecom-light">
              Subject
            </label>
            <input type="text" id="subject" {...register("subject")} />
            <p className="text-red-300" role="alert">
              {errors.subject?.message}
            </p>

            <label htmlFor="email" className="text-ecom-light">
              Email
            </label>
            <input type="email" id="email" {...register("email")} />
            <p className="text-red-300" role="alert">
              {errors.email?.message}
            </p>

            <label htmlFor="message" className="text-ecom-light">
              Message
            </label>
            <textarea
              className="mb-5"
              id="message"
              rows={5}
              {...register("message")}
            />
            <p className="text-red-300" role="alert">
              {errors.message?.message}
            </p>

            <Button text="Send" type="submit" onClick={() => value} />
          </form>
          {submitted && (
            <p role="status" className="py-2 text-green-800">
              Your data has been logged in the console
            </p>
          )}
        </div>

        <aside className="flex flex-col justify-between mx-auto">
          <dl>
            <div className="flex flex-col justify-center items-center text-center gap-2 border-b border-opacity-30 border-b-ecom-dark p-8">
              <dt className="flex gap-3 text-lg font-semibold">
                <Clock color="orange" />
                Office Hours
              </dt>
              <dd>
                Monday – Friday, <br />
                9:00 AM – 5:00 PM
              </dd>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-2 border-b border-opacity-30 border-b-ecom-dark  p-8">
              <dt className="flex gap-3 text-lg font-semibold">
                <MapPin color="orange" />
                Address
              </dt>
              <dd>42 Trendsetter Avenue</dd>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-2 border-b border-opacity-30 border-b-ecom-dark p-8">
              <dt className="flex gap-3 text-lg font-semibold">
                <Phone color="orange" />
                Phone
              </dt>
              <dd>+47 87654321</dd>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-2 border-b border-opacity-30 border-b-ecom-dark p-8">
              <dt className="flex gap-3 text-lg font-semibold">
                <Mail color="orange" />
                Email
              </dt>
              <dd>nuuyuu@email.com</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
