import { InputGroup } from "@/components/ui/input-group";
import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      id="form"
      name="form"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup
        position={"relative"}
        width={{ base: "100%", md: "100%", lg: "100%" }}
      >
        <>
          <Input
            ref={ref}
            width={"100%"}
            borderRadius={20}
            placeholder="Search Games..."
            variant="subtle"
            css={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='gray'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.099zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "10px center",
              backgroundSize: "16px",
              paddingLeft: "35px", // Push text to the right to avoid overlap
            }}
          ></Input>
        </>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
