import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";

export function SelectBox({
  items,
  name,
  value,
  onChange,
  className,
}: {
  items: Array<string>
  name?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  className?: string
}) {
  return (
    <NativeSelect
      name={name}
      value={value}
      onChange={onChange}
      className={`${className} border-none outline-none ring-0 rounded-[0px]`}
      required
    >
      <NativeSelectOption value="" className="border-none">Product Interest</NativeSelectOption>
      {items.map((item) => (
        <NativeSelectOption className="outline-none" key={item} value={item}>
          {item}
        </NativeSelectOption>
      ))}
    </NativeSelect>
  )
}


