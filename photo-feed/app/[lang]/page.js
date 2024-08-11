import { getDictionary } from "./disctionaries";

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  console.log(process.env.BASE_API_URL);

  return (
    <div>{dictionary.followers}</div>
  );
}
