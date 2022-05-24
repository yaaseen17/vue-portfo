<template>
  <button @click="toggleSnow" class="snow">Make it snow</button>
  <div id="stars-container">
    <div id="stars" v-if="!isHidden"></div>
    <div id="stars2" v-if="!isHidden"></div>
    <div id="stars3" v-if="!isHidden"></div>

    <Header id="home" />
  </div>

  <nav id="nav" role="navigation">
    <div id="menuToggle">
      <input type="checkbox" />

      <span></span>
      <span></span>
      <span></span>

      <ul id="menu">
        <a href="#home" class="home"><li>Home</li></a>
        <a href="#about"><li>About</li></a>
        <a href="#projects"><li>Projects</li></a>
        <a href="#resume"><li>Resume</li></a>
        <a href="#testamonials"><li>Testimonials</li></a>
        <a href="#contact"><li>Contact</li></a>
      </ul>
    </div>
  </nav>
  <a href="#home" class="bck"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      class="bi bi-chevron-bar-up"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M3.646 11.854a.5.5 0 0 0 .708 0L8 8.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708zM2.4 5.2c0 .22.18.4.4.4h10.4a.4.4 0 0 0 0-.8H2.8a.4.4 0 0 0-.4.4z"
      /></svg
  ></a>

  <div id="stars-container">
    <div id="stars" v-if="!isHidden"></div>
    <div id="stars2" v-if="!isHidden"></div>
    <div id="stars3" v-if="!isHidden"></div>
    <section id="about" class="box">
      <About />
    </section>
  </div>
  <div id="stars-container">
    <div id="stars" v-if="!isHidden"></div>
    <div id="stars2" v-if="!isHidden"></div>
    <div id="stars3" v-if="!isHidden"></div>
    <section id="projects" class="box"><Projects /></section>
  </div>
  <div id="stars-container">
    <div id="stars" v-if="!isHidden"></div>
    <div id="stars2" v-if="!isHidden"></div>
    <div id="stars3" v-if="!isHidden"></div>
    <section id="resume" class="box"><Resume /></section>
  </div>
  <div id="stars-container">
    <div id="stars" v-if="!isHidden"></div>
    <div id="stars2" v-if="!isHidden"></div>
    <div id="stars3" v-if="!isHidden"></div>
    <section id="testamonials" class="box"><Testimonials /></section>
  </div>
  <div id="stars-container">
    <div id="stars" v-if="!isHidden"></div>
    <div id="stars2" v-if="!isHidden"></div>
    <div id="stars3" v-if="!isHidden"></div>
    <section id="contact" class="box"><Contact /></section>
  </div>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Projects from "./components/Projects.vue";
import Testimonials from "./components/Testimonials.vue";
import Resume from "./components/Resume.vue";
import Footer from "./components/Footer.vue";
export default {
  data() {
    return {
      active: "home",
      isHidden: true,
    };
  },
  components: {
    Header,
    About,
    Contact,
    Projects,
    Testimonials,
    Resume,
    Footer,
  },
  methods: {
    makeActive: function (item) {
      // When a model is changed, the view will be automatically updated.
      this.active = item;
    },
    toggleSnow() {
      this.isHidden = !this.isHidden;
      console.log(this.isHidden);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #333333;
}

#home {
  padding-top: 100px;
  padding-bottom: 100px;
}
#about {
  padding-top: 100px;
  padding-bottom: 50px;
}
#contact {
  padding-top: 50px;
  padding-bottom: 50px;
}
#projects {
  padding-top: 50px;
  padding-bottom: 50px;
}
#resume {
  padding-top: 50px;
  padding-bottom: 50px;
  position: sticky;
}
#testamonial {
  padding-top: 50px;
  padding-bottom: 50px;
  position: sticky;
}
a:hover {
  color: black;
}
#menuToggle {
  display: block;
  position: fixed;
  top: 50px;
  left: 50px;

  z-index: 1;

  -webkit-user-select: none;
  user-select: none;
}
.bck {
  z-index: 1000;
  text-decoration: none;
  position: sticky;
  top: 0;
  left: 50%;
  margin-right: 50px;
  color: white;
}
#menuToggle a {
  text-decoration: none;
  color: #232323;

  transition: color 0.3s ease;
}
a,
#menu a:hover {
  text-decoration: none;
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 1;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu {
  position: absolute;
  width: 300px;
  height: 100vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  opacity: 0.5;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}
@media screen and (max-width: 500px) {
  section {
    margin-right: 0%;
    margin-left: 0%;
  }
}

.snow {
  position: fixed;
  z-index: 1000;
  color: rgb(247, 243, 243);
  border: none;
  border-radius: 5px;
  padding: 10px;
  top: 5%;
  right: 20px;
  background-color: transparent;
  border: 2px solid rgb(255, 255, 255);
}
.snow:hover {
  color: black;
  border: 2px solid rgb(0, 0, 0);
}
#stars-container {
  z-index: 1000;
  width: 100%;
  height: fit-content;
  background: transparent;
  overflow-y: hidden;
  -webkit-transform: translate(-50, -50%);
  -ms-transform: translate(-50, -50%);
  -o-transform: translate(-50, -50%);
  transform: translate(-50, -50%);
}

