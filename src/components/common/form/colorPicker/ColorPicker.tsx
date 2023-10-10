import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

type Props = {
  form: any
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

export default function ColorPicker(props: Props) {
  return (
    <div className="p-2">
      <FormField
        control={props.form.control}
        name="color"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Color</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex gap-1.5"
              >
                {colors.map((color) => (
                  <FormItem key={color}>
                    <FormControl>
                      <RadioGroupItem
                        style={{
                          backgroundColor: `var(--color-${color}-bg)`,
                          border: `2px solid var(--color-${color})`,
                          color: `var(--color-${color})`,
                        }}
                        value={color}
                        id={color}
                      />
                    </FormControl>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}
