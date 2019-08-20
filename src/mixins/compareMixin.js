export default {
  methods: {
    compare (prop, isAsr = true) {
      return function (a, b) {
        return isAsr ? a[prop] - b[prop] : b[prop] - a[prop]
      }
    }
  }
}