#stars {
  z-index: 1000;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 0 1116px 1997px #fff, 393px 330px #fff, 1454px 582px #fff,
    66px 1869px #fff, 762px 584px #fff, 389px 530px #fff, 1938px 763px #fff,
    1559px 825px #fff, 132px 1821px #fff, 1110px 460px #fff, 1980px 1879px #fff,
    1625px 1682px #fff, 660px 671px #fff, 1112px 775px #fff, 1091px 535px #fff,
    1516px 663px #fff, 886px 144px #fff, 1190px 583px #fff, 348px 728px #fff,
    1835px 205px #fff, 748px 1139px #fff, 1613px 613px #fff, 470px 1705px #fff,
    948px 503px #fff, 1318px 1072px #fff, 202px 982px #fff, 239px 986px #fff,
    1827px 768px #fff, 519px 336px #fff, 218px 363px #fff, 230px 279px #fff,
    1248px 1198px #fff, 1606px 515px #fff, 930px 163px #fff, 88px 598px #fff,
    1421px 795px #fff, 1525px 1964px #fff, 491px 1206px #fff, 1372px 833px #fff,
    445px 82px #fff, 316px 139px #fff, 201px 1084px #fff, 360px 743px #fff,
    439px 891px #fff, 841px 1048px #fff, 456px 1644px #fff, 45px 1508px #fff,
    59px 1765px #fff, 956px 1665px #fff, 1284px 1233px #fff, 1250px 1010px #fff,
    1217px 897px #fff, 627px 591px #fff, 949px 62px #fff, 100px 351px #fff,
    1787px 78px #fff, 30px 1004px #fff, 1408px 1823px #fff, 186px 1704px #fff,
    1230px 100px #fff, 284px 1529px #fff, 1900px 588px #fff, 1454px 637px #fff,
    1870px 1664px #fff, 1045px 862px #fff, 201px 639px #fff, 494px 44px #fff,
    1288px 462px #fff, 502px 1534px #fff, 1232px 1994px #fff, 1473px 196px #fff,
    1065px 1612px #fff, 752px 729px #fff, 955px 952px #fff, 1637px 951px #fff,
    1139px 1233px #fff, 354px 86px #fff, 1126px 801px #fff, 1428px 388px #fff,
    1042px 1511px #fff, 1962px 769px #fff, 1071px 593px #fff, 1467px 1179px #fff,
    772px 1888px #fff, 612px 1071px #fff, 518px 982px #fff, 1700px 1874px #fff,
    600px 625px #fff, 1726px 183px #fff, 1290px 855px #fff, 1148px 1371px #fff,
    1715px 212px #fff, 172px 1745px #fff, 1150px 302px #fff, 40px 263px #fff,
    1795px 273px #fff, 1775px 1847px #fff, 1781px 862px #fff, 621px 279px #fff,
    580px 1822px #fff, 813px 1913px #fff, 1703px 1403px #fff, 1691px 1131px #fff,
    831px 1835px #fff, 1307px 1497px #fff, 1745px 444px #fff, 1453px 439px #fff,
    58px 1824px #fff, 1960px 416px #fff, 485px 564px #fff, 618px 1866px #fff,
    1481px 1228px #fff, 622px 1688px #fff, 1776px 1535px #fff, 1725px 140px #fff,
    1144px 1088px #fff, 1798px 1737px #fff, 1482px 213px #fff, 519px 264px #fff,
    945px 444px #fff, 570px 870px #fff, 164px 54px #fff, 1408px 1649px #fff,
    943px 738px #fff, 738px 578px #fff, 1977px 1392px #fff, 1820px 697px #fff,
    1884px 616px #fff, 83px 967px #fff, 707px 821px #fff, 656px 1147px #fff,
    311px 1539px #fff, 427px 136px #fff, 1057px 1355px #fff, 1710px 704px #fff,
    1722px 583px #fff, 1182px 413px #fff, 630px 635px #fff, 369px 1603px #fff,
    220px 892px #fff, 152px 394px #fff, 1374px 1407px #fff, 1075px 1737px #fff,
    675px 1615px #fff, 557px 1265px #fff, 819px 349px #fff, 130px 759px #fff,
    1628px 1795px #fff, 652px 730px #fff, 1196px 475px #fff, 1818px 1109px #fff,
    1779px 766px #fff, 643px 1634px #fff, 922px 1345px #fff, 1690px 301px #fff,
    719px 1067px #fff, 1252px 1241px #fff, 1673px 316px #fff, 781px 883px #fff,
    1074px 1130px #fff, 1450px 959px #fff, 842px 1585px #fff, 1409px 1180px #fff,
    1424px 1947px #fff, 204px 519px #fff, 1951px 869px #fff, 21px 1947px #fff,
    1300px 1164px #fff, 1300px 1795px #fff, 1692px 1882px #fff, 450px 999px #fff,
    243px 1149px #fff, 147px 1407px #fff, 1383px 1425px #fff, 513px 792px #fff,
    312px 1058px #fff, 1758px 1913px #fff, 1782px 1238px #fff, 1749px 481px #fff,
    64px 581px #fff, 1987px 361px #fff, 1898px 593px #fff, 1858px 1208px #fff,
    1013px 154px #fff, 277px 312px #fff, 1175px 862px #fff, 682px 591px #fff,
    1297px 334px #fff, 790px 228px #fff, 333px 1925px #fff, 1113px 1626px #fff,
    1797px 1380px #fff, 30px 1432px #fff, 1909px 478px #fff, 975px 1472px #fff,
    603px 1746px #fff, 1456px 693px #fff, 1783px 1518px #fff, 75px 428px #fff,
    956px 922px #fff, 1793px 729px #fff, 1378px 1994px #fff, 1793px 1332px #fff,
    1363px 1925px #fff, 724px 1919px #fff, 427px 1334px #fff, 283px 985px #fff,
    93px 952px #fff, 1961px 1297px #fff, 501px 1727px #fff, 1772px 1570px #fff,
    376px 1157px #fff, 1597px 362px #fff, 452px 1321px #fff, 264px 1727px #fff,
    702px 1996px #fff, 765px 1479px #fff, 1162px 347px #fff, 1229px 1461px #fff,
    121px 520px #fff, 1341px 1925px #fff, 1597px 996px #fff, 103px 104px #fff,
    1177px 1433px #fff, 1317px 67px #fff, 1335px 1570px #fff, 706px 421px #fff,
    348px 1852px #fff, 220px 415px #fff, 636px 1878px #fff, 156px 1897px #fff,
    1534px 759px #fff, 1775px 488px #fff, 1063px 1402px #fff, 267px 1292px #fff,
    390px 1686px #fff, 837px 1853px #fff, 1497px 1907px #fff, 275px 1643px #fff,
    389px 994px #fff, 383px 614px #fff, 185px 1088px #fff, 1184px 1148px #fff,
    598px 1266px #fff, 287px 1433px #fff, 1306px 1760px #fff, 1516px 916px #fff,
    854px 78px #fff, 727px 163px #fff, 613px 1282px #fff, 1195px 1304px #fff,
    135px 1028px #fff, 1334px 948px #fff, 672px 687px #fff, 264px 140px #fff,
    227px 326px #fff, 1142px 1475px #fff, 253px 1391px #fff, 609px 1432px #fff,
    1021px 235px #fff, 531px 1357px #fff, 1730px 260px #fff, 1521px 1132px #fff,
    1178px 1379px #fff, 839px 165px #fff, 853px 223px #fff, 1555px 1361px #fff,
    1214px 899px #fff, 1161px 547px #fff, 1842px 1439px #fff, 474px 1489px #fff,
    1491px 1015px #fff, 990px 713px #fff, 1357px 966px #fff, 459px 1708px #fff,
    929px 1444px #fff, 1985px 392px #fff, 1419px 1058px #fff, 1437px 1211px #fff,
    1473px 1533px #fff, 1171px 1060px #fff, 468px 1454px #fff, 310px 58px #fff,
    1726px 1563px #fff, 1958px 1516px #fff, 353px 421px #fff, 256px 698px #fff,
    1578px 460px #fff, 355px 1949px #fff, 33px 216px #fff, 974px 994px #fff,
    943px 92px #fff, 1519px 1318px #fff, 884px 1197px #fff, 1315px 252px #fff,
    1599px 297px #fff, 1975px 783px #fff, 594px 1019px #fff, 1871px 1429px #fff,
    890px 103px #fff, 959px 1001px #fff, 974px 916px #fff, 1081px 192px #fff,
    1269px 385px #fff, 1532px 1079px #fff, 1576px 674px #fff, 1850px 1505px #fff,
    1396px 1133px #fff, 345px 1465px #fff, 1973px 1535px #fff, 330px 360px #fff,
    1204px 271px #fff, 1660px 1134px #fff, 1917px 1658px #fff, 119px 1983px #fff,
    705px 1439px #fff, 1672px 706px #fff, 1330px 1565px #fff, 611px 684px #fff,
    492px 916px #fff, 119px 307px #fff, 106px 663px #fff, 299px 1866px #fff,
    1787px 1433px #fff, 182px 766px #fff, 1468px 106px #fff, 1791px 478px #fff,
    1516px 1622px #fff, 152px 1428px #fff, 903px 546px #fff, 286px 223px #fff,
    133px 1905px #fff, 1944px 1895px #fff, 905px 283px #fff, 1808px 733px #fff,
    1996px 334px #fff, 741px 1867px #fff, 860px 579px #fff, 377px 1078px #fff,
    1467px 1328px #fff, 492px 1915px #fff, 85px 1771px #fff, 1495px 1133px #fff,
    1264px 336px #fff, 1997px 319px #fff, 816px 1304px #fff, 832px 199px #fff,
    873px 1531px #fff, 1030px 1589px #fff, 1767px 196px #fff, 1607px 768px #fff,
    1514px 716px #fff, 92px 631px #fff, 1972px 454px #fff, 1645px 1512px #fff,
    493px 111px #fff, 73px 1827px #fff, 1569px 790px #fff, 55px 557px #fff,
    1969px 1558px #fff, 1309px 1091px #fff, 1797px 189px #fff,
    1560px 1672px #fff, 709px 277px #fff, 850px 28px #fff, 1091px 1330px #fff,
    1408px 847px #fff, 955px 1926px #fff, 452px 1582px #fff, 1941px 900px #fff,
    1479px 655px #fff, 589px 507px #fff, 1575px 499px #fff, 470px 349px #fff,
    1352px 1313px #fff, 1544px 1980px #fff, 1453px 1681px #fff, 566px 24px #fff,
    386px 1941px #fff, 131px 1064px #fff, 161px 599px #fff, 1550px 392px #fff,
    1703px 1777px #fff, 1327px 1263px #fff, 684px 540px #fff, 1849px 141px #fff,
    39px 1036px #fff, 1806px 1021px #fff, 753px 940px #fff, 76px 957px #fff,
    1954px 987px #fff, 1204px 1898px #fff, 1344px 1145px #fff, 111px 191px #fff,
    719px 687px #fff, 1255px 1842px #fff, 480px 647px #fff, 518px 1503px #fff,
    223px 302px #fff, 158px 801px #fff, 488px 339px #fff, 1600px 57px #fff,
    1670px 1692px #fff, 1590px 611px #fff, 1165px 956px #fff, 812px 1395px #fff,
    425px 1661px #fff, 884px 951px #fff, 1466px 1286px #fff, 923px 713px #fff,
    1127px 532px #fff, 623px 1862px #fff, 826px 1488px #fff, 1747px 1816px #fff,
    1273px 143px #fff, 1559px 269px #fff, 1749px 474px #fff, 430px 1187px #fff,
    1600px 425px #fff, 1870px 362px #fff, 1286px 1979px #fff, 492px 381px #fff,
    1886px 1058px #fff, 1960px 740px #fff, 1763px 886px #fff, 1927px 508px #fff,
    980px 1507px #fff, 943px 1499px #fff, 1383px 934px #fff, 697px 396px #fff,
    1033px 1139px #fff, 1687px 823px #fff, 228px 420px #fff, 1775px 1251px #fff,
    1266px 173px #fff, 1003px 629px #fff, 1983px 709px #fff, 1035px 85px #fff,
    1732px 1124px #fff, 1668px 1032px #fff, 1138px 1945px #fff,
    179px 1559px #fff, 1080px 399px #fff, 16px 138px #fff, 1401px 1596px #fff,
    1536px 1216px #fff, 1252px 342px #fff, 928px 1014px #fff, 1143px 241px #fff,
    133px 879px #fff, 1821px 542px #fff, 1860px 1151px #fff, 1490px 96px #fff,
    1719px 1743px #fff, 396px 912px #fff, 732px 251px #fff, 1220px 1958px #fff,
    1111px 1679px #fff, 1631px 1008px #fff, 644px 196px #fff, 1101px 1235px #fff,
    1097px 1037px #fff, 187px 791px #fff, 266px 75px #fff, 897px 270px #fff,
    537px 197px #fff, 1201px 1526px #fff, 1750px 361px #fff, 1419px 25px #fff,
    1637px 1253px #fff, 1481px 1715px #fff, 350px 397px #fff, 939px 862px #fff,
    1116px 685px #fff, 1318px 1231px #fff, 408px 1691px #fff, 1877px 397px #fff,
    954px 1622px #fff, 468px 89px #fff, 180px 1230px #fff, 1477px 1823px #fff,
    1541px 1890px #fff, 497px 1204px #fff, 1126px 736px #fff, 1048px 641px #fff,
    451px 227px #fff, 1930px 1407px #fff, 408px 1183px #fff, 1873px 31px #fff,
    1854px 1666px #fff, 654px 1315px #fff, 1075px 692px #fff, 1861px 48px #fff,
    1821px 99px #fff, 1047px 982px #fff, 830px 1495px #fff, 1827px 1394px #fff,
    851px 1548px #fff, 32px 291px #fff, 814px 1791px #fff, 293px 976px #fff,
    592px 1657px #fff, 1692px 1467px #fff, 366px 1906px #fff, 163px 621px #fff,
    1890px 1452px #fff, 149px 1404px #fff, 1523px 302px #fff, 233px 1975px #fff,
    1459px 423px #fff, 1842px 1529px #fff, 1031px 725px #fff, 1153px 369px #fff,
    333px 1548px #fff, 1965px 88px #fff, 1245px 19px #fff, 66px 1794px #fff,
    963px 1292px #fff, 752px 1706px #fff, 1133px 1440px #fff, 133px 669px #fff,
    478px 1060px #fff, 18px 1889px #fff, 653px 936px #fff, 1827px 1122px #fff,
    713px 1409px #fff, 1988px 650px #fff, 244px 110px #fff, 1242px 809px #fff,
    895px 1114px #fff, 963px 1407px #fff, 1556px 1327px #fff, 1233px 1133px #fff,
    1118px 693px #fff, 495px 100px #fff, 1887px 1478px #fff, 320px 1528px #fff,
    754px 1090px #fff, 670px 1731px #fff, 1px 508px #fff, 1979px 311px #fff,
    658px 1609px #fff, 475px 260px #fff, 1088px 788px #fff, 1918px 1024px #fff,
    665px 587px #fff, 759px 99px #fff, 355px 1784px #fff, 366px 191px #fff,
    592px 304px #fff, 492px 924px #fff, 1046px 419px #fff, 1611px 881px #fff,
    1105px 935px #fff, 1300px 15px #fff, 114px 1721px #fff, 513px 674px #fff,
    458px 1477px #fff, 1933px 1200px #fff, 1710px 936px #fff, 700px 1857px #fff,
    805px 1047px #fff, 362px 45px #fff, 810px 678px #fff, 430px 787px #fff,
    1798px 1729px #fff, 972px 1357px #fff, 1330px 779px #fff, 1286px 1056px #fff,
    793px 1644px #fff, 817px 464px #fff, 1856px 1221px #fff, 1437px 104px #fff,
    1984px 1049px #fff, 243px 818px #fff, 495px 1693px #fff, 264px 1085px #fff,
    24px 1946px #fff, 1201px 810px #fff, 1489px 73px #fff, 1853px 1365px #fff,
    1995px 1179px #fff, 1789px 1673px #fff, 337px 750px #fff, 1740px 1961px #fff,
    1226px 579px #fff, 24px 126px #fff, 1502px 1297px #fff, 772px 894px #fff,
    1720px 188px #fff, 1022px 54px #fff, 1143px 592px #fff, 313px 337px #fff,
    492px 1342px #fff, 106px 153px #fff, 1640px 407px #fff, 1487px 227px #fff,
    1140px 1989px #fff, 1227px 1690px #fff, 1622px 614px #fff, 1188px 252px #fff,
    855px 1436px #fff, 1519px 1668px #fff, 399px 181px #fff, 1212px 1786px #fff,
    1564px 1371px #fff, 1431px 271px #fff, 649px 1643px #fff, 1029px 1168px #fff,
    1564px 786px #fff, 1851px 898px #fff, 1382px 974px #fff, 183px 990px #fff,
    868px 367px #fff, 204px 1817px #fff, 474px 1913px #fff, 308px 1798px #fff,
    231px 1763px #fff, 505px 416px #fff, 106px 1237px #fff, 1773px 425px #fff,
    569px 1976px #fff, 1594px 775px #fff, 100px 1452px #fff, 1472px 682px #fff,
    22px 126px #fff, 297px 538px #fff, 1154px 1459px #fff, 1149px 1072px #fff,
    560px 627px #fff, 852px 1052px #fff, 131px 697px #fff, 1128px 1849px #fff,
    1963px 1670px #fff, 1601px 196px #fff, 286px 1054px #fff, 510px 395px #fff,
    191px 1906px #fff, 1477px 761px #fff, 1938px 394px #fff, 1672px 1967px #fff,
    1756px 1092px #fff, 1699px 1876px #fff, 492px 1064px #fff, 1911px 214px #fff,
    606px 1991px #fff, 1768px 47px #fff, 959px 171px #fff, 736px 716px #fff,
    821px 1516px #fff, 1334px 1340px #fff, 582px 1372px #fff, 885px 1709px #fff,
    1155px 144px #fff, 676px 1678px #fff, 1668px 1974px #fff, 657px 1144px #fff,
    1428px 551px #fff, 1762px 1676px #fff, 1779px 1641px #fff, 562px 1862px #fff,
    787px 463px #fff, 766px 1879px #fff, 120px 1250px #fff, 766px 644px #fff,
    104px 1088px #fff, 1011px 307px #fff, 699px 984px #fff, 311px 1025px #fff,
    1841px 1068px #fff, 1959px 1142px #fff, 20px 1961px #fff, 1410px 1639px #fff,
    1190px 1163px #fff, 1318px 1480px #fff, 976px 1157px #fff,
    1485px 1833px #fff, 1835px 373px #fff, 962px 399px #fff, 1421px 1133px #fff,
    1875px 1099px #fff, 869px 629px #fff, 290px 1338px #fff, 1918px 1987px #fff,
    710px 1988px #fff, 781px 222px #fff, 840px 277px #fff, 384px 695px #fff,
    1173px 1613px #fff, 1793px 540px #fff, 876px 314px #fff, 25px 720px #fff,
    1702px 300px #fff, 851px 1961px #fff, 80px 876px #fff, 51px 1973px #fff,
    200px 1746px #fff, 1713px 1329px #fff, 355px 1711px #fff, 651px 1719px #fff;
  animation: animateStars 28.5s ease-in-out infinite;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
