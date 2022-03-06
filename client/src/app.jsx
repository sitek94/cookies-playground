import * as React from 'react'
import axiosBase from 'axios'
import Cookies from 'universal-cookie/es6'

const cookies = new Cookies()

const axios = axiosBase.create({
  baseURL: 'http://localhost:3333',
})

export function App() {
  React.useEffect(() => {}, [])

  return (
    <main>
      <section>
        <hgroup>
          <h2>Browser</h2>
          <p>Set cookies on the client side</p>
        </hgroup>
        <div className="buttons">
          <button className="success" onClick={createOneCookie}>
            Create one
          </button>
          <button className="warning" onClick={deleteLastCookie}>
            Remove last
          </button>
          <button className="danger" onClick={deleteAllCookies}>
            Delete All
          </button>
        </div>
      </section>
    </main>
  )
}

let id = 0
function createOneCookie() {
  ++id
  cookies.set(`cookie_${id}`, id, { path: '/' })
}

function deleteLastCookie() {
  const lastCookie = Object.keys(cookies.getAll()).pop()
  cookies.remove(lastCookie)
}

function deleteAllCookies() {
  const cookieNames = Object.keys(cookies.getAll())
  cookieNames.forEach(cookieName => cookies.remove(cookieName))
}
