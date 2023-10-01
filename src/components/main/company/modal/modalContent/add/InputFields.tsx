import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { InfoCircle } from 'tabler-icons-react'
import type * as z from 'zod'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { CompanyDefaultInfo, InputField } from '@/types/company'
import formatCapitalizedWords from '@/utils/common/formatCapitalizedWords'
import { inputFields } from '@/utils/main/company/defaultInfoFields'
import { defaultCompanyInfoFormSchema } from '@/utils/main/company/defaultInfoSchema'

type Props = {
  setAddState: (addState: string) => void
  defaultCompanyInfo: CompanyDefaultInfo | undefined
  setDefaultCompanyInfo: (
    defaultCompanyInfo: CompanyDefaultInfo | undefined
  ) => void
}

export default function InputFields(props: Props) {
  const form = useForm<z.infer<typeof defaultCompanyInfoFormSchema>>({
    resolver: zodResolver(defaultCompanyInfoFormSchema),
    defaultValues: {
      ...props.defaultCompanyInfo,
    },
  })

  function onSubmit(data: z.infer<typeof defaultCompanyInfoFormSchema>) {
    props.setDefaultCompanyInfo(data as CompanyDefaultInfo)
    props.setAddState('confirm')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 text-left"
      >
        <div className="max-h-70 px-1 overflow-y-auto">
          <Accordion type="single" defaultValue="general" collapsible>
            <AccordionItem value="general">
              <AccordionTrigger>
                <div className="flex justify-start items-center gap-2 text-primary">
                  <InfoCircle
                    size={27}
                    strokeWidth={2}
                    className="bg-primary/10 rounded-md p-1"
                  />
                  <p>General Information</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {inputFields.map((inputField) => (
                  <div key={inputField.name} className="mt-2 px-1">
                    <FormField
                      control={form.control}
                      name={inputField.name as any}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {formatCapitalizedWords(inputField.name)}
                          </FormLabel>
                          <Input
                            type={inputField.type}
                            placeholder={formatCapitalizedWords(
                              inputField.name
                            )}
                            className="-translate-y-1.5"
                            {...field}
                          />
                          <FormMessage className="-translate-y-3 text-xs font-normal" />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            {/*<AccordionItem value='item2'>*/}
            {/*  <AccordionTrigger>General Information</AccordionTrigger>*/}
            {/*  <AccordionContent>*/}
            {/*    {inputFields.map((inputField) => (*/}
            {/*      <div*/}
            {/*        key={inputField.name}*/}
            {/*        className='mt-2'*/}
            {/*      >*/}
            {/*        <FormField*/}
            {/*          control={form.control}*/}
            {/*          name={inputField.name as any}*/}
            {/*          render={({ field }) => (*/}
            {/*            <FormItem>*/}
            {/*              <FormLabel>{inputField.label}</FormLabel>*/}
            {/*              <Input*/}
            {/*                type={inputField.type}*/}
            {/*                placeholder={inputField.label}*/}
            {/*                className='-translate-y-1.5'*/}
            {/*                {...field}*/}
            {/*              />*/}
            {/*              <FormMessage*/}
            {/*                className='-translate-y-3 text-xs font-normal'*/}
            {/*              />*/}
            {/*            </FormItem>*/}
            {/*          )}*/}
            {/*        />*/}
            {/*      </div>*/}
            {/*    ))}*/}
            {/*  </AccordionContent>*/}
            {/*</AccordionItem>*/}
          </Accordion>
        </div>
        <Button className="w-full tracking-widest" type="submit">
          Submit
        </Button>
        <div
          className="flex items-center justify-center cursor-pointer hover:underline"
          onClick={() => {
            props.setAddState('selectTemplate')
          }}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <p className="ml-1 mr-5">Back</p>
        </div>
      </form>
    </Form>
  )
}