#stars::after {
  z-index: 1000;
  content: " ";
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 0 1116px 1997px #fff, 393px 330px #fff, 1454px 582px #fff,
    66px 1869px #fff, 762px 584px #fff, 389px 530px #fff, 1938px 763px #fff,
    1559px 825px #fff, 132px 1821px #fff, 1110px 460px #fff, 1980px 1879px #fff,
    1625px 1682px #fff, 660px 671px #fff, 1112px 775px #fff, 1091px 535px #fff,
    1516px 663px #fff, 886px 144px #fff, 1190px 583px #fff, 348px 728px #fff,
    1835px 205px #fff, 748px 1139px #fff, 1613px 613px #fff, 470px 1705px #fff,
    948px 503px #fff, 1318px 1072px #fff, 202px 982px #fff, 239px 986px #fff,
    1827px 768px #fff, 519px 336px #fff, 218px 363px #fff, 230px 279px #fff,
    1248px 1198px #fff, 1606px 515px #fff, 930px 163px #fff, 88px 598px #fff,
    1421px 795px #fff, 1525px 1964px #fff, 491px 1206px #fff, 1372px 833px #fff,
    445px 82px #fff, 316px 139px #fff, 201px 1084px #fff, 360px 743px #fff,
    439px 891px #fff, 841px 1048px #fff, 456px 1644px #fff, 45px 1508px #fff,
    59px 1765px #fff, 956px 1665px #fff, 1284px 1233px #fff, 1250px 1010px #fff,
    1217px 897px #fff, 627px 591px #fff, 949px 62px #fff, 100px 351px #fff,
    1787px 78px #fff, 30px 1004px #fff, 1408px 1823px #fff, 186px 1704px #fff,
    1230px 100px #fff, 284px 1529px #fff, 1900px 588px #fff, 1454px 637px #fff,
    1870px 1664px #fff, 1045px 862px #fff, 201px 639px #fff, 494px 44px #fff,
    1288px 462px #fff, 502px 1534px #fff, 1232px 1994px #fff, 1473px 196px #fff,
    1065px 1612px #fff, 752px 729px #fff, 955px 952px #fff, 1637px 951px #fff,
    1139px 1233px #fff, 354px 86px #fff, 1126px 801px #fff, 1428px 388px #fff,
    1042px 1511px #fff, 1962px 769px #fff, 1071px 593px #fff, 1467px 1179px #fff,
    772px 1888px #fff, 612px 1071px #fff, 518px 982px #fff, 1700px 1874px #fff,
    600px 625px #fff, 1726px 183px #fff, 1290px 855px #fff, 1148px 1371px #fff,
    1715px 212px #fff, 172px 1745px #fff, 1150px 302px #fff, 40px 263px #fff,
    1795px 273px #fff, 1775px 1847px #fff, 1781px 862px #fff, 621px 279px #fff,
    580px 1822px #fff, 813px 1913px #fff, 1703px 1403px #fff, 1691px 1131px #fff,
    831px 1835px #fff, 1307px 1497px #fff, 1745px 444px #fff, 1453px 439px #fff,
    58px 1824px #fff, 1960px 416px #fff, 485px 564px #fff, 618px 1866px #fff,
    1481px 1228px #fff, 622px 1688px #fff, 1776px 1535px #fff, 1725px 140px #fff,
    1144px 1088px #fff, 1798px 1737px #fff, 1482px 213px #fff, 519px 264px #fff,
    945px 444px #fff, 570px 870px #fff, 164px 54px #fff, 1408px 1649px #fff,
    943px 738px #fff, 738px 578px #fff, 1977px 1392px #fff, 1820px 697px #fff,
    1884px 616px #fff, 83px 967px #fff, 707px 821px #fff, 656px 1147px #fff,
    311px 1539px #fff, 427px 136px #fff, 1057px 1355px #fff, 1710px 704px #fff,
    1722px 583px #fff, 1182px 413px #fff, 630px 635px #fff, 369px 1603px #fff,
    220px 892px #fff, 152px 394px #fff, 1374px 1407px #fff, 1075px 1737px #fff,
    675px 1615px #fff, 557px 1265px #fff, 819px 349px #fff, 130px 759px #fff,
    1628px 1795px #fff, 652px 730px #fff, 1196px 475px #fff, 1818px 1109px #fff,
    1779px 766px #fff, 643px 1634px #fff, 922px 1345px #fff, 1690px 301px #fff,
    719px 1067px #fff, 1252px 1241px #fff, 1673px 316px #fff, 781px 883px #fff,
    1074px 1130px #fff, 1450px 959px #fff, 842px 1585px #fff, 1409px 1180px #fff,
    1424px 1947px #fff, 204px 519px #fff, 1951px 869px #fff, 21px 1947px #fff,
    1300px 1164px #fff, 1300px 1795px #fff, 1692px 1882px #fff, 450px 999px #fff,
    243px 1149px #fff, 147px 1407px #fff, 1383px 1425px #fff, 513px 792px #fff,
    312px 1058px #fff, 1758px 1913px #fff, 1782px 1238px #fff, 1749px 481px #fff,
    64px 581px #fff, 1987px 361px #fff, 1898px 593px #fff, 1858px 1208px #fff,
    1013px 154px #fff, 277px 312px #fff, 1175px 862px #fff, 682px 591px #fff,
    1297px 334px #fff, 790px 228px #fff, 333px 1925px #fff, 1113px 1626px #fff,
    1797px 1380px #fff, 30px 1432px #fff, 1909px 478px #fff, 975px 1472px #fff,
    603px 1746px #fff, 1456px 693px #fff, 1783px 1518px #fff, 75px 428px #fff,
    956px 922px #fff, 1793px 729px #fff, 1378px 1994px #fff, 1793px 1332px #fff,
    1363px 1925px #fff, 724px 1919px #fff, 427px 1334px #fff, 283px 985px #fff,
    93px 952px #fff, 1961px 1297px #fff, 501px 1727px #fff, 1772px 1570px #fff,
    376px 1157px #fff, 1597px 362px #fff, 452px 1321px #fff, 264px 1727px #fff,
    702px 1996px #fff, 765px 1479px #fff, 1162px 347px #fff, 1229px 1461px #fff,
    121px 520px #fff, 1341px 1925px #fff, 1597px 996px #fff, 103px 104px #fff,
    1177px 1433px #fff, 1317px 67px #fff, 1335px 1570px #fff, 706px 421px #fff,
    348px 1852px #fff, 220px 415px #fff, 636px 1878px #fff, 156px 1897px #fff,
    1534px 759px #fff, 1775px 488px #fff, 1063px 1402px #fff, 267px 1292px #fff,
    390px 1686px #fff, 837px 1853px #fff, 1497px 1907px #fff, 275px 1643px #fff,
    389px 994px #fff, 383px 614px #fff, 185px 1088px #fff, 1184px 1148px #fff,
    598px 1266px #fff, 287px 1433px #fff, 1306px 1760px #fff, 1516px 916px #fff,
    854px 78px #fff, 727px 163px #fff, 613px 1282px #fff, 1195px 1304px #fff,
    135px 1028px #fff, 1334px 948px #fff, 672px 687px #fff, 264px 140px #fff,
    227px 326px #fff, 1142px 1475px #fff, 253px 1391px #fff, 609px 1432px #fff,
    1021px 235px #fff, 531px 1357px #fff, 1730px 260px #fff, 1521px 1132px #fff,
    1178px 1379px #fff, 839px 165px #fff, 853px 223px #fff, 1555px 1361px #fff,
    1214px 899px #fff, 1161px 547px #fff, 1842px 1439px #fff, 474px 1489px #fff,
    1491px 1015px #fff, 990px 713px #fff, 1357px 966px #fff, 459px 1708px #fff,
    929px 1444px #fff, 1985px 392px #fff, 1419px 1058px #fff, 1437px 1211px #fff,
    1473px 1533px #fff, 1171px 1060px #fff, 468px 1454px #fff, 310px 58px #fff,
    1726px 1563px #fff, 1958px 1516px #fff, 353px 421px #fff, 256px 698px #fff,
    1578px 460px #fff, 355px 1949px #fff, 33px 216px #fff, 974px 994px #fff,
    943px 92px #fff, 1519px 1318px #fff, 884px 1197px #fff, 1315px 252px #fff,
    1599px 297px #fff, 1975px 783px #fff, 594px 1019px #fff, 1871px 1429px #fff,
    890px 103px #fff, 959px 1001px #fff, 974px 916px #fff, 1081px 192px #fff,
    1269px 385px #fff, 1532px 1079px #fff, 1576px 674px #fff, 1850px 1505px #fff,
    1396px 1133px #fff, 345px 1465px #fff, 1973px 1535px #fff, 330px 360px #fff,
    1204px 271px #fff, 1660px 1134px #fff, 1917px 1658px #fff, 119px 1983px #fff,
    705px 1439px #fff, 1672px 706px #fff, 1330px 1565px #fff, 611px 684px #fff,
    492px 916px #fff, 119px 307px #fff, 106px 663px #fff, 299px 1866px #fff,
    1787px 1433px #fff, 182px 766px #fff, 1468px 106px #fff, 1791px 478px #fff,
    1516px 1622px #fff, 152px 1428px #fff, 903px 546px #fff, 286px 223px #fff,
    133px 1905px #fff, 1944px 1895px #fff, 905px 283px #fff, 1808px 733px #fff,
    1996px 334px #fff, 741px 1867px #fff, 860px 579px #fff, 377px 1078px #fff,
    1467px 1328px #fff, 492px 1915px #fff, 85px 1771px #fff, 1495px 1133px #fff,
    1264px 336px #fff, 1997px 319px #fff, 816px 1304px #fff, 832px 199px #fff,
    873px 1531px #fff, 1030px 1589px #fff, 1767px 196px #fff, 1607px 768px #fff,
    1514px 716px #fff, 92px 631px #fff, 1972px 454px #fff, 1645px 1512px #fff,
    493px 111px #fff, 73px 1827px #fff, 1569px 790px #fff, 55px 557px #fff,
    1969px 1558px #fff, 1309px 1091px #fff, 1797px 189px #fff,
    1560px 1672px #fff, 709px 277px #fff, 850px 28px #fff, 1091px 1330px #fff,
    1408px 847px #fff, 955px 1926px #fff, 452px 1582px #fff, 1941px 900px #fff,
    1479px 655px #fff, 589px 507px #fff, 1575px 499px #fff, 470px 349px #fff,
    1352px 1313px #fff, 1544px 1980px #fff, 1453px 1681px #fff, 566px 24px #fff,
    386px 1941px #fff, 131px 1064px #fff, 161px 599px #fff, 1550px 392px #fff,
    1703px 1777px #fff, 1327px 1263px #fff, 684px 540px #fff, 1849px 141px #fff,
    39px 1036px #fff, 1806px 1021px #fff, 753px 940px #fff, 76px 957px #fff,
    1954px 987px #fff, 1204px 1898px #fff, 1344px 1145px #fff, 111px 191px #fff,
    719px 687px #fff, 1255px 1842px #fff, 480px 647px #fff, 518px 1503px #fff,
    223px 302px #fff, 158px 801px #fff, 488px 339px #fff, 1600px 57px #fff,
    1670px 1692px #fff, 1590px 611px #fff, 1165px 956px #fff, 812px 1395px #fff,
    425px 1661px #fff, 884px 951px #fff, 1466px 1286px #fff, 923px 713px #fff,
    1127px 532px #fff, 623px 1862px #fff, 826px 1488px #fff, 1747px 1816px #fff,
    1273px 143px #fff, 1559px 269px #fff, 1749px 474px #fff, 430px 1187px #fff,
    1600px 425px #fff, 1870px 362px #fff, 1286px 1979px #fff, 492px 381px #fff,
    1886px 1058px #fff, 1960px 740px #fff, 1763px 886px #fff, 1927px 508px #fff,
    980px 1507px #fff, 943px 1499px #fff, 1383px 934px #fff, 697px 396px #fff,
    1033px 1139px #fff, 1687px 823px #fff, 228px 420px #fff, 1775px 1251px #fff,
    1266px 173px #fff, 1003px 629px #fff, 1983px 709px #fff, 1035px 85px #fff,
    1732px 1124px #fff, 1668px 1032px #fff, 1138px 1945px #fff,
    179px 1559px #fff, 1080px 399px #fff, 16px 138px #fff, 1401px 1596px #fff,
    1536px 1216px #fff, 1252px 342px #fff, 928px 1014px #fff, 1143px 241px #fff,
    133px 879px #fff, 1821px 542px #fff, 1860px 1151px #fff, 1490px 96px #fff,
    1719px 1743px #fff, 396px 912px #fff, 732px 251px #fff, 1220px 1958px #fff,
    1111px 1679px #fff, 1631px 1008px #fff, 644px 196px #fff, 1101px 1235px #fff,
    1097px 1037px #fff, 187px 791px #fff, 266px 75px #fff, 897px 270px #fff,
    537px 197px #fff, 1201px 1526px #fff, 1750px 361px #fff, 1419px 25px #fff,
    1637px 1253px #fff, 1481px 1715px #fff, 350px 397px #fff, 939px 862px #fff,
    1116px 685px #fff, 1318px 1231px #fff, 408px 1691px #fff, 1877px 397px #fff,
    954px 1622px #fff, 468px 89px #fff, 180px 1230px #fff, 1477px 1823px #fff,
    1541px 1890px #fff, 497px 1204px #fff, 1126px 736px #fff, 1048px 641px #fff,
    451px 227px #fff, 1930px 1407px #fff, 408px 1183px #fff, 1873px 31px #fff,
    1854px 1666px #fff, 654px 1315px #fff, 1075px 692px #fff, 1861px 48px #fff,
    1821px 99px #fff, 1047px 982px #fff, 830px 1495px #fff, 1827px 1394px #fff,
    851px 1548px #fff, 32px 291px #fff, 814px 1791px #fff, 293px 976px #fff,
    592px 1657px #fff, 1692px 1467px #fff, 366px 1906px #fff, 163px 621px #fff,
    1890px 1452px #fff, 149px 1404px #fff, 1523px 302px #fff, 233px 1975px #fff,
    1459px 423px #fff, 1842px 1529px #fff, 1031px 725px #fff, 1153px 369px #fff,
    333px 1548px #fff, 1965px 88px #fff, 1245px 19px #fff, 66px 1794px #fff,
    963px 1292px #fff, 752px 1706px #fff, 1133px 1440px #fff, 133px 669px #fff,
    478px 1060px #fff, 18px 1889px #fff, 653px 936px #fff, 1827px 1122px #fff,
    713px 1409px #fff, 1988px 650px #fff, 244px 110px #fff, 1242px 809px #fff,
    895px 1114px #fff, 963px 1407px #fff, 1556px 1327px #fff, 1233px 1133px #fff,
    1118px 693px #fff, 495px 100px #fff, 1887px 1478px #fff, 320px 1528px #fff,
    754px 1090px #fff, 670px 1731px #fff, 1px 508px #fff, 1979px 311px #fff,
    658px 1609px #fff, 475px 260px #fff, 1088px 788px #fff, 1918px 1024px #fff,
    665px 587px #fff, 759px 99px #fff, 355px 1784px #fff, 366px 191px #fff,
    592px 304px #fff, 492px 924px #fff, 1046px 419px #fff, 1611px 881px #fff,
    1105px 935px #fff, 1300px 15px #fff, 114px 1721px #fff, 513px 674px #fff,
    458px 1477px #fff, 1933px 1200px #fff, 1710px 936px #fff, 700px 1857px #fff,
    805px 1047px #fff, 362px 45px #fff, 810px 678px #fff, 430px 787px #fff,
    1798px 1729px #fff, 972px 1357px #fff, 1330px 779px #fff, 1286px 1056px #fff,
    793px 1644px #fff, 817px 464px #fff, 1856px 1221px #fff, 1437px 104px #fff,
    1984px 1049px #fff, 243px 818px #fff, 495px 1693px #fff, 264px 1085px #fff,
    24px 1946px #fff, 1201px 810px #fff, 1489px 73px #fff, 1853px 1365px #fff,
    1995px 1179px #fff, 1789px 1673px #fff, 337px 750px #fff, 1740px 1961px #fff,
    1226px 579px #fff, 24px 126px #fff, 1502px 1297px #fff, 772px 894px #fff,
    1720px 188px #fff, 1022px 54px #fff, 1143px 592px #fff, 313px 337px #fff,
    492px 1342px #fff, 106px 153px #fff, 1640px 407px #fff, 1487px 227px #fff,
    1140px 1989px #fff, 1227px 1690px #fff, 1622px 614px #fff, 1188px 252px #fff,
    855px 1436px #fff, 1519px 1668px #fff, 399px 181px #fff, 1212px 1786px #fff,
    1564px 1371px #fff, 1431px 271px #fff, 649px 1643px #fff, 1029px 1168px #fff,
    1564px 786px #fff, 1851px 898px #fff, 1382px 974px #fff, 183px 990px #fff,
    868px 367px #fff, 204px 1817px #fff, 474px 1913px #fff, 308px 1798px #fff,
    231px 1763px #fff, 505px 416px #fff, 106px 1237px #fff, 1773px 425px #fff,
    569px 1976px #fff, 1594px 775px #fff, 100px 1452px #fff, 1472px 682px #fff,
    22px 126px #fff, 297px 538px #fff, 1154px 1459px #fff, 1149px 1072px #fff,
    560px 627px #fff, 852px 1052px #fff, 131px 697px #fff, 1128px 1849px #fff,
    1963px 1670px #fff, 1601px 196px #fff, 286px 1054px #fff, 510px 395px #fff,
    191px 1906px #fff, 1477px 761px #fff, 1938px 394px #fff, 1672px 1967px #fff,
    1756px 1092px #fff, 1699px 1876px #fff, 492px 1064px #fff, 1911px 214px #fff,
    606px 1991px #fff, 1768px 47px #fff, 959px 171px #fff, 736px 716px #fff,
    821px 1516px #fff, 1334px 1340px #fff, 582px 1372px #fff, 885px 1709px #fff,
    1155px 144px #fff, 676px 1678px #fff, 1668px 1974px #fff, 657px 1144px #fff,
    1428px 551px #fff, 1762px 1676px #fff, 1779px 1641px #fff, 562px 1862px #fff,
    787px 463px #fff, 766px 1879px #fff, 120px 1250px #fff, 766px 644px #fff,
    104px 1088px #fff, 1011px 307px #fff, 699px 984px #fff, 311px 1025px #fff,
    1841px 1068px #fff, 1959px 1142px #fff, 20px 1961px #fff, 1410px 1639px #fff,
    1190px 1163px #fff, 1318px 1480px #fff, 976px 1157px #fff,
    1485px 1833px #fff, 1835px 373px #fff, 962px 399px #fff, 1421px 1133px #fff,
    1875px 1099px #fff, 869px 629px #fff, 290px 1338px #fff, 1918px 1987px #fff,
    710px 1988px #fff, 781px 222px #fff, 840px 277px #fff, 384px 695px #fff,
    1173px 1613px #fff, 1793px 540px #fff, 876px 314px #fff, 25px 720px #fff,
    1702px 300px #fff, 851px 1961px #fff, 80px 876px #fff, 51px 1973px #fff,
    200px 1746px #fff, 1713px 1329px #fff, 355px 1711px #fff, 651px 1719px #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

