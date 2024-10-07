import Countries from "@/components/Countries";
import AddCountryForm from "@/components/forms/addCountryForm";


export default function Home() {
  return (
    <div className="p-4">
      <div className="p-4 mb-8 border rounded-md">
        <AddCountryForm />
      </div>
      <Countries />
    </div>
  );
};
