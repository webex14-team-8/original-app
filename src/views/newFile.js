import GoogleMapsApiLoader from "google-maps-api-loader"

export default (await import("vue")).defineComponent({
  name: "GoogleMap",
  data() {
    return {
      google: null,
      mapConfig: {
        center: {
          lat: 35.68944,
          lng: 139.69167,
        },
        zoom: 17,
      },
    }
  },
  async mounted() {
    this.google = await GoogleMapsApiLoader({
      apiKey: "API_KEY",
    })
    this.initializeMap()
  },
  methods: {
    initializeMap() {
      new this.google.maps.Map(this.$refs.googleMap, this.mapConfig)
    },
  },
})