#stars2 {
  z-index: 1000;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 0 1877px 1961px #fff, 612px 1450px #fff, 996px 1716px #fff,
    344px 90px #fff, 1251px 481px #fff, 134px 1830px #fff, 1376px 1315px #fff,
    1332px 460px #fff, 914px 387px #fff, 1809px 1097px #fff, 622px 781px #fff,
    1645px 608px #fff, 1576px 1954px #fff, 185px 279px #fff, 1470px 631px #fff,
    960px 826px #fff, 709px 1664px #fff, 441px 1640px #fff, 137px 208px #fff,
    207px 1561px #fff, 1708px 1180px #fff, 160px 1157px #fff, 249px 1900px #fff,
    1087px 1434px #fff, 563px 418px #fff, 633px 446px #fff, 380px 1484px #fff,
    415px 496px #fff, 1892px 707px #fff, 1642px 1489px #fff, 717px 1243px #fff,
    1804px 1745px #fff, 586px 371px #fff, 77px 1719px #fff, 413px 1376px #fff,
    1271px 1152px #fff, 1137px 236px #fff, 954px 633px #fff, 361px 1990px #fff,
    879px 368px #fff, 1988px 1483px #fff, 286px 1675px #fff, 1545px 1539px #fff,
    483px 815px #fff, 1541px 436px #fff, 1346px 214px #fff, 1359px 803px #fff,
    1246px 583px #fff, 247px 407px #fff, 337px 878px #fff, 1045px 1398px #fff,
    570px 1243px #fff, 1140px 444px #fff, 1953px 1364px #fff, 486px 1624px #fff,
    1591px 832px #fff, 721px 1596px #fff, 1102px 1301px #fff, 1566px 1134px #fff,
    241px 377px #fff, 495px 1038px #fff, 1766px 455px #fff, 789px 348px #fff,
    1113px 1975px #fff, 1138px 1153px #fff, 330px 1510px #fff, 1866px 307px #fff,
    559px 260px #fff, 806px 1275px #fff, 1886px 1316px #fff, 1581px 20px #fff,
    1624px 441px #fff, 657px 1187px #fff, 1197px 1409px #fff, 279px 237px #fff,
    1943px 1333px #fff, 1212px 466px #fff, 1138px 571px #fff, 1365px 1744px #fff,
    528px 1458px #fff, 1557px 923px #fff, 1675px 1137px #fff, 1625px 6px #fff,
    891px 1948px #fff, 56px 626px #fff, 1410px 866px #fff, 1361px 972px #fff,
    97px 286px #fff, 1461px 1498px #fff, 396px 1313px #fff, 1046px 866px #fff,
    174px 1663px #fff, 1364px 1074px #fff, 1750px 654px #fff, 1266px 585px #fff,
    1975px 603px #fff, 1655px 75px #fff, 318px 1552px #fff, 775px 1429px #fff,
    671px 426px #fff, 1007px 613px #fff, 1483px 1099px #fff, 1596px 1763px #fff,
    1385px 441px #fff, 1590px 1906px #fff, 1767px 1706px #fff,
    1132px 1667px #fff, 1109px 527px #fff, 1662px 44px #fff, 1251px 438px #fff,
    1521px 1162px #fff, 512px 1468px #fff, 1636px 1794px #fff,
    1952px 1329px #fff, 19px 334px #fff, 779px 708px #fff, 1882px 1323px #fff,
    1896px 1809px #fff, 1655px 665px #fff, 283px 264px #fff, 1076px 1083px #fff,
    1309px 1818px #fff, 244px 1997px #fff, 63px 122px #fff, 902px 440px #fff,
    1181px 1869px #fff, 715px 1087px #fff, 1764px 445px #fff, 1249px 208px #fff,
    21px 372px #fff, 933px 1406px #fff, 273px 1053px #fff, 496px 375px #fff,
    1725px 352px #fff, 725px 1415px #fff, 1963px 1555px #fff, 1134px 560px #fff,
    79px 994px #fff, 1171px 589px #fff, 1679px 1614px #fff, 947px 1447px #fff,
    1700px 636px #fff, 994px 1424px #fff, 1386px 424px #fff, 502px 1215px #fff,
    939px 745px #fff, 1402px 1098px #fff, 1934px 865px #fff, 1296px 1398px #fff,
    1192px 1819px #fff, 571px 61px #fff, 1829px 1041px #fff, 881px 1712px #fff,
    1766px 992px #fff, 1810px 306px #fff, 1014px 1267px #fff, 1558px 602px #fff,
    1640px 519px #fff, 1194px 1374px #fff, 680px 284px #fff, 958px 1704px #fff,
    1134px 612px #fff, 1917px 1103px #fff, 542px 1196px #fff, 583px 1679px #fff,
    727px 121px #fff, 1315px 1109px #fff, 984px 439px #fff, 1376px 1121px #fff,
    448px 238px #fff, 38px 1619px #fff, 1499px 569px #fff, 1177px 632px #fff,
    1828px 1932px #fff, 1664px 1704px #fff, 678px 850px #fff, 1061px 1917px #fff,
    483px 1175px #fff, 1123px 118px #fff, 878px 1964px #fff, 1732px 43px #fff,
    58px 1606px #fff, 1397px 206px #fff, 745px 1454px #fff, 1913px 720px #fff,
    1870px 849px #fff, 1581px 1837px #fff, 1295px 789px #fff, 444px 680px #fff,
    1236px 367px #fff, 1315px 873px #fff, 1866px 1845px #fff, 672px 380px #fff,
    804px 1466px #fff, 1016px 1398px #fff, 740px 1068px #fff, 871px 1117px #fff,
    1246px 1358px #fff, 918px 1236px #fff, 17px 778px #fff;
  animation: animateStars 30s ease-in-out infinite;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
