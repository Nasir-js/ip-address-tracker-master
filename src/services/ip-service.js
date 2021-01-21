const IP_API_KEY = "at_grX4sgs9IgSA3dKCC4pDk1JfnHIRD"

/**
 * 
 * @param {*} ip 
 * here we define a param ip and set its default value to an empty string,
 * this is because we only need to send the ip address to the api when 
 */
export const getIpInfo = async (ip = '') => {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${IP_API_KEY}&ipAddress=${ip}`)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      return data
    }

    return {}

  } catch (error) {
    console.error('something went wrong => ', error);

    return {}
  }
}