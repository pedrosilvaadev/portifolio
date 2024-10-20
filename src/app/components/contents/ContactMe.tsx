"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import SendButton from "../ui/SendButton";
import { Textarea } from "../ui/Textarea";
import AnimationContainer from "../utils/AnimationContainer";
import { cn, formattedPhoneNumber } from "@/lib/utils";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { sendContactForm } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import { FormValidator, FormValues } from "@/lib/validators/form";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { Button } from "../ui/Button";

const ContactMe = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormValidator),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { mutate: handleSubmit, isPending: isLoading } = useMutation({
    mutationFn: async ({ name, email, phone, message }: FormValues) => {
      const payload = {
        name,
        email,
        subject: "Contact Request by Portfolio",
        phone,
        message,
      };

      await sendContactForm(payload);
    },
    onError: (error) => {
      if (error) {
        console.error(error.message);
        toast("Something went wrong!", {
          description: "Unable to send message, please try again.",
        });
      }
    },
    onSuccess: () => {
      form.reset();
      toast("Your message has been received!", {
        description: "I got your message, I will get back to you soon!",
      });
    },
  });

  return (
    <AnimationContainer customClassName="w-full py-8">
      <div className="flex-col items-center mb-8 lg:items-start">
        <h2 className="text-2xl font-bold tracking-tight text-center text-white lg:text-start">
          Get in Touch
        </h2>
        <p className="mt-2 font-normal text-center lg:text-start text-neutral-300">
          Something on your mind? Feel free to drop me a message.
        </p>

        <div className="flex gap-4 mt-2">
          <Link href="mailto:comercial.pedrosilvadev@gmail.com" target="_blank">
            <Button variant="outline" size="sm">
              <Mail className="w-5 h-5" />
              <span className="ml-2 block">Email</span>
            </Button>
          </Link>
          <Link
            href="https://wa.me/5519995728321?text=Hello+Pedro+%21"
            target="_blank"
          >
            <Button variant="outline" size="sm">
              <Phone className="w-5 h-5" />
              <span className="ml-2 block">Phone</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((e) => handleSubmit(e))}
            className="flex flex-col items-center justify-center w-full space-y-5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      type="text"
                      placeholder="Name"
                      autoComplete="off"
                      className="h-12 px-5 capitalize outline-none"
                    />
                  </FormControl>
                  <FormMessage>
                    <motion.span
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {form?.formState?.errors?.name?.message}
                    </motion.span>
                  </FormMessage>
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center justify-center w-full gap-4 md:flex-row">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      "w-full mb-0",
                      form.formState.errors.phone && "mb-5"
                    )}
                  >
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="off"
                        className="h-12 px-5 outline-none text-white"
                      />
                    </FormControl>
                    <FormMessage>
                      <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form?.formState?.errors?.email?.message}
                      </motion.span>
                    </FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      "w-full mb-0",
                      form.formState.errors.email && "mb-5"
                    )}
                  >
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isLoading}
                        required
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        autoComplete="off"
                        className="h-12 px-5 outline-none"
                        onChange={(e) => {
                          const value = formattedPhoneNumber(e.target.value);
                          field.onChange(value);
                        }}
                      />
                    </FormControl>
                    <FormMessage>
                      <motion.span
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {form?.formState?.errors?.phone?.message}
                      </motion.span>
                    </FormMessage>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      {...field}
                      disabled={isLoading}
                      required
                      rows={5}
                      name="message"
                      placeholder="Message..."
                      autoComplete="off"
                      className="w-full p-5 outline-none resize-none"
                    />
                  </FormControl>
                  <FormMessage>
                    <motion.span
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {form?.formState?.errors?.message?.message}
                    </motion.span>
                  </FormMessage>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center w-full mx-auto">
              <SendButton
                isLoading={isLoading}
                disabled={form.formState.disabled}
              />
            </div>
          </form>
        </Form>
      </div>
    </AnimationContainer>
  );
};

export default ContactMe;
