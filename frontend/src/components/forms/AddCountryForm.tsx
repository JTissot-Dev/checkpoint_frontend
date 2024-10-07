import { useAddCountryMutation } from "@/graphql/generated/schema";
import { COUNTRIES } from "@/graphql/queries";
import { Button } from "../ui/button";


const AddCountryForm: React.FC = () => {

  const [addCountry] = useAddCountryMutation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const emoji = formData.get("emoji") as string;
    const code = formData.get("code") as string;

      addCountry({
        variables: {
          data: {
            name,
            emoji,
            code
          }
        },
        onError: (error) => console.error(error),
        refetchQueries: [COUNTRIES]
      });
      form.reset();
  }


  return (
    <form 
      onSubmit={e => handleSubmit(e)}
      className="flex flex-col space-y-4 sm:my-10"
    >
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="p-2 border rounded-md"
      />
      <input
        name="emoji"
        type="text"
        placeholder="Emoji"
        className="p-2 border rounded-md"
      />
      <input
        name="code"
        type="text"
        placeholder="Code"
        className="p-2 border rounded-md"
      />
      <Button
        type="submit"
        className="p-2 text-white rounded-md"
      >
        Add country
      </Button>
    </form>
  );
}

export default AddCountryForm;