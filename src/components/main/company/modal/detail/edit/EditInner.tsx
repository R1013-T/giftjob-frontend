'use client'

import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { InfoCircle, Loader } from 'tabler-icons-react'
import type * as z from 'zod'

import ColorPicker from '@/components/common/form/colorPicker/ColorPicker'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import type { Company } from '@/lib/gql/graphql'
import { GetCompanyDocument, useUpdateCompanyMutation } from '@/lib/gql/graphql'
import formatCapitalizedWords from '@/utils/common/formatCapitalizedWords'
import { inputFields } from '@/utils/main/company/defaultInfoFields'
import { defaultCompanyInfoFormSchema } from '@/utils/main/company/defaultInfoSchema'

type Props = {
  company: Company
  setIsOpen: (isOpen: boolean) => void
}

export default function CompanyEditInner(props: Props) {
  const [AlertMessage, setAlertMessage] = useState('')

  const [updateCompany, { data, loading, error }] = useUpdateCompanyMutation({
    refetchQueries: [
      {
        query: GetCompanyDocument,
        variables: { id: props.company.id },
      },
    ],
  })

  const defaultValues = {
    name: props.company?.name as string,
    color: props.company?.color as string,
    email: props.company?.email as string,
    tell: props.company?.tell as string,
    address: props.company?.address as string,
    industry: props.company?.industry as string,
    employees_number: props.company?.employees_number as number,
    site_url: props.company?.site_url as string,
  }

  const form = useForm<z.infer<typeof defaultCompanyInfoFormSchema>>({
    resolver: zodResolver(defaultCompanyInfoFormSchema),
    defaultValues: {
      ...defaultValues,
    },
  })

  async function onSubmit(data: z.infer<typeof defaultCompanyInfoFormSchema>) {
    await updateCompany({
      variables: {
        input: {
          id: props.company.id,
          ...data,
        },
      },
    }).then((res) => {
      if (!res.data) return
      toast({
        title: 'Company created successfully 🎉',
        description: `Company ${res.data.updateCompany?.name} has been created successfully!`,
      })
      props.setIsOpen(false)
    })
  }

  useEffect(() => {
    if (error?.message) {
      setAlertMessage(error.message)
    } else {
      setAlertMessage('')
    }
  }, [error])

  return (
    <Form {...form}>
      {AlertMessage && (
        <Alert variant="destructive" className="bg-red-100 mb-3">
          <ExclamationCircleIcon className="h-5 w-5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{AlertMessage}</AlertDescription>
        </Alert>
      )}
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
                <ColorPicker form={form} />
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
          </Accordion>
        </div>
        <Button
          className="w-full tracking-widest"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <Loader className="animate-spin" size={18} strokeWidth={2} />
              <p className="font-normal">Updating...</p>
            </div>
          ) : (
            'Update'
          )}
        </Button>
      </form>
    </Form>
  )
}
