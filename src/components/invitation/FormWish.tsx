import { Button, Group, Text, Textarea, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React from "react";
import { z } from "zod";

interface IProps {
  name: string;
}
interface WishForm {
  name: string;
  wish: string;
}
const schema = z.object({
  name: z.string().min(3, { message: "nama minimal 3 karakter yaa" }),
  wish: z.string().min(5, {
    message: "ayo, aku tahu harapan mu untuk pengantin lebih dari ini",
  }),
});
const FormWish = ({ name }: IProps) => {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: name.length > 1 ? name : "",
      wish: "",
    },
  });

  const handleSubmit = (
    value: WishForm,
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log({ value, e });
  };
  return (
    <div className="max-w-sm mx-auto">
      <Text>masih belom bisa dapetin value dari submitan</Text>
      <form onSubmit={form.onSubmit((value, e) => handleSubmit(value, e))}>
        <TextInput
          label="name"
          placeholder={"Masukan nama kamu"}
          {...form.getInputProps("name")}
        />
        <Textarea
          label="wish"
          placeholder="Selamat Menikah!"
          {...form.getInputProps("wish")}
        />
        {/* <Group position="center" mt="xl"> */}
        <Button type="submit" fullWidth>
          Submit
        </Button>
        {/* </Group> */}
      </form>
    </div>
  );
};

export default FormWish;
