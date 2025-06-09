"use client";

import React, { useState, } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
// import Link from "next/link";



const formSchema = z.object({
    emailAddress: z.string().email("Invalid email address"),
    company: z.string().min(3, "Company name must be at least 3 characters"),
    contactNumber: z.string().min(10, "Contact number must be at least 10 digits"),
    name: z.string().min(1, "Name is required"),
    message: z.string().optional().or(z.literal("")),
});

export function DialogDemo() {
    //   const [statusMessage, setStatusMessage] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            emailAddress: "",
            company: "",
            contactNumber: "",
            message: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        try {
            const response = await fetch('/api/UserDemo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // console.log('Email sent successfully');
                toast.success("Email sent successfully");
                form.reset();
                setDialogOpen(false);
            } else {
                // console.error('Failed to send email');
                toast.error("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to send email. Please try again.");
        }
        // finally {
        //   setDialogOpen(true);
        // }
    };

    // useEffect(() => {
    //   if (dialogOpen) {
    //     const open = setTimeout(() => {
    //       setDialogOpen(false);
    //       setStatusMessage("");
    // toast("Email succcessfull sent.")
    //     },); // 50 seconds
    //     return () => clearTimeout(open);
    //   }
    // }, [dialogOpen]);

    return (

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild className="bg-sky-400">
                <Button className="text-white bg-sky-400 border-none hover:bg-sky-400 hover:text-white hover:shadow-none focus:ring-0 focus:outline-none active:scale-100 rounded-b-lg">
                    Ask For A Demo
                </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Exceleed</DialogTitle>
                    <DialogDescription>
                        TRUSTED PARTNER FOR IT and AV technology....
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contactNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contact Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Contact Number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Company Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Message(Optional)" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={form.formState.isSubmitting} className="flex gap-1 bg-blue-500 w-full">  {form.formState.isSubmitting ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Please Wait...
                            </>
                        ) : (
                            "Ask Demo"
                        )}</Button>
                        {/* <div>
              <Link href={"/UserRegisterForm"}>
                <Button type="submit" disabled={form.formState.isSubmitting} className="flex gap-1 bg-blue-500 w-full">
                  Register User
                </Button>
              </Link>
            </div> */}
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default function Home() {
    return (
        <main className="flex  flex-col items-center justify-between border-none">
            <DialogDemo />
        </main>
    );
}


