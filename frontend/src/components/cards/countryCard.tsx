import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { Country } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

type CountryCardProps = {
  country: Country,
};

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {

  const router = useRouter();

  return (
    <Card 
      className="p-3 hover:cursor-pointer hover:border hover:border-[#f7146b]"
      onClick={() => router.push(`/country/${country.code}`)}
    >
      <CardTitle className="mb-1">{country.name} ({country.code})</CardTitle>
      <CardDescription>Continent: {country.continent?.name}</CardDescription>
      <CardContent>{country.emoji}</CardContent>
    </Card>
  )
}

export default CountryCard;