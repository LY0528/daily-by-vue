import Cookies from 'js-cookie'

export function setSideBarActive (value) {
  return Cookies.set('sideBarActive', value);
}
export function getSideBarActive() {
  return Cookies.get('sideBarActive')
}
