import axios from 'axios';

export const fetchCountries = async() => {
  try{
    const response = await axios("https://restcountries.com/v3.1/region/ame");
    const data = response.data;
    return data;
  }catch(err){
    return err.status;
  }
};
