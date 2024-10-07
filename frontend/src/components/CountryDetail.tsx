import { useCountryQuery } from "@/graphql/generated/schema";


type CountryDetailProps = {
  code: string
};

const CountryDetail: React.FC<CountryDetailProps> = ({ code }) => {

  const { data, loading, error } = useCountryQuery({
    variables: {
      code: code
    }
  })

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="h-[50vh] flex items-center justify-center">
      {data && 
        <div className=" flex flex-col justify-center items-center">
          <div className="mb-4">{data.country.emoji}</div>
          <h1 className="font-medium mb-1">Name: {data.country.name} ({data.country.code})</h1>
          <p  className="font-medium">Continent: {data.country.continent?.name}</p>
        </div>
      }
    </div>
  )
}

export default CountryDetail;