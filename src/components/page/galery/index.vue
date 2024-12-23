<template>

  <section 
  class="
    bg-green-900 
      py-20 
      flex-shrink-0 
      relative 
      overflow-hidden
      h-[100vh]
    "
  >
  
  <svg 
    class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
    viewBox="0 0 375 283" 
    fill="none" 
    style="opacity: 0.1;"
  >
  
  <rect 
    x="159.52" 
    y="175" 
    width="152" 
    height="152" 
    rx="8" 
    transform="rotate(-45 159.52 175)" 
    fill="white" 
  />
    
  <rect 
    y="107.48" 
    width="152" 
    height="152" 
    rx="8" 
    transform="rotate(-45 0 107.48)" 
    fill="white" 
  />
  
  </svg>

  <div 
    class="
        container 
        mx-auto 
        px-4
      "
    >
      
    <div 
      class="
        flex 
        flex-col 
        md:flex-row 
        items-center 
        justify-between
      "
    >

          <div 
            class="
              md:w-1/2 
              mb-8 
              md:mb-0
            "
          >

        <div 
          class="
            flex 
            items-center 
            justify-center 
          "
        >
            <div 
              class="
                relative
              "
            >
                <div 
                  class="
                    h-10 
                    w-10 
                    rounded-full 
                    border-t-8 
                    border-b-8 
                    border-green-600
                  "
                >
                </div>
                
                <div 
                  class="
                    absolute 
                    top-0 
                    left-0 
                    h-10 
                    w-10 
                    rounded-full 
                    border-t-8 
                    border-b-8 
                    border-green-950 
                    animate-spin
                  "
                >
                </div>

            </div>

        </div>


              <h1 
                class="
                  text-white 
                  font-bold 
                  text-3xl 
                  leading-tight 
                  mb-6
                "
              >
                Info
              </h1>
              
              <p 
                class="
                  text-white 
                  text-xl 
                  mb-8
                "
              >
                Page Galery not fond !!
              </p>

          </div>
          <div 
            class="
              md:w-1/2
            "
          >
              
            <img 
              src="../../../assets/img/what-is-web-development.png" 
              alt="Coffee beans"
              class="
                w-full 
                rounded-lg 
                shadow-lg
              "
            >
          
          </div>
      </div>
  </div>
</section>
  
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>