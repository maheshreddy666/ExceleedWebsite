"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import z from "zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
    emailAddress: z.string().email("Invalid email address"),
    company: z.string().min(3, "Company name must be at least 3 characters"),
    contactNumber: z.string().min(10, "Contact number must be at least 10 digits"),
    name: z.string().min(1, "Name is required"),
    message: z.string().optional().or(z.literal("")),
});

export function DialogDemo() {
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
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success("Email sent successfully");
                form.reset();
                setDialogOpen(false);
            } else {
                toast.error("Failed to send email. Please try again.");
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error("Failed to send email. Please try again.");
        }
    };

    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <Button className="text-white bg-sky-500 rounded-lg shadow hover:bg-sky-600 transition-all">
                    Request a Demo
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px] rounded-lg">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Exceleed</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                        TRUSTED PARTNER FOR IT and AV technology...
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
                        {["name", "emailAddress", "contactNumber", "company"].map((field) => (
                            <FormField
                                key={field}
                                control={form.control}
                                name={field as keyof z.infer<typeof formSchema>}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm capitalize">{field.name === "emailAddress" ? "Email" : field.name}</FormLabel>
                                        <FormControl>
                                            <Input
                                                type={field.name === "emailAddress" ? "email" : "text"}
                                                placeholder={field.name === "emailAddress" ? "email@example.com" : field.name}
                                                {...field}
                                                className="rounded-lg"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        ))}

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Message (optional)"
                                            {...field}
                                            className="rounded-lg"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="w-full flex gap-2 items-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                        >
                            {form.formState.isSubmitting ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Please Wait...
                                </>
                            ) : (
                                "Ask Demo"
                            )}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default function Home() {
    return (
        <main className="flex  items-center justify-center bg-gray-100">
            <DialogDemo />
        </main>
    );
}
