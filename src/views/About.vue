<template>

  <div class="about">
  
    <top
    />
    <div class="about-content"> 
      <h1>Vårt kaffe</h1>
      <p class="bold">Carajillo, percolator arabica cortado, medium dripper, extraction mocha trifecta americano café au lait. Aromatic as and chicory caffeine extra coffee variety.</p>
      <p>So arabica half and half, white trifecta to go seasonal skinny caramelization. So, cappuccino cup mazagran mocha sit pumpkin spice. Fair trade plunger pot caramelization coffee robusta trifecta cappuccino. Cinnamon, coffee viennese aged lungo, spoon roast cultivar percolator spoon chicory crema.
          Ristretto macchiato, chicory affogato rich decaffeinated mocha. Spoon cup, sugar qui turkish plunger pot viennese.</p>
      <p>Whipped, half and half filter shop, mug whipped coffee java single origin. Coffee caramelization breve id sweet, medium cinnamon coffee steamed coffee pumpkin spice. White in wings qui percolator extra fair trade milk. Mug, froth percolator caramelization robusta aromatic coffee.
          Steamed affogato, percolator caramelization aftertaste con panna, latte coffee seasonal lungo to go ristretto. </p>
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
    background: #F3E4E1;
    h1 {
      font-family: 'PT Serif';
    }
    p {
      font-family: 'Work Sans';
      font-size: 0.65rem;
    }
    div.about-content {
      padding: 1rem 1.7rem;
      p.bold {
        font-weight: bold;
      }
      div.ceo {
        width: fit-content;
        margin: 0 auto;
        img {
          width: 74px;
          border-radius: 37px;
          display: block;
          margin: 0 auto;
        }
        h3, p {
          margin: 0;
          padding: 0;
        }
        p {
          width: fit-content;
          margin: 0 auto;
        }
      }
    }
  }

</style>
