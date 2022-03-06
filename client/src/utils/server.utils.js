import * as React from 'react'
import axiosBase from 'axios'

import { parseCookies } from './common.utils'

const axios = axiosBase.create({
  baseURL: 'http://localhost:3333',
})
const prefix = 'server__'

/**
 *❗️IMPORTANT
 *
 * It's important to pass `withCredentials: true` to the axios instance,
 * otherwise http-only cookies won't be sent to the server.
 */

export async function createCookie(cookie) {
  const dto = {
    ...cookie,
    name: prefix + cookie.name,
    expires: cookie.expires.toUTCString(),
  }
  try {
    await axios.post('/cookies', dto, {
      withCredentials: true,
    })
  } catch (error) {
    console.log(error)
  }
}

export async function removeLastCookie() {
  try {
    await axios.delete('/cookies/last', {
      withCredentials: true,
    })
  } catch (error) {
    console.log(error)
  }
}

export async function removeAllCookies() {
  try {
    await axios.delete('/cookies', {
      withCredentials: true,
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getAllCookies() {
  try {
    const response = await axios.get('/cookies', {
      withCredentials: true,
    })
    const cookies = response.data
    return parseCookies(cookies)
  } catch (error) {
    console.log(error)
  }
}
