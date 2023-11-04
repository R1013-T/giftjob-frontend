import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import BackButton from '@/components/common/button/BackButton'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  setDialogState: (dialogState: string) => void
  setCategory: (category: string) => void
}

export default function SelectCategory(props: Props) {
  const FormSchema = z.object({
    category: z.string({
      required_error: 'Please select a category to display.',
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    props.setCategory(data.category)
    props.setDialogState('inputUserContent')
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="select a category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="当社を志望する理由を教えてください。">
                      Reason for applying
                    </SelectItem>
                    <SelectItem value="自己PRをしてください">
                      Self Promotion
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <div className="flex flex-wrap-reverse justify-between mt-3">
            <div className="w-full m-2 lg:w-auto flex justify-center">
              <BackButton link="/main" />
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
