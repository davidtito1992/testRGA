import api from '@config/api';

const getLocation = async (lat,long )=>  api.get(`/api/location/search/?lattlong=${lat},${long}`);
export const getWeather = async coords =>  {
const location=await getLocation(coords.lat,coords.long);
return api.get(`/api/location/${location?.data?.[0]?.woeid}/`);
}
