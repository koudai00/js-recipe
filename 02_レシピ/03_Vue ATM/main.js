const now = new Date()

new Vue({
  el: "#app",
  data: {
    nyuryokugaku: "",
    zandaka: 0,
    torihikis: [],
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)
      this.torihikis.push({
        date: now,
        type: "入金",
        money: this.nyuryokugaku,
      })
    },
    syukin: function() {
      this.zandaka -= Number(this.nyuryokugaku)
      this.torihikis.push({
        date: now,
        type: "出金",
        money: this.nyuryokugaku,
      })
    },
  },
})

// new Vue({
//   el: "#v-for",
//   data: {
//     torihikis: ["日付", "操作", "金額"],
//   },
//   methods: {
//     : function() {
//       this.("")
//     },
//   },
// })
