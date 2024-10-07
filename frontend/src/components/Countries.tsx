import { useCountriesQuery } from "@/graphql/generated/schema";
import CountryCard from "./cards/countryCard";


const Countries: React.FC = () => {

  const { data, loading, error } = useCountriesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  
  return (
    <section>
      <ul 
        className=" grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {data && data.countries.map(country => (
          <li key={country.id}>
            <CountryCard country={country} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Countries;