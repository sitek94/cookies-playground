import * as React from 'react'

export function Buttons({
  title,
  description,
  onCreate,
  onRemoveLast,
  onRemoveAll,
  /**
   * Additional callback, which is called on each button click
   */
  onClick,
}) {
  return (
    <section>
      <hgroup>
        <h2>{title}</h2>
        <p>{description}</p>
      </hgroup>
      <div className="buttons">
        {[
          ['Create one', 'success', onCreate],
          ['Remove last', 'warning', onRemoveLast],
          ['Remove all', 'danger', onRemoveAll],
        ].map(([label, className, callback]) => (
          <button
            key={label}
            className={className}
            onClick={() => {
              // If the callback is a promise, wait for it to resolve and then
              // call `onClick`, otherwise just call `onClick`
              const result = callback()
              if (result) {
                Promise.resolve(result).then(() => onClick?.())
              } else {
                onClick?.()
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}
