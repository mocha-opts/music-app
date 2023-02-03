import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  display: flex;
  flex: 0 0 170px;
  flex-direction: column;
  min-height: 615px;
  padding: 10px 14px 0;
  background-color: #ffffff;
  border-right: 0.5px solid rgba(0, 0, 0, 15%);
`
export const MenuTitle = styled.div`
  display: flex;
  line-height:50px;
  height: 42px;
  padding-left:12px;
  user-select: none;
  color: rgb(159, 159, 159);
  font-size: 14px;
  font-weight: 100;
`
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  margin: 1px 0;
  border-radius: 2px;
  color: rgb(55, 55, 55);
  cursor: pointer;
  &:hover {
    background-color: rgba(245, 245, 246);
  }
  .sidebar-label {
    margin-left: 10px;
  }
  & .active{
    font-size:17px;
    color: rgb(53, 53, 53);
    font-weight:bold;
  }
`
