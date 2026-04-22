'use client'

import { useState } from 'react'

export default function Demo() {
  const [claimed, setClaimed] = useState(false)

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h1>Cashier Demo</h1>

      <p>Smith Family Account</p>
      <p>4 Lines</p>
      <p>Reward: Free Phone Case</p>

      {!claimed ? (
        <button onClick={() => setClaimed(true)}>
          Redeem Reward
        </button>
      ) : (
        <p style={{ color: 'green' }}>
          Claimed ✔
        </p>
      )}
    </div>
  )
}
