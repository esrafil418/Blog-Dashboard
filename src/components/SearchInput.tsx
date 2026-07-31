import { Input } from "@/components/ui/input";

type SearchInputProps = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({
  value,
  placeholder,
  onChange,
}: SearchInputProps) {
  return (
    <Input
      className="mb-6"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
