const namespaced = true;

const state = {
  allT:[
    {
      title:'你可以记录自己的便签',
      id:1
    },
    {
      title:'左滑删除',
      id:2
    },
    {
      title:'数据记录在本浏览器，更换即还原默认',
      id:3
    },
    {
      title:'清理缓存即可清空数据，还原默认',
      id:4
    },

    {
      title:'比如',
      id:5
    },
    {
      title:'今天要买水果',
      id:6
    },
    {
      title:'闹钟调了吗',
      id:7
    }
  ]
}

const getters = {
  getAllT: state => {
    return state.allT;
  }
}

const mutations = {
  setAllT (state, payload) {
    state.allT = payload.allT;
  }
}

const actions = {
  /**
   *没有异步操作 
   *暂时留空
   *
   */
  // loadMore ({commit, state}) {
  //   request
  //     .get('https://api.douban.com/v2/event/list?loc=108288&start=' +
  //       state.skip + '&count=3')
  //     .use(jsonp)
  //     .end((err, res) => {
  //       if (!err) {
  //         commit({
  //           type: 'loadMore',
  //           res: res.body.events
  //         })
  //       }
  //     })
  // },
  // /**
  //  * Getting single event
  //  * id: event id
  //  */
  // getSingleEvent ({commit, state}, payload) {
  //   return new Promise((resolve, reject) => {
  //     request
  //       .get('https://api.douban.com/v2/event/' + payload.id)
  //       .use(jsonp)
  //       .end((err, res) => {
  //         if (!err) {
  //           commit({
  //             type: 'getSingleEvent',
  //             res: res.body
  //           })
  //           resolve(res)
  //         }
  //       })
  //   })
  // }
}

export default {
  namespaced,
  state,
  mutations,
  getters,
  actions
}
