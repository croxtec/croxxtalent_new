<template>
  <div class="container pt-5">
    <h4 class="text-center font-weight-bold" style="color:var(--primary-color)">Why Us</h4>
    <div class="why-us">
    <div class="why-us-card">
      <div class="main-content">
        <h4>Partnership</h4>
        <p>
          We see ourselves as a partner to our clients, and we work
          collaboratively to help them achieve their goals.
        </p>
        <button class="primary--button">Try now</button>
      </div>
      <div class="image-area">
        <img src="@/assets/img/partnership.png" alt="" />
      </div>
    </div>
    <div class="why-us-card">
      <div class="main-content">
        <h4>Our array of content & flexibility to customise solutions</h4>
        <p>
            We work with you to determine the best approach for your business 
            by analysing your business reality, understanding your challenges, 
            core values, and performance, and designing a tailor-made learning solution.
        </p>
        <button class="primary--button">Try now</button>
      </div>
      <div class="image-area">
        <img src="@/assets/img/solutions.png" alt="" />
      </div>
    </div>
    <div class="why-us-card">
      <div class="main-content">
        <h4>Our commitment to quality & consistency</h4>
        <p>
            We have a rigorous vetting process that ensures we only 
            work with the best talent in the industry.
        </p>
        <button class="primary--button">Try now</button>
      </div>
      <div class="image-area">
        <img src="@/assets/img/commitment.png" alt="" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.image-area {
  inset: 0;
  z-index: 1;
  border-radius: 32px;
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  place-items: center;
  background-color: var(--blue-200);
  padding: 30px;
}

.why-us {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 50px;
  padding-top: 40px;
  padding-bottom: 40px;
}

.why-us-card {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  gap: 100px;
  justify-content: center;
  align-items: center;
}

.main-content {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  gap: 20px;
}

.main-content button {
    width: max-content;
}

.main-content h4 {
    font-weight: 700;
}

.main-content p {
    font-size: 14px;
    font-weight: 400;
}

.why-us-card:nth-child(2n) {
  flex-direction: row-reverse;
}

.why-us-card div {
  width: 100%;
}

.image-area img {
  width: 80%;
  height: 350px;
  object-fit: contain;
  -o-object-fit: contain;
  object-position: center;
  -o-object-position: center;
  /* border-radius: 20px; */
}

@media (max-width: 990px) {
  .why-us-card, .why-us-card:nth-child(2n) {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