#stars2::after {
  z-index: 1000;
  content: " ";
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 0 1877px 1961px #fff, 612px 1450px #fff, 996px 1716px #fff,
    344px 90px #fff, 1251px 481px #fff, 134px 1830px #fff, 1376px 1315px #fff,
    1332px 460px #fff, 914px 387px #fff, 1809px 1097px #fff, 622px 781px #fff,
    1645px 608px #fff, 1576px 1954px #fff, 185px 279px #fff, 1470px 631px #fff,
    960px 826px #fff, 709px 1664px #fff, 441px 1640px #fff, 137px 208px #fff,
    207px 1561px #fff, 1708px 1180px #fff, 160px 1157px #fff, 249px 1900px #fff,
    1087px 1434px #fff, 563px 418px #fff, 633px 446px #fff, 380px 1484px #fff,
    415px 496px #fff, 1892px 707px #fff, 1642px 1489px #fff, 717px 1243px #fff,
    1804px 1745px #fff, 586px 371px #fff, 77px 1719px #fff, 413px 1376px #fff,
    1271px 1152px #fff, 1137px 236px #fff, 954px 633px #fff, 361px 1990px #fff,
    879px 368px #fff, 1988px 1483px #fff, 286px 1675px #fff, 1545px 1539px #fff,
    483px 815px #fff, 1541px 436px #fff, 1346px 214px #fff, 1359px 803px #fff,
    1246px 583px #fff, 247px 407px #fff, 337px 878px #fff, 1045px 1398px #fff,
    570px 1243px #fff, 1140px 444px #fff, 1953px 1364px #fff, 486px 1624px #fff,
    1591px 832px #fff, 721px 1596px #fff, 1102px 1301px #fff, 1566px 1134px #fff,
    241px 377px #fff, 495px 1038px #fff, 1766px 455px #fff, 789px 348px #fff,
    1113px 1975px #fff, 1138px 1153px #fff, 330px 1510px #fff, 1866px 307px #fff,
    559px 260px #fff, 806px 1275px #fff, 1886px 1316px #fff, 1581px 20px #fff,
    1624px 441px #fff, 657px 1187px #fff, 1197px 1409px #fff, 279px 237px #fff,
    1943px 1333px #fff, 1212px 466px #fff, 1138px 571px #fff, 1365px 1744px #fff,
    528px 1458px #fff, 1557px 923px #fff, 1675px 1137px #fff, 1625px 6px #fff,
    891px 1948px #fff, 56px 626px #fff, 1410px 866px #fff, 1361px 972px #fff,
    97px 286px #fff, 1461px 1498px #fff, 396px 1313px #fff, 1046px 866px #fff,
    174px 1663px #fff, 1364px 1074px #fff, 1750px 654px #fff, 1266px 585px #fff,
    1975px 603px #fff, 1655px 75px #fff, 318px 1552px #fff, 775px 1429px #fff,
    671px 426px #fff, 1007px 613px #fff, 1483px 1099px #fff, 1596px 1763px #fff,
    1385px 441px #fff, 1590px 1906px #fff, 1767px 1706px #fff,
    1132px 1667px #fff, 1109px 527px #fff, 1662px 44px #fff, 1251px 438px #fff,
    1521px 1162px #fff, 512px 1468px #fff, 1636px 1794px #fff,
    1952px 1329px #fff, 19px 334px #fff, 779px 708px #fff, 1882px 1323px #fff,
    1896px 1809px #fff, 1655px 665px #fff, 283px 264px #fff, 1076px 1083px #fff,
    1309px 1818px #fff, 244px 1997px #fff, 63px 122px #fff, 902px 440px #fff,
    1181px 1869px #fff, 715px 1087px #fff, 1764px 445px #fff, 1249px 208px #fff,
    21px 372px #fff, 933px 1406px #fff, 273px 1053px #fff, 496px 375px #fff,
    1725px 352px #fff, 725px 1415px #fff, 1963px 1555px #fff, 1134px 560px #fff,
    79px 994px #fff, 1171px 589px #fff, 1679px 1614px #fff, 947px 1447px #fff,
    1700px 636px #fff, 994px 1424px #fff, 1386px 424px #fff, 502px 1215px #fff,
    939px 745px #fff, 1402px 1098px #fff, 1934px 865px #fff, 1296px 1398px #fff,
    1192px 1819px #fff, 571px 61px #fff, 1829px 1041px #fff, 881px 1712px #fff,
    1766px 992px #fff, 1810px 306px #fff, 1014px 1267px #fff, 1558px 602px #fff,
    1640px 519px #fff, 1194px 1374px #fff, 680px 284px #fff, 958px 1704px #fff,
    1134px 612px #fff, 1917px 1103px #fff, 542px 1196px #fff, 583px 1679px #fff,
    727px 121px #fff, 1315px 1109px #fff, 984px 439px #fff, 1376px 1121px #fff,
    448px 238px #fff, 38px 1619px #fff, 1499px 569px #fff, 1177px 632px #fff,
    1828px 1932px #fff, 1664px 1704px #fff, 678px 850px #fff, 1061px 1917px #fff,
    483px 1175px #fff, 1123px 118px #fff, 878px 1964px #fff, 1732px 43px #fff,
    58px 1606px #fff, 1397px 206px #fff, 745px 1454px #fff, 1913px 720px #fff,
    1870px 849px #fff, 1581px 1837px #fff, 1295px 789px #fff, 444px 680px #fff,
    1236px 367px #fff, 1315px 873px #fff, 1866px 1845px #fff, 672px 380px #fff,
    804px 1466px #fff, 1016px 1398px #fff, 740px 1068px #fff, 871px 1117px #fff,
    1246px 1358px #fff, 918px 1236px #fff, 17px 778px #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

