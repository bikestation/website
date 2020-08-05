import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="The Bike Station" />
    <h2 class="services">Szolgáltatások</h2>
    <p class="servicestext">The Bike Station - kerékpár szervíz a 13. kerületben! Megbízható és rugalmas munkavégzés, korrekt áron.</p>
    <p class="servicestext">
      <ul class="list">
        <li>Biciklidet munkaidőn belül bármikor hozhatod, de érdemes rákérdezni, hogy mikor kisebb a terheltség.</li>
        <li>Kérlek a megadott időpontban gyere az elkészült kerékpárért, mert a kis hely miatt nem tudom tárolni napokig.</li>
        <li>Az árlistában a bruttó munkadíjakat látod feltüntetve, a beépítendő alkatrészek ára külön értendő.</li>
        <li>Átnézés után teljeskörű szóbeli tájékoztatást kapsz a javasolt munkáról, annak várható áráról.</li>
        <li>Kártyával és készpénzzel is tudsz fizetni.</li>
      </ul>
    </p>

    <h2 class="pricelist">Árlista</h2>
    <p class="pricelisttext">Érvényes 2020. augusztus 1-től visszavonásig.</p>

    <h3>Általános szervíz</h3>
      <table class="tabletext">
        <tr>
          <td>NAGY SZERVÍZ (mozgó alkatrészek zsírzása, kerekek centírozása, váltók és fékek beállítása, lánc tisztítása olajozása, összes csavar áthúzása átvizsgálása)</td>
          <td class="price">18.000 Ft</td>
        </tr>
        <tr>
          <td>BMX, camping, kis- és kontrás kerékpárok esetén</td>
          <td class="price">11.900 Ft</td>
        </tr>
        <tr>
          <td>KIS SZERVIZ (első és hátsó agy állítása, kerekek centírozása, váltók és fékek beállítása, lánc tisztítása, olajozása, csavarok átvizsgálása)</td>
          <td class="price">11.000 - 13.500 Ft</td>
        </tr>
        <tr>
          <td>ÁTVIZSGÁLÁS (váltók és fékek beállítása, csavarok átvizsgálása, lánc tisztítása, olajozása)</td>
          <td class="price">6500 Ft</td>
        </tr>
        <tr>
          <td>KIS ÁTVIZSGÁLÁS</td>
          <td class="price">4000 Ft</td>
        </tr>
        <tr>
          <td>ÜZEMBE HELYEZÉS „0 km-es beállítás” (csak a nem nálunk vásárolt kerékpárokra vonatkozik</td>
          <td class="price">5500 Ft</td>
        </tr>
        <tr>
          <td>MOSÁS (komplett láncápolással)</td>
          <td class="price">3000 Ft</td>
        </tr>
        <tr>
          <td>KERÉKPÁR ÉPÍTÉS, ÁTÉPÍTÉS ÚJ VÁZRA</td>
          <td class="price">14.000 Ft</td>
        </tr>
      </table>

    <h3>Kerék</h3>
      <table class="tabletext">
        <tr>
          <td>Belső vagy külső csere (kiszerelt kerék)</td>
          <td class="price">1000 Ft</td>
        </tr>
        <tr>
          <td>Belső vagy külső csere (kerékpárban)</td>
          <td class="price">1200 Ft</td>
        </tr>
        <tr>
          <td>Kerékfűzés, centrírozás</td>
          <td class="price">4500 Ft</td>
        </tr>
        <tr>
          <td>Kerék centrírozás</td>
          <td class="price">2500 - 3500 Ft</td>
        </tr>
        <tr>
          <td>Kerékbontás</td>
          <td class="price">800 Ft</td>
        </tr>
        <tr>
          <td>Küllőpótlás+centírozás</td>
          <td class="price">3000 Ft</td>
        </tr>
      </table>

    <h3>Fék</h3>
      <table class="tabletext">
        <tr>
          <td>Fékállítás (kerekenként)</td>
          <td class="price">1500 Ft</td>
        </tr>
        <tr>
          <td>Féktest csere és beállítás (kerekenként)</td>
          <td class="price">2000 Ft</td>
        </tr>
        <tr>
          <td>Fékkar csere (párban)</td>
          <td class="price">2000 Ft</td>
        </tr>
        <tr>
          <td>Komplett fék csere</td>
          <td class="price">3500 Ft</td>
        </tr>
        <tr>
          <td>Bowden csere</td>
          <td class="price">1200 Ft</td>
        </tr>
        <tr>
          <td>Hidraulikus fék légtelenítés+olaj</td>
          <td class="price">3500 Ft</td>
        </tr>
        <tr>
          <td>Hidraulikus fékbetét csere</td>
          <td class="price">1500 Ft</td>
        </tr>
      </table>

    <h3>Váltó</h3>
      <table class="tabletext">
        <tr>
          <td>Váltóállítás (váltónként)</td>
          <td class="price">1500 Ft</td>
        </tr>
        <tr>
          <td>Váltócsere és beállítás (váltónként)</td>
          <td class="price">2500 - 3000 Ft</td>
        </tr>
        <tr>
          <td>Váltópapucs egyengetés és váltó beállítás</td>
          <td class="price">2500 Ft</td>
        </tr>
        <tr>
          <td>Váltó bowden csere</td>
          <td class="price">1500 Ft</td>
        </tr>
      </table>

    <h3>Hajtómű</h3>
      <table class="tabletext">
        <tr>
          <td>Monoblock beépítés vagy csere (üres vázon)</td>
          <td class="price">3000 Ft</td>
        </tr>
        <tr>
          <td>Monoblock csere, komplett, váltóállítással</td>
          <td class="price">4000 Ft</td>
        </tr>
        <tr>
          <td>Hajtómű csere és váltóállítás</td>
          <td class="price">4500 Ft</td>
        </tr>
        <tr>
          <td>Hajtómű egyengetés</td>
          <td class="price">700 Ft-tól</td>
        </tr>
      </table>

    <h3>Lánc, fogaskerék</h3>
      <table class="tabletext">
        <tr>
          <td>Lánc csere, méretre szabással</td>
          <td class="price">2500 Ft</td>
        </tr>
        <tr>
          <td>Láncápolás (tisztítás, olajozás)</td>
          <td class="price">2000 Ft</td>
        </tr>
        <tr>
          <td>Fogas koszorú csere</td>
          <td class="price">1000 Ft</td>
        </tr>
      </table>

    <h3>Kormánycsapágy, villa</h3>
      <table class="tabletext">
        <tr>
          <td>Kormánycsapágy csésze behúzás üres vázba</td>
          <td class="price">4000 Ft</td>
        </tr>
        <tr>
          <td>Kormánycsapágy csere</td>
          <td class="price">4500 Ft</td>
        </tr>
        <tr>
          <td>Villa beépítés, fékállítással</td>
          <td class="price">6000 Ft</td>
        </tr>
      </table>

    <h3>Csapágyak</h3>
      <table class="tabletext">
        <tr>
          <td>Agy első</td>
          <td class="price">2000 Ft</td>
        </tr>
        <tr>
          <td>Agy hátsó</td>
          <td class="price">3000 Ft</td>
        </tr>
        <tr>
          <td>Kazetta</td>
          <td class="price">3000 Ft</td>
        </tr>
        <tr>
          <td>Kontrás agy</td>
          <td class="price">4500 Ft</td>
        </tr>
        <tr>
          <td>Hajtóműcsapágy (középrész)</td>
          <td class="price">4000 Ft</td>
        </tr>
        <tr>
          <td>Kormánycsapágy</td>
          <td class="price">3000 Ft</td>
        </tr>
      </table>

    <h3>Egyéb</h3>
      <table class="tabletext">
        <tr>
          <td>Kormánycsere</td>
          <td class="price">2500 Ft</td>
        </tr>
        <tr>
          <td>Kormányszarv felszerelés</td>
          <td class="price">1000 Ft</td>
        </tr>
        <tr>
          <td>Kormánybetekerés, bandázsolás</td>
          <td class="price">2000 Ft</td>
        </tr>
        <tr>
          <td>Csomagtartó felszerelés</td>
          <td class="price">1000 Ft</td>
        </tr>
        <tr>
          <td>Kosár felszerelés</td>
          <td class="price">1500 Ft</td>
        </tr>
        <tr>
          <td>Gyerekülés felszerelés</td>
          <td class="price">2000 Ft</td>
        </tr>
        <tr>
          <td>Km Óra felszerelés, beállítás</td>
          <td class="price">1000 Ft</td>
        </tr>
        <tr>
          <td>Sárvédő felszerelés (pálcás)</td>
          <td class="price">2000 Ft</td>
        </tr>
        <tr>
          <td>Sárvédő felszerelés (levehető)</td>
          <td class="price">800 - 1200 Ft</td>
        </tr>
        <tr>
          <td>Kitámasztó kerék felszerelés</td>
          <td class="price">1000 Ft</td>
        </tr>
        <tr>
          <td>REZSI ÓRADÍJ (egyéb munkák esetén)</td>
          <td class="price">5000 Ft</td>
        </tr>
      </table>
  </Layout>
)

export default IndexPage
