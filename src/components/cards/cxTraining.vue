<template>
    <div class="jobs--cards">
      <div class="training--card" v-for="item in trainingCount" :key="item">
        <div class="top d-flex justify-content-between align-items-center">
         <img src="https://getwallpapers.com/wallpaper/full/0/1/1/552509.jpg" alt="">
        </div>
        <div class="middle mt-2">
          <h6 class="font-weight-bolder">Chemical Engineer</h6>
          <div
            class="d-flex align-items-center mt-1"
            style="font-weight: 300; gap: 3px; font-size: 12px"
          >
            <span style="color: #515b6f">Agency</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path fill="#515b6f" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z" />
              </svg>
            </span>
            <span style="color: #515b6f">San Francisco, USA</span>
          </div>
  
  
          <div class="mt-3 d-flex align-items-center flex-wrap" style="gap: 8px">
            <span class="tag a">Acrylic</span>
            <span class="tag d">Drilling</span>
            <span class="tag p">Pipping</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["trainingCount"],
    components: {
    },
  };
  </script>
  
  <style>
  .training--card .top img {
    width: 100%;
    height: 200px;
    object-position: center;
    -o-object-position: center;
    object-fit: cover;
    -o-object-fit: cover;
    border-radius: 10px 10px 0 0;

  }
.training--card .middle {
    border: 1px solid var(--blue-300);
    background: #fff;
    padding: 15px;
    border-radius:  0 0 15px 15px;
}
</style>