#stars3 {
  z-index: 1000;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 0 627px 1533px #fff, 1849px 704px #fff, 724px 1007px #fff,
    813px 1210px #fff, 2px 429px #fff, 1620px 1870px #fff, 1384px 1973px #fff,
    1877px 679px #fff, 227px 212px #fff, 1772px 539px #fff, 661px 83px #fff,
    634px 354px #fff, 1660px 94px #fff, 1083px 847px #fff, 1497px 361px #fff,
    1781px 477px #fff, 1535px 1967px #fff, 1490px 437px #fff, 550px 538px #fff,
    905px 1685px #fff, 1452px 1774px #fff, 492px 1783px #fff, 1694px 1431px #fff,
    1481px 1976px #fff, 224px 1898px #fff, 1105px 207px #fff, 288px 478px #fff,
    1618px 768px #fff, 1668px 684px #fff, 86px 1512px #fff, 1086px 904px #fff,
    515px 379px #fff, 1477px 1440px #fff, 897px 964px #fff, 19px 335px #fff,
    1181px 729px #fff, 876px 1204px #fff, 1543px 1729px #fff, 1197px 1831px #fff,
    1959px 739px #fff, 377px 1696px #fff, 529px 938px #fff, 1032px 1258px #fff,
    1142px 1253px #fff, 648px 1501px #fff, 1773px 1584px #fff,
    1882px 1720px #fff, 347px 519px #fff, 1695px 359px #fff, 1412px 1290px #fff,
    1230px 1492px #fff, 1369px 1784px #fff, 11px 1276px #fff, 1611px 870px #fff,
    141px 416px #fff, 88px 462px #fff, 1275px 1188px #fff, 850px 1312px #fff,
    1447px 876px #fff, 1131px 1938px #fff, 1487px 858px #fff, 407px 593px #fff,
    1381px 1520px #fff, 1700px 487px #fff, 948px 1117px #fff, 739px 41px #fff,
    1029px 685px #fff, 678px 262px #fff, 258px 955px #fff, 1384px 420px #fff,
    1029px 1608px #fff, 1753px 177px #fff, 1357px 706px #fff, 1039px 1776px #fff,
    1153px 726px #fff, 730px 129px #fff, 454px 1492px #fff, 411px 85px #fff,
    75px 521px #fff, 1663px 852px #fff, 1162px 396px #fff, 1354px 1009px #fff,
    526px 117px #fff, 1166px 1523px #fff, 1854px 527px #fff, 139px 1837px #fff,
    677px 739px #fff, 1px 1538px #fff, 566px 1427px #fff, 1931px 434px #fff,
    159px 1217px #fff, 36px 406px #fff, 482px 625px #fff, 687px 558px #fff,
    1835px 1888px #fff, 942px 1974px #fff, 1402px 1026px #fff, 1645px 225px #fff,
    1563px 1875px #fff, 809px 1015px #fff;
  animation: animateStars 31.5s ease-in-out infinite;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}
