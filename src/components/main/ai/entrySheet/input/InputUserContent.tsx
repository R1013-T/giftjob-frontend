import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

type Props = {
  setDialogState: (dialogState: string) => void
  setContent: (content: string) => void
}

export default function InputUserContent(props: Props) {
  const FormSchema = z.object({
    content: z.string({
      required_error: 'Please enter the content.',
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    props.setContent(data.content)
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Enter the content"
                    className="resize-none h-70"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-wrap-reverse justify-between mt-3">
            <div className="w-full m-2 lg:w-auto flex justify-center">
              <div
                className="flex items-center gap-1 hover:underline text-character text-sm"
                onClick={() => props.setDialogState('selectCategory')}
              >
                <ArrowLeftIcon className="w-4 h-4" />
                <p>back</p>
              </div>
            </div>
            <Button className="w-full lg:w-auto tracking-widest" type="submit">
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
