import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Cookieverklaring — Orvia",
  robots: { index: false },
};

export default function CookieBeleidPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <LegalHero
          title="Cookieverklaring"
          intro="Deze cookieverklaring legt uit welke cookies en vergelijkbare technologieën we gebruiken op deze website en waarom."
          lastUpdated="30 april 2026"
        />
      </div>

      <LegalContent>
        <h2>1. Wat zijn cookies?</h2>
        <p>
          Cookies zijn kleine tekstbestanden die op je toestel (computer, smartphone, tablet) worden geplaatst wanneer je een website bezoekt. Ze worden door je browser onthouden en bij een volgend bezoek opnieuw uitgelezen. Cookies kunnen verschillende doelen hebben: de site laten werken, je voorkeuren onthouden, of bezoekersgedrag meten.
        </p>

        <h2>2. Welke cookies gebruikt deze website?</h2>
        <p>
          Deze website is bewust eenvoudig opgezet en gebruikt <strong>geen tracking cookies, geen marketing cookies en geen profileringstechnologieën</strong>.
        </p>

        <h3>Strikt noodzakelijke cookies</h3>
        <p>
          Voor de basiswerking van de website kunnen technische cookies worden geplaatst door onze hostingprovider Vercel. Deze cookies zijn noodzakelijk om de website veilig en correct te laten werken (zoals load balancing en beveiliging tegen misbruik). Voor deze cookies is volgens de Belgische Gegevensbeschermingsautoriteit en het EDPB geen voorafgaande toestemming vereist.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Doel</th>
              <th>Bewaartermijn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>__vercel_live_token</code></td>
              <td>Technische werking via Vercel</td>
              <td>Sessie</td>
            </tr>
          </tbody>
        </table>

        <h3>Bezoekstatistieken zonder cookies</h3>
        <p>
          Voor het meten van websitebezoek gebruiken we <strong>Vercel Web Analytics</strong>. Dit is een cookieless analysetool: er worden <strong>geen cookies geplaatst</strong> en <strong>geen persoonsgegevens</strong> opgeslagen. Vercel Analytics werkt met geanonimiseerde, geaggregeerde gegevens (paginaweergaven, herkomstland op landniveau, browsertype). Bezoekers worden niet gevolgd over meerdere sessies of websites.
        </p>
        <p>
          Omdat hiervoor geen persoonsgegevens worden verwerkt en geen informatie op je toestel wordt opgeslagen of uitgelezen, is hiervoor geen toestemming vereist onder de ePrivacy-wetgeving.
        </p>

        <h2>3. Hoe kan je cookies beheren?</h2>
        <p>
          Je kan cookies altijd zelf beheren of verwijderen via de instellingen van je browser. Hieronder vind je links naar de cookie-instellingen van de meest gebruikte browsers:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/nl-be/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/nl-nl/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
        <p>
          Je kan ook de Do Not Track-optie van je browser activeren of een privacyvriendelijke browser zoals Brave gebruiken.
        </p>
        <p>
          Let op: als je strikt noodzakelijke cookies blokkeert, is het mogelijk dat bepaalde delen van de website niet correct werken.
        </p>

        <h2>4. Wijzigingen</h2>
        <p>
          Als we in de toekomst nieuwe scripts of cookies toevoegen (bijvoorbeeld voor analytics met persoonsgegevens of marketing), passen we deze cookieverklaring aan en vragen we waar nodig vooraf je toestemming via een cookiebanner.
        </p>

        <h2>5. Vragen?</h2>
        <p>Voor vragen over deze cookieverklaring kan je terecht bij:</p>
        <p>
          <strong>Orvia BV</strong><br />
          Frank Van Dyckelaan 7B, 9140 Temse<br />
          E-mail: <a href="mailto:hallo@orvia.be">hallo@orvia.be</a>
        </p>
        <p>
          Meer informatie over je rechten en hoe we omgaan met persoonsgegevens vind je in onze{" "}
          <a href="/privacyverklaring">Privacyverklaring</a>.
        </p>
      </LegalContent>

      <Footer />
      <BackToTop />
    </main>
  );
}