#stars3:after {
  z-index: 1000;
  content: " ";
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 0 627px 1533px #fff, 1849px 704px #fff, 724px 1007px #fff,
    813px 1210px #fff, 2px 429px #fff, 1620px 1870px #fff, 1384px 1973px #fff,
    1877px 679px #fff, 227px 212px #fff, 1772px 539px #fff, 661px 83px #fff,
    634px 354px #fff, 1660px 94px #fff, 1083px 847px #fff, 1497px 361px #fff,
    1781px 477px #fff, 1535px 1967px #fff, 1490px 437px #fff, 550px 538px #fff,
    905px 1685px #fff, 1452px 1774px #fff, 492px 1783px #fff, 1694px 1431px #fff,
    1481px 1976px #fff, 224px 1898px #fff, 1105px 207px #fff, 288px 478px #fff,
    1618px 768px #fff, 1668px 684px #fff, 86px 1512px #fff, 1086px 904px #fff,
    515px 379px #fff, 1477px 1440px #fff, 897px 964px #fff, 19px 335px #fff,
    1181px 729px #fff, 876px 1204px #fff, 1543px 1729px #fff, 1197px 1831px #fff,
    1959px 739px #fff, 377px 1696px #fff, 529px 938px #fff, 1032px 1258px #fff,
    1142px 1253px #fff, 648px 1501px #fff, 1773px 1584px #fff,
    1882px 1720px #fff, 347px 519px #fff, 1695px 359px #fff, 1412px 1290px #fff,
    1230px 1492px #fff, 1369px 1784px #fff, 11px 1276px #fff, 1611px 870px #fff,
    141px 416px #fff, 88px 462px #fff, 1275px 1188px #fff, 850px 1312px #fff,
    1447px 876px #fff, 1131px 1938px #fff, 1487px 858px #fff, 407px 593px #fff,
    1381px 1520px #fff, 1700px 487px #fff, 948px 1117px #fff, 739px 41px #fff,
    1029px 685px #fff, 678px 262px #fff, 258px 955px #fff, 1384px 420px #fff,
    1029px 1608px #fff, 1753px 177px #fff, 1357px 706px #fff, 1039px 1776px #fff,
    1153px 726px #fff, 730px 129px #fff, 454px 1492px #fff, 411px 85px #fff,
    75px 521px #fff, 1663px 852px #fff, 1162px 396px #fff, 1354px 1009px #fff,
    526px 117px #fff, 1166px 1523px #fff, 1854px 527px #fff, 139px 1837px #fff,
    677px 739px #fff, 1px 1538px #fff, 566px 1427px #fff, 1931px 434px #fff,
    159px 1217px #fff, 36px 406px #fff, 482px 625px #fff, 687px 558px #fff,
    1835px 1888px #fff, 942px 1974px #fff, 1402px 1026px #fff, 1645px 225px #fff,
    1563px 1875px #fff, 809px 1015px #fff;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
}

