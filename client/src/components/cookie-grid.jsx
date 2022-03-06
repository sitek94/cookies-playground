export function CookieGrid({
  title,
  description,
  cookies = [],
  isServer = false,
}) {
  return (
    <section>
      <hgroup>
        <h2>{title}</h2>
        <p>{description}</p>
      </hgroup>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Value</th>
            {isServer && <th scope="col">Http Only</th>}
            {isServer && <th scope="col">SameSite</th>}
          </tr>
        </thead>
        <tbody>
          {cookies.map((cookie, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{cookie.name}</td>
              <td>{cookie.value}</td>
              {isServer && <td>{cookie.httpOnly}</td>}
              {isServer && <td>{cookie.sameSite}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
