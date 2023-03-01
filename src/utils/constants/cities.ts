const cities = ["adilabad", "nizamabad", "warangal", "karimnagar", "khammam"]

export const cityData: { [key: string]: { id: number; name: string; lat: number; lon: number } } = {
  adilabad: { id: 0, name: "adilabad", lat: 19.6667, lon: 78.533302 },
  nizamabad: { id: 1, name: "nizamabad", lat: 18.672505, lon: 78.094087 },
  warangal: { id: 2, name: "warangal", lat: 18, lon: 79.58333 },
  karimnagar: { id: 3, name: "karimnagar", lat: 18.438555, lon: 79.128838 },
  khammam: { id: 4, name: "khammam", lat: 17.247253, lon: 80.151443 },
}

export default cities
