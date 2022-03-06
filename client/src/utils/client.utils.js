import * as React from 'react'
import Cookies from 'universal-cookie/es6'

import { parseCookies } from './common.utils'

const cookies = new Cookies()
const prefix = 'client__'

export function createCookie({ name, value, ...options }) {
  cookies.set(prefix + name, value, options)
}

export function removeLastCookie() {
  const lastCookie = Object.keys(cookies.getAll()).pop()
  cookies.remove(lastCookie)
}

export function removeAllCookies() {
  const cookieNames = Object.keys(cookies.getAll())
  cookieNames.forEach(cookieName => cookies.remove(cookieName))
}

export function getAllCookies() {
  const allCookies = cookies.getAll()
  return parseCookies(allCookies)
}
