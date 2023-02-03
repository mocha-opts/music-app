import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import ROUTES from '../../../constants/routes'
import { SidebarWrapper, MenuItem, MenuTitle } from './style'
const Menus = [
  {
    items: [
      {
        icon: '',
        label: '发现音乐',
        route: ROUTES.discovery,
      },
      {
        icon: '',
        label: '视频',
        route: ROUTES.videos,
      },
      {
        icon: '',
        label: '朋友',
        route: ROUTES.moments,
      },
      {
        icon: '',
        label: '直播',
        route: ROUTES.moments,
      },
      {
        icon: '',
        label: '私人FM',
        route: ROUTES.moments,
      },
    ],
  },
  {
    title: '我的音乐',
    items: [
      {
        icon: '',
        label: '本地音乐',
        route: ROUTES.discovery,
      },
      {
        icon: '&#xe66f;',
        label: '下载管理',
        route: ROUTES.video,
      },
      {
        icon: '',
        label: '朋友',
        route: ROUTES.moments,
      },
    ],
  },
]
const Sidebar = () => {
  const history = useHistory()
  const { pathname } = useLocation()
  const handleClick = (route) => {
    history.push(route)
  }
  return (
    <SidebarWrapper>
      {Menus.map(({ title, items }) => {
        return (
          <>
            {title && <MenuTitle>{title}</MenuTitle>}
            {items.map(({ icon, label, route }) => {
              const isActive = false
              return (
                <MenuItem onClick={() => handleClick(route)} key={label}>
                  {icon && (
                    <i
                      className="iconfont"
                      dangerouslySetInnerHTML={{ __html: icon }}
                    ></i>
                  )}
                  <div
                    className={
                      isActive ? 'sidebar-label active' : 'sidebar-label'
                    }
                  >
                    {label}
                  </div>
                </MenuItem>
              )
            })}
          </>
        )
      })}
    </SidebarWrapper>
  )
}

export default Sidebar
