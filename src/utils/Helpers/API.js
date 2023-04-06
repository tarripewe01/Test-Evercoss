import {axios} from 'axios';

export const LoadDataNowPlaying = ({setIsloading, setData}) => {
  setIsloading(true);
  axios
    .get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: 'cdec8fbf1897d2db962aca6cc0d5d205',
      },
    })
    .then(response => {
      let datas = response.data.results;
      setIsloading(setIsloading);
      setData(setData);
    })
    .catch(error => {
      console.log(error);
    });
};
