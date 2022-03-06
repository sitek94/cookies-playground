import * as React from 'react'

export function CookieInput({ cookie, setCookie }) {
  const [values, setValues] = React.useState(cookie)

  function handleChange(e) {
    setValues(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function handleCheckboxChange(e) {
    setValues(prev => ({
      ...prev,
      [e.target.name]: !prev[e.target.name],
    }))
  }

  React.useEffect(() => {
    setCookie(values)
  }, [values, setCookie])

  return (
    <section>
      <hgroup>
        <h2>Cookie options</h2>
        <p>Change name, value and other options of the cookie</p>
      </hgroup>
      <div className="grid">
        <label>
          Name
          <input name="name" value={cookie.name} onChange={handleChange} />
        </label>
        <label>
          Value
          <input name="value" value={cookie.value} onChange={handleChange} />
        </label>
      </div>
      <div className="grid">
        <label>
          Path
          <input name="path" value={cookie.path} onChange={handleChange} />
        </label>
        <label>
          Expires in (seconds)
          <input
            type="number"
            name="expires"
            value={Number(cookie.expires)}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid">
        <fieldset>
          <legend>SameSite</legend>
          {['Lax', 'Strict', 'None'].map(value => (
            <label key={value}>
              <input
                type="radio"
                name="sameSite"
                value={value}
                checked={values.sameSite === value}
                onChange={handleChange}
              />
              {value}
            </label>
          ))}
        </fieldset>
        <fieldset>
          <label>
            <input
              role="switch"
              type="checkbox"
              name="secure"
              checked={Boolean(cookie.secure)}
              onChange={handleCheckboxChange}
            />
            Secure
          </label>
          <label>
            <input
              role="switch"
              type="checkbox"
              name="httpOnly"
              checked={Boolean(cookie.httpOnly)}
              onChange={handleCheckboxChange}
            />
            HttpOnly
          </label>
        </fieldset>
      </div>
    </section>
  )
}
