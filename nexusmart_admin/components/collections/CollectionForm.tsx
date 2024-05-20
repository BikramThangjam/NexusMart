"use client";

import { z } from "zod";

import { Separator } from "../ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import ImageUpload from "../custom_ui/imageUpload";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(2).max(25),
  description: z.string().min(2).max(500).trim(),
  image: z.string(),
});

const CollectionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  });

  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="p-10 w-full">
      <h1 className="font-bold text-2xl text-slate-500">Create Collection</h1>
      <Separator className=" bg-slate-300 mt-4 mb-7" />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea rows={5} placeholder="Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                 <ImageUpload 
                    value={field.value ? [field.value ]: []} 
                    onChange={url => field.onChange(url)} 
                    onRemove={() => field.onChange("")}
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-10">
          <Button className="bg-sky-900 text-white" type="submit">Submit</Button>
          <Button className="bg-orange-500 text-white" type="button" onClick={() => router.push("/collections")}>Discard</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CollectionForm;
