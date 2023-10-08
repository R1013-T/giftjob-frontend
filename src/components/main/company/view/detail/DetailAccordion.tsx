import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import formatCapitalizedWords from '@/utils/common/formatCapitalizedWords'

type Props = {
  fields: {
    [key: string]: string | number | undefined | null
  }
  icon: any
}

export default function DetailAccordion(props: Props) {
  return (
    <Accordion type="single" defaultValue="general" collapsible>
      <AccordionItem value="general">
        <AccordionTrigger>
          <div className="flex justify-start items-center gap-2 text-primary">
            <props.icon
              size={27}
              strokeWidth={2}
              className="bg-primary/10 rounded-md p-1"
            />
            <p>General Information</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="px-2">
            {Object.entries(props.fields).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm opacity-80">
                  {formatCapitalizedWords(key)}
                </p>
                <p className="mb-2 text-title text-base">{value}</p>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
