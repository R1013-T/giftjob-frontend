import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import type * as z from 'zod'

import CompanySelect from '@/components/common/form/companySelect/CompanySelect'
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
import type { Person } from '@/lib/gql/graphql'
import type { SessionUser } from '@/types/session'
import formatCapitalizedWords from '@/utils/common/formatCapitalizedWords'
import { PersonFormSchema } from '@/utils/main/people/schema'

type Props = {
  inputValues: Person | undefined
  setInputValues: (inputValues: Person) => void
  setAddState: (addState: string) => void
}

const inputFields: string[] = [
  'name',
  'department',
  'position',
  'email',
  'tell',
]

export default function AddPersonForm(props: Props) {
  const { data: session, status }: any = useSession()
  const sessionUser = session?.sessionUser as SessionUser

  const form = useForm<z.infer<typeof PersonFormSchema>>({
    resolver: zodResolver(PersonFormSchema),
    defaultValues: {
      company_id: props.inputValues?.company_id || '',
      name: props.inputValues?.name || '',
      department: props.inputValues?.department || '',
      position: props.inputValues?.position || '',
      email: props.inputValues?.email || '',
      tell: props.inputValues?.tell || '',
      memo: props.inputValues?.memo || '',
    },
  })

  function onSubmit(data: z.infer<typeof PersonFormSchema>) {
    props.setInputValues(data as Person)
    props.setAddState('confirm')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 text-left"
      >
        <div className="max-h-70 p-1 overflow-y-auto">
          <CompanySelect userId={sessionUser?.id} form={form} />
          {inputFields.map((name, index) => (
            <div key={index} className="mt-2 px-1">
              <FormField
                control={form.control}
                name={name as any}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formatCapitalizedWords(name as any)}</FormLabel>
                    <Input
                      type="text"
                      placeholder={formatCapitalizedWords(name as any)}
                      className="-translate-y-1.5"
                      {...field}
                    />
                    <FormMessage className="-translate-y-3 text-xs font-normal" />
                  </FormItem>
                )}
              />
            </div>
          ))}
          <FormField
            control={form.control}
            name="memo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Memo</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Memo"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full tracking-widest" type="submit">
          Confirm
        </Button>
      </form>
    </Form>
  )
}
