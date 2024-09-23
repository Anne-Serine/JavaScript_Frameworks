import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onFormSubmit(data) {
    console.log(data);
  }

  return (
    <div className="container flex gap-5">
      <div className="max-w-[35rem] w-full">
        <h1 className="text-4xl pb-5">Contact us</h1>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="flex flex-col gap-1 border-ecom-dark border p-8 rounded-sm shadow-md"
        >
          <label htmlFor="fullName">Full name</label>
          <input type="text" id="fullName" {...register("fullName")} />
          <p className="text-red-500" role="alert">
            {errors.fullName?.message}
          </p>

          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" {...register("subject")} />
          <p className="text-red-500" role="alert">
            {errors.subject?.message}
          </p>

          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <p className="text-red-500" role="alert">
            {errors.email?.message}
          </p>

          <label htmlFor="message">Message</label>
          <textarea className="mb-5" id="message" rows={5} {...register("message")} />
          <p className="text-red-500" role="alert">
            {errors.message?.message}
          </p>

          <Button text="Send" type="secondary" />
        </form>
      </div>
      
      <aside>
        <p>testing</p>
      </aside>
    </div>
  );
}

export default Contact;
