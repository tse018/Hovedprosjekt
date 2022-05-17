export default {
   data() {
      return {
         sectionObserver: null,
      };
   },
   
   mounted() {
      this.observeSections();
   },
   
   methods: {
      observeSections() {
         try {
            this.sectionObserver.disconnect();
         } catch (error) {}

         const options = {
            rootMargin: "0px 0px",
            threshold: 0,
         };
         this.sectionObserver = new IntersectionObserver(
            this.sectionObserverHandler,
            options
         );

         // Observe each section
         const sections = document.querySelectorAll(".main-container__section");
         sections.forEach((section) => {
            this.sectionObserver.observe(section);
         });
      },
      sectionObserverHandler(entries) {
         for (const entry of entries) {
            if (entry.isIntersecting) {
               const sectionId = entry.target.id;
               // Push sectionId to router here
               this.$router.replace({
                  name: this.$route.name,
                  hash: `#${sectionId}`,
               });
            }
         }
      },
   },
};
