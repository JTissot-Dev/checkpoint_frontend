import Countries from "@/components/Countries";
import AddCountryForm from "@/components/forms/AddCountryForm";


export default function Home() {
  return (
    <div className="p-2 sm:p-20 pt-4">
      <div className="p-4 mb-8 border rounded-md sm:mx-20 lg:mx-72">
        <AddCountryForm />
      </div>
      <Countries />
    </div>
  );
};
