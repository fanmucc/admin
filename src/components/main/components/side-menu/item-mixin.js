export default {
    props: {
      parentItem: {
        type: Object,
        default: () => {}
      },
      theme: String,
      iconSize: Number
    },
    computed: {
      parentName () {
        return this.parentItem.name
      },
      children () {
        return this.parentItem.children
      },
      textColor () {
        return this.theme === 'dark' ? '#fff' : '#495060'
      }
    },
    mounted () {
        console.log(this.parentItem, '123')
    },
    created () {
      console.log(123)
    }
  }
  