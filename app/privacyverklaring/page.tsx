import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";

export const metadata: Metadata = {
  title: "Privacyverklaring — Orvia",
  robots: { index: false },
};

export default function PrivacyBeleidPage() {
  return (
    <main>
      <div className="relative">
        <Nav theme="light" />
        <LegalHero
          title="Privacyverklaring"
          intro="Deze privacyverklaring legt uit hoe Orvia BV persoonsgegevens verwerkt die via deze website worden verzameld. We houden ons aan de Algemene Verordening Gegevensbescherming (AVG/GDPR) en de Belgische wet van 30 juli 2018 betreffende de bescherming van natuurlijke personen met betrekking tot de verwerking van persoonsgegevens."
          lastUpdated="30 april 2026"
        />
      </div>

      <LegalContent>
        <h2>1. Verwerkingsverantwoordelijke</h2>
        <p>
          <strong>Orvia BV</strong><br />
          Frank Van Dyckelaan 7B<br />
          9140 Temse<br />
          België
        </p>
        <p>
          Ondernemingsnummer: BE 1023.756.410<br />
          E-mail: <a href="mailto:hallo@orvia.be">hallo@orvia.be</a>
        </p>
        <p>
          Voor vragen over deze privacyverklaring of over de verwerking van je gegevens kan je ons bereiken op bovenstaand e-mailadres.
        </p>

        <h2>2. Welke gegevens verzamelen we?</h2>

        <h3>Via het contactformulier</h3>
        <p>Wanneer je het contactformulier op deze website invult, verzamelen we de gegevens die je zelf invult:</p>
        <ul>
          <li>Naam</li>
          <li>E-mailadres</li>
          <li>Telefoonnummer</li>
          <li>Inhoud van je bericht</li>
        </ul>

        <h3>Via bezoekstatistieken</h3>
        <p>
          Voor het meten van websitebezoek gebruiken we Vercel Web Analytics. Dit is een privacyvriendelijke analysetool die geen cookies gebruikt en geen persoonsgegevens van bezoekers opslaat. Er wordt gewerkt met geanonimiseerde, geaggregeerde data (zoals paginaweergaven, herkomstland, browsertype). Individuele bezoekers worden niet getrackt over verschillende sessies of websites.
        </p>

        <h3>Technische gegevens</h3>
        <p>
          Bij elk websitebezoek wordt door onze hostingprovider (Vercel) tijdelijk een serverlog bijgehouden met onder meer je IP-adres en de opgevraagde pagina. Dit gebeurt voor de werking en beveiliging van de website. Deze logs worden kort bewaard en niet gekoppeld aan andere gegevens.
        </p>

        <h2>3. Waarvoor gebruiken we deze gegevens?</h2>
        <table>
          <thead>
            <tr>
              <th>Doeleinde</th>
              <th>Rechtsgrond</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Beantwoorden van je bericht via het contactformulier</td>
              <td>Toestemming en/of gerechtvaardigd belang</td>
            </tr>
            <tr>
              <td>Inzicht in websitegebruik (geaggregeerde statistieken)</td>
              <td>Gerechtvaardigd belang</td>
            </tr>
            <tr>
              <td>Beveiliging en goede werking van de website</td>
              <td>Gerechtvaardigd belang</td>
            </tr>
            <tr>
              <td>Voldoen aan wettelijke verplichtingen</td>
              <td>Wettelijke verplichting</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Hoe lang bewaren we je gegevens?</h2>
        <p>We bewaren je gegevens niet langer dan nodig is voor het doel waarvoor ze verzameld zijn.</p>
        <ul>
          <li><strong>Berichten via het contactformulier</strong>: maximaal 24 maanden na het laatste contact, tenzij er een commerciële of contractuele relatie ontstaat. In dat geval gelden de bewaartermijnen die op die relatie van toepassing zijn.</li>
          <li><strong>Boekhoudkundige en fiscale gegevens</strong> (bv. facturen): 7 jaar, conform de Belgische fiscale wetgeving.</li>
          <li><strong>Technische logs</strong>: kort bewaard, doorgaans niet langer dan enkele weken, voor beveiliging en troubleshooting.</li>
        </ul>
        <p>In de praktijk verwijderen we contactformulier-berichten doorgaans veel vroeger, zodra de afhandeling van je vraag dat toelaat.</p>

        <h2>5. Met wie delen we je gegevens?</h2>
        <p>
          We verkopen of verhuren je gegevens niet. We delen ze enkel met dienstverleners die ons helpen deze website en onze communicatie te laten werken. Met elk van hen hebben we de nodige verwerkersovereenkomsten afgesloten.
        </p>
        <table>
          <thead>
            <tr>
              <th>Dienstverlener</th>
              <th>Rol</th>
              <th>Locatie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vercel Inc.</td>
              <td>Hosting van de website en bezoekstatistieken</td>
              <td>VS, met EU-datacenters</td>
            </tr>
            <tr>
              <td>Resend</td>
              <td>Versturen van e-mails vanuit het contactformulier</td>
              <td>VS (verzending vanuit EU-regio)</td>
            </tr>
          </tbody>
        </table>

        <h3>Doorgifte buiten de EER</h3>
        <p>
          Vercel en Resend zijn Amerikaanse bedrijven. Voor zover gegevens worden doorgegeven naar de Verenigde Staten gebeurt dit op basis van het EU-VS Data Privacy Framework en/of standaardcontractbepalingen goedgekeurd door de Europese Commissie, conform artikel 46 AVG.
        </p>

        <h2>6. Hoe beveiligen we je gegevens?</h2>
        <p>
          We nemen redelijke technische en organisatorische maatregelen om je gegevens te beschermen, waaronder versleutelde verbindingen (HTTPS), toegangsbeperking tot de mailbox en het werken met betrouwbare verwerkers die zelf voldoen aan de AVG.
        </p>

        <h2>7. Je rechten</h2>
        <p>Onder de AVG heb je het recht om:</p>
        <ul>
          <li>Inzage te vragen in de gegevens die we van je verwerken</li>
          <li>Onjuiste gegevens te laten verbeteren</li>
          <li>Je gegevens te laten verwijderen</li>
          <li>De verwerking te laten beperken</li>
          <li>Bezwaar te maken tegen de verwerking</li>
          <li>Je gegevens te laten overdragen aan een andere partij</li>
          <li>Je toestemming in te trekken (waar de verwerking op toestemming gebaseerd is)</li>
        </ul>
        <p>
          Stuur hiervoor een mail naar <a href="mailto:hallo@orvia.be">hallo@orvia.be</a>. We reageren binnen 30 dagen.
        </p>
        <p>Ben je niet tevreden met onze reactie? Dan heb je het recht om klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit:</p>
        <p>
          <strong>Gegevensbeschermingsautoriteit (GBA)</strong><br />
          Drukpersstraat 35, 1000 Brussel<br />
          Tel: +32 (0)2 274 48 00<br />
          E-mail: <a href="mailto:contact@apd-gba.be">contact@apd-gba.be</a><br />
          Website: <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">www.gegevensbeschermingsautoriteit.be</a>
        </p>

        <h2>8. Wijzigingen</h2>
        <p>
          We kunnen deze privacyverklaring aanpassen. De meest recente versie vind je altijd op deze pagina, met de datum van laatste wijziging bovenaan.
        </p>
      </LegalContent>

      <Footer />
      <BackToTop />
    </main>
  );
}
