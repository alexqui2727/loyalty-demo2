'use client'
import { useState } from 'react'

export default function Cashier() {
  const [phone, setPhone] = useState('')
  const [account, setAccount] = useState(null)
  const [loading, setLoading] = useState(false)

  // Fake DB (demo)
  const mockAccount = {
    id: 'acc_1',
    name: 'Smith Family Account',
    lines: [
      '+1234567890',
      '+1234567891',
      '+1234567892'
    ],
    reward: {
      title: 'Free Phone Case',
      status: 'AVAILABLE',
      claimed_at: null
    }
  }

  async function lookup() {
    if (!phone) return

    setLoading(true)

    // simulate API delay
    setTimeout(() => {
      setAccount(mockAccount)
      setLoading(false)
    }, 500)
  }

  function redeem() {
    if (!account) return

    // Prevent double redemption
    if (account.reward.status === 'CLAIMED') return

    setAccount({
      ...account,
      reward: {
        ...account.reward,
        status: 'CLAIMED',
        claimed_at: new Date().toLocaleTimeString()
      }
    })
  }

  return (
    <div style={{
      fontFamily: 'sans-serif',
      padding: 30,
      background: '#f3f4f6',
      minHeight: '100vh'
    }}>

      {/* HEADER */}
      <h1 style={{ fontSize: 26, marginBottom: 20 }}>
        Cashier Dashboard
      </h1>

      {/* SEARCH */}
      <div style={{
        background: '#fff',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20
      }}>
        <input
          placeholder="Enter customer phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{
            padding: 12,
            width: '70%',
            marginRight: 10
          }}
        />

        <button
          onClick={lookup}
          style={{
            padding: '12px 18px',
            background: '#2563eb',
            color: '#fff',
            border: 'none'
          }}
        >
          {loading ? 'Searching...' : 'Lookup'}
        </button>
      </div>

      {/* RESULT */}
      {account && (
        <div style={{
          background: '#fff',
          padding: 20,
          borderRadius: 10
        }}>

          <h2>{account.name}</h2>

          <p><strong>Active Lines:</strong> {account.lines.length}</p>

          <div style={{ marginTop: 10 }}>
            <strong>Numbers:</strong>
            <ul>
              {account.lines.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>

          <div style={{
            marginTop: 20,
            padding: 15,
            background: '#f9fafb',
            borderRadius: 8
          }}>
            <p><strong>Reward:</strong> {account.reward.title}</p>

            <p>
              <strong>Status:</strong>{' '}
              {account.reward.status === 'AVAILABLE' ? (
                <span style={{ color: 'green' }}>AVAILABLE</span>
              ) : (
                <span style={{ color: 'red' }}>
                  CLAIMED at {account.reward.claimed_at}
                </span>
              )}
            </p>

            {/* ACTION */}
            {account.reward.status === 'AVAILABLE' && (
              <button
                onClick={redeem}
                style={{
                  marginTop: 10,
                  padding: '12px 18px',
                  background: 'green',
                  color: '#fff',
                  border: 'none'
                }}
              >
                Redeem Reward
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  )
}
