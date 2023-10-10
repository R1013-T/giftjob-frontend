import { PencilSquareIcon } from '@heroicons/react/24/outline'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'

type Props = {
  setAddState: (addState: string) => void
  setTemplateId: (templateId: string) => void
}

const customTemplate: any[] = [
  // {
  //   id: '1',
  //   name: 'custom template 01',
  //   isTrash: false,
  //   userId: 1,
  //   createdAt: '2021-09-01T00:00:00.000Z',
  //   updatedAt: '2021-09-01T00:00:00.000Z'
  // },
  // {
  //   id: '2',
  //   name: 'custom template 02',
  //   isTrash: false,
  //   userId: 1,
  //   createdAt: '2021-09-01T00:00:00.000Z',
  //   updatedAt: '2021-09-01T00:00:00.000Z'
  // }
]

export default function SelectTemplate(props: Props) {
  const router = useRouter()
  const { toast } = useToast()

  const FormSchema = z.object({
    template: z.string({
      required_error: 'Please select a template to display.',
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    props.setAddState('inputFields')
    props.setTemplateId(data.template)
  }

  const handleTemplate = () => {
    // document.location.href = '/main/settings?tab=template'
    toast({
      title: 'Coming Soon!',
      description:
        'This feature is currently under development and will be available in the future.',
    })
  }

  return (
    <div className="pb-1 text-left">
      <div
        className="absolute top-14 right-6 flex items-center gap-0.5 hover:underline cursor-pointer"
        onClick={handleTemplate}
      >
        <PencilSquareIcon className="w-4 h-4 mb-0.5" />
        <p className="text-xs">Edit template</p>
      </div>
      <p className="text-center text-base">Please select a template</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="template"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Template</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a tempalte" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    {customTemplate.map((template) => (
                      <SelectItem key={template.id} value={template.id}>
                        {template.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full tracking-widest" type="submit">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  )
}
