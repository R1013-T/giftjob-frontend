'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  question: z.string().min(1, { message: 'Question is required.' }),
  content: z.string().min(1, { message: 'Content is required.' }),
})

export default function EntrySheetInput({
  setEntrySheetState,
  inputData,
  setInputData,
}: {
  setEntrySheetState: (state: string) => void
  inputData?: { question: string; content: string }
  setInputData: (data: { question: string; content: string }) => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: inputData?.question || '',
      content: inputData?.content || '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setInputData(values)
    setEntrySheetState('loading')
  }

  return (
    <div className="h-full p-2 text-base">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Reason for wishing to join the company"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your Entry Sheet Content."
                    className="resize-none h-[45dvh]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="tracking-wider block w-full lg:w-auto"
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  )
}
