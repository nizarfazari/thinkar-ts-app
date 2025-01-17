"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  company: z.string().optional(),
  address: z.string().min(5, "Address must be at least 5 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export default function ContactUs() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      address: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission here
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mb-20">
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              First Name
            </label>
            <input
              {...form.register("firstName")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First name"
            />
            {form.formState.errors.firstName && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Last Name
            </label>
            <input
              {...form.register("lastName")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last name"
            />
            {form.formState.errors.lastName && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Company
            </label>
            <input
              {...form.register("company")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company"
            />
            {form.formState.errors.company && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.company.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Address
            </label>
            <input
              {...form.register("address")}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Address"
            />
            {form.formState.errors.address && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.address.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              {...form.register("phone")}
              type="tel"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone"
            />
            {form.formState.errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            {...form.register("message")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
            placeholder="Type your message here"
          />
          {form.formState.errors.message && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#1F78CD] to-[#4B86B0] text-white py-2 px-4 rounded-2xl hover:bg-blue-700 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  )
}

