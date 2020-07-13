import { getParams } from '@/libs/util'

const USER_MAP = {
    super_admin: {
      name: 'super_admin',
      user_id: '1',
      access: ['super_admin', 'admin'],
      token: 'super_admin',
      avatar: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
    },
    admin: {
      name: 'admin',
      user_id: '2',
      access: ['admin'],
      token: 'admin',
      avatar: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4',
      routerPages: [
          {
              name: 'home',
              meta: {
                  title: '首页',
                  icon: 'user'
              }
          },
          {
              name: 'about',
              meta: {
                  title: 'about页',
                  icon: 'user'
              }
          },
          {
              name: 'array',
              meta: {
                  title: '列表',
                  icon: 'user'
              },
              children: [
                  {
                      name: 'list',
                      meta: {
                          title: '列表页',
                          icon: 'user'
                      }
                  }
              ]
          }
      ]
    }
}

export const login = req => {
    req = JSON.parse(req.body)
    return { token: USER_MAP[req.userName].token}
}

export const getUserInfo = req => {
    const params = getParams(req.url)
    return USER_MAP[params.token]
}

export const logout = req => {
    return null
}