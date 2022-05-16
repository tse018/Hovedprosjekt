//import githubQuery from '../graphql/githubQuery.graphql';

export default {
   state() {
      return {
         data: [],
         error: '',
      };
   },

   mutations: {
      setGithubContent(state, data) {
         state.data = data;
      },

      setError(state, error) {
         state.error = error;
      }
   },

   actions: {
      async fetchGithubData(state) {
         const url = 'https://api.github.com/graphql';
         const response = await fetch(githubQuery);
         try {
            if (response.status >= 200 && response.status < 300) {
               state.commit('setGithubContent');
            } else {
               if (response.status === 404) {
                  throw new Error('URL Not Found')
               }
               throw new Error('Something went Wrong')
            }
         } catch (error) {
            state.commit('setError', error);
         };
      },
   },

   getters: {
      getGithubData(state) {
         return state.data;
      }
   }
}