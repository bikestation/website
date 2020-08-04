import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="The Bike Station" />
    <h1>Szolgáltatások</h1>
    <p>The Bike Station - kerékpár szervíz a 13. kerületben! Megbízható és rugalmas munkavégzés, korrekt áron.
      <ul>
        <li>Biciklidet munkaidőn belül bármikor hozhatod, de érdemes rákérdezni, hogy mikor kisebb a terheltség.</li>
        <li>Kérlek a megadott időpontban gyere az elkészült kerékpárért, mert a kis hely miatt nem tudom tárolni napokig.</li>
        <li>Az árlistában a bruttó munkadíjakat látod feltüntetve, a beépítendő alkatrészek ára külön értendő.</li>
        <li>Átnézés után teljeskörű szóbeli tájékoztatást kapsz a javasolt munkáról, annak várható áráról.</li>
        <li>Kártyával és készpénzzel is tudsz fizetni.</li>
      </ul>
    </p>

    <h1>Árlista</h1>
    <p>Érvényes 2020. augusztus 1-től visszavonásig.</p>

    <h2>Általános szervíz</h2>
      <table>
        <tr>
          <td>NAGY SZERVÍZ (mozgó alkatrészek zsírzása, kerekek centírozása, váltók és fékek beállítása, lánc tisztítása olajozása, összes csavar áthúzása átvizsgálása)</td>
          <td>18.000 Ft</td>
        </tr>
        <tr>
          <td>BMX, camping, kis- és kontrás kerékpárok esetén</td>
          <td>11.900 Ft</td>
        </tr>
        <tr>
          <td>KIS SZERVIZ (első és hátsó agy állítása, kerekek centírozása, váltók és fékek beállítása, lánc tisztítása, olajozása, csavarok átvizsgálása)</td>
          <td>11.000 - 13.500 Ft</td>
        </tr>
        <tr>
          <td>ÁTVIZSGÁLÁS (váltók és fékek beállítása, csavarok átvizsgálása, lánc tisztítása, olajozása)</td>
          <td>6500 Ft</td>
        </tr>
        <tr>
          <td>KIS ÁTVIZSGÁLÁS</td>
          <td>4000 Ft</td>
        </tr>
        <tr>
          <td>ÜZEMBE HELYEZÉS „0 km-es beállítás” (csak a nem nálunk vásárolt kerékpárokra vonatkozik</td>
          <td>5500 Ft</td>
        </tr>
        <tr>
          <td>MOSÁS (komplett láncápolással)</td>
          <td>3000 Ft</td>
        </tr>
        <tr>
          <td>KERÉKPÁR ÉPÍTÉS, ÁTÉPÍTÉS ÚJ VÁZRA</td>
          <td>14.000 Ft</td>
        </tr>
      </table>

    <h2>Kerék</h2>
      <table>
        <tr>
          <td>Belső vagy külső csere (kiszerelt kerék)</td>
          <td>1000 Ft</td>
        </tr>
        <tr>
          <td>Belső vagy külső csere (kerékpárban)</td>
          <td>1200 Ft</td>
        </tr>
        <tr>
          <td>Kerékfűzés, centrírozás</td>
          <td>4500 Ft</td>
        </tr>
        <tr>
          <td>Kerék centrírozás</td>
          <td>2500 - 3500 Ft</td>
        </tr>
        <tr>
          <td>Kerékbontás</td>
          <td>800 Ft</td>
        </tr>
        <tr>
          <td>Küllőpótlás+centírozás</td>
          <td>3000 Ft</td>
        </tr>
      </table>

    <h2>Fék</h2>
      <table>
        <tr>
          <td>Fékállítás (kerekenként)</td>
          <td>1500 Ft</td>
        </tr>
        <tr>
          <td>Féktest csere és beállítás (kerekenként)</td>
          <td>2000 Ft</td>
        </tr>
        <tr>
          <td>Fékkar csere (párban)</td>
          <td>2000 Ft</td>
        </tr>
        <tr>
          <td>Komplett fék csere</td>
          <td>3500 Ft</td>
        </tr>
        <tr>
          <td>Bowden csere</td>
          <td>1200 Ft</td>
        </tr>
        <tr>
          <td>Hidraulikus fék légtelenítés+olaj</td>
          <td>3500 Ft</td>
        </tr>
        <tr>
          <td>Hidraulikus fékbetét csere</td>
          <td>1500 Ft</td>
        </tr>
      </table>

    <h2>Váltó</h2>
      <table>
        <tr>
          <td>Váltóállítás (váltonként)</td>
          <td>1500 Ft</td>
        </tr>
        <tr>
          <td>Váltócsere és beállítás (váltonként)</td>
          <td>2500 - 3000 Ft</td>
        </tr>
        <tr>
          <td>Váltópapucs egyengetés és váltó beállítás</td>
          <td>2500 Ft</td>
        </tr>
        <tr>
          <td>Váltó bowden csere</td>
          <td>1500 Ft</td>
        </tr>
      </table>

    <h2>Hajtómű</h2>
      <table>
        <tr>
          <td>Monoblock beépítés vagy csere (üres vázon)</td>
          <td>3000 Ft</td>
        </tr>
        <tr>
          <td>Monoblock csere, komplett, váltóállítással</td>
          <td>4000 Ft</td>
        </tr>
        <tr>
          <td>Hajtómű csere és váltóállítás</td>
          <td>4500 Ft</td>
        </tr>
        <tr>
          <td>Hajtómű egyengetés</td>
          <td>700 Ft-tól</td>
        </tr>
      </table>

    <h2>Lánc, fogaskerék</h2>
      <table>
        <tr>
          <td>Lánc csere, méretre szabással</td>
          <td>2500 Ft</td>
        </tr>
        <tr>
          <td>Láncápolás (tisztítás, olajozás)</td>
          <td>2000 Ft</td>
        </tr>
        <tr>
          <td>Fogas koszorú csere</td>
          <td>1000 Ft</td>
        </tr>
      </table>

    <h2>Kormánycsapágy, villa</h2>
      <table>
        <tr>
          <td>Kormánycsapágy csésze behúzás üres vázba</td>
          <td>4000 Ft</td>
        </tr>
        <tr>
          <td>Kormánycsapágy csere</td>
          <td>4500 Ft</td>
        </tr>
        <tr>
          <td>Villa beépítés, fékállítással</td>
          <td>6000 Ft</td>
        </tr>
      </table>

    <h2>Csapágyak</h2>
      <table>
        <tr>
          <td>Agy első</td>
          <td>2000 Ft</td>
        </tr>
        <tr>
          <td>Agy hátsó</td>
          <td>3000 Ft</td>
        </tr>
        <tr>
          <td>Kazetta</td>
          <td>3000 Ft</td>
        </tr>
        <tr>
          <td>Kontrás agy</td>
          <td>4500 Ft</td>
        </tr>
        <tr>
          <td>Hajtóműcsapágy (középrész)</td>
          <td>4000 Ft</td>
        </tr>
        <tr>
          <td>Kormánycsapágy</td>
          <td>3000 Ft</td>
        </tr>
      </table>

    <h2>Egyéb</h2>
      <table>
        <tr>
          <td>Kormánycsere</td>
          <td>2500 Ft</td>
        </tr>
        <tr>
          <td>Kormányszarv felszerelés</td>
          <td>1000 Ft</td>
        </tr>
        <tr>
          <td>Kormánybetekerés, bandázsolás</td>
          <td>2000 Ft</td>
        </tr>
        <tr>
          <td>Csomagtartó felszerelés</td>
          <td>1000 Ft</td>
        </tr>
        <tr>
          <td>Kosár felszerelés</td>
          <td>1500 Ft</td>
        </tr>
        <tr>
          <td>Gyerekülés felszerelés</td>
          <td>2000 Ft</td>
        </tr>
        <tr>
          <td>Km Óra felszerelés, beállítás</td>
          <td>1000 Ft</td>
        </tr>
        <tr>
          <td>Sárvédő felszerelés (pálcás)</td>
          <td>2000 Ft</td>
        </tr>
        <tr>
          <td>Sárvédő felszerelés (levehető)</td>
          <td>800 - 1200 Ft</td>
        </tr>
        <tr>
          <td>Kitámasztó kerék felszerelés</td>
          <td>1000 Ft</td>
        </tr>
        <tr>
          <td>REZSI ÓRADÍJ (egyéb munkák esetén)</td>
          <td>5000 Ft</td>
        </tr>
      </table>
  </Layout>
)

export default IndexPage