@keyframes animateStars {
  0% {
    -webkit-transform: rotate3d(-1, 1, 0, 0deg);
    -ms-transform: rotate3d(-1, 1, 0, 0deg);
    -o-transform: rotate3d(-1, 1, 0, 0deg);
    transform: rotate3d(-1, 1, 0, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(-1, 1, 0, 30deg);
    -ms-transform: rotate3d(-1, 1, 0, 30deg);
    -o-transform: rotate3d(-1, 1, 0, 30deg);
    transform: rotate3d(-1, 1, 0, 30deg);
  }
  50% {
    -webkit-transform: rotate3d(-1, 1, 0, 0deg);
    -ms-transform: rotate3d(-1, 1, 0, 0deg);
    -o-transform: rotate3d(-1, 1, 0, 0deg);
    transform: rotate3d(-1, 1, 0, 0deg);
  }
  75% {
    -webkit-transform: rotate3d(-1, 1, 0, -30deg);
    -ms-transform: rotate3d(-1, 1, 0, -30deg);
    -o-transform: rotate3d(-1, 1, 0, -30deg);
    transform: rotate3d(-1, 1, 0, -30deg);
  }
  100% {
    -webkit-transform: rotate3d(-1, 1, 0, 0deg);
    -ms-transform: rotate3d(-1, 1, 0, 0deg);
    -o-transform: rotate3d(-1, 1, 0, 0deg);
    transform: rotate3d(-1, 1, 0, 0deg);
  }
}
</style>
