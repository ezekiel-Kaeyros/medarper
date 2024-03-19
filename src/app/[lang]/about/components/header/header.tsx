import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary';
import NavBar from './navbar/NavBar';

type HeaderProps = {
  bgPath?: string;
};

export default async function Header({
  lang,
  image,
}: {
  lang: Locale;
  image?: any;
}) {
  const { navigation } = await getDictionary(lang);

  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <header>
      <NavBar image={image} lang={lang} navigation={navigation} />
    </header>
  );
}
