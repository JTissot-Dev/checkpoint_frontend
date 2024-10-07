import CountryDetail from "@/components/CountryDetail";
import { useRouter } from "next/router";


export default function Country() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div className="p-4">
      <CountryDetail
        code={String(code)}
      />
    </div>
  );
};
