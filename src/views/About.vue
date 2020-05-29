<template>
  <div class="about">
    <top
    />
    <div class="about-content"> 
      <h1>Vårt kaffe</h1>
      <p class="bold">Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.</p>
      <p>Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. 
        So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. 
        Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.</p>
      <p>Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. 
        At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. 
        In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.</p>
      <div class="ceo">
        <img src="../assets/graphics/eva-cortado.jpg" alt="Eva Cortado">
        <h3>Eva Cortado</h3>
        <p>VD & Grundare</p>
      </div>  
    </div> 
    <bottom
    />
  </div>
</template>

<script>
import Top from '@/components/Top'
import Bottom from '@/components/Bottom'
export default {
  name: 'About',
  components: {
    Top,
    Bottom,
  },
}
</script>

<style scoped lang="scss">
  div.about {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #F3E4E1;
    min-height: 100vh;
    h1 {
      font-family: 'PT Serif';
      margin: 2rem 0 1.2rem 0;
      font-size: 2.7rem;
    }
    p {
      font-family: 'Work Sans';
      font-size: 0.782rem;
      line-height: 1.6;
      word-spacing: 0.08rem;
      margin-top: 1.2rem;
    }
    div.about-content {
      padding: 0 1.6rem 1rem 1.6rem;
      p.bold {
        font-size: 0.88rem;
        font-weight: bold;
        line-height: 1.7;
        word-spacing: normal;
        padding: 0 1.7rem 0 0;
      }
      div.ceo {
        width: fit-content;
        margin: 0 auto;
        img {
          width: 74px;
          border-radius: 37px;
          display: block;
          margin: 3.2rem auto 0.3rem auto;
        }
        h3, p {
          margin: 0;
          padding: 0;
        }
        h3 {
          font-family: 'PT Serif';
          font-size: 1.3rem;
        }
        p {
          width: fit-content;
          margin: 0 auto 2.5rem auto;
        }
      }
    }
  }
</style>