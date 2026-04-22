export default function Cashier() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Cashier Dashboard</h1>

      <input
        placeholder="Enter phone number"
        style={{
          padding: 12,
          width: "100%",
          marginTop: 20
        }}
      />

      <button style={{ marginTop: 10, padding: 12 }}>
        Lookup
      </button>
    </main>
  )
}
