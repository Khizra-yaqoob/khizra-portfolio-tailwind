import { useState, useEffect, useRef } from 'react'

interface StockItem {
  id: number
  name: string
  category: string
  price: number
  qty: number
}

const defaultStock: StockItem[] = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, qty: 5 },
  { id: 2, name: 'Mouse', category: 'Electronics', price: 25, qty: 30 },
  { id: 3, name: 'Notebook', category: 'Stationery', price: 3, qty: 100 },
  { id: 4, name: 'T-Shirt', category: 'Clothing', price: 15, qty: 8 },
]

function loadStock(): StockItem[] {
  const saved = localStorage.getItem('stockData')
  return saved ? JSON.parse(saved) : defaultStock
}

function loadLog(): string[] {
  const saved = localStorage.getItem('activityLog')
  return saved ? JSON.parse(saved) : []
}

function Dashboard() {
  const [stock, setStock] = useState<StockItem[]>(loadStock)
  const [log, setLog] = useState<string[]>(loadLog)
  const [form, setForm] = useState({ name: '', category: '', price: '', qty: '' })

  const tableRef = useRef<HTMLElement>(null)
  const insertRef = useRef<HTMLElement>(null)
  const graphRef = useRef<HTMLElement>(null)
  const logRef = useRef<HTMLElement>(null)

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('stockData', JSON.stringify(stock))
  }, [stock])

  useEffect(() => {
    localStorage.setItem('activityLog', JSON.stringify(log))
  }, [log])

  function addLog(msg: string) {
    const time = new Date().toLocaleTimeString()
    setLog(prev => [`${time} - ${msg}`, ...prev].slice(0, 10))
  }

  function scrollTo(ref: React.RefObject<HTMLElement | null>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleInsert(e: React.FormEvent) {
    e.preventDefault()
    const newId = stock.length ? stock[stock.length - 1].id + 1 : 1
    const newItem: StockItem = {
      id: newId,
      name: form.name,
      category: form.category,
      price: Number(form.price),
      qty: Number(form.qty),
    }
    setStock(prev => [...prev, newItem])
    addLog(`Added ${form.name} - Qty: ${form.qty}`)
    setForm({ name: '', category: '', price: '', qty: '' })
  }

  function handleEdit(id: number) {
    const item = stock.find(i => i.id === id)
    if (!item) return
    const newQty = prompt(`Update qty for ${item.name} (current: ${item.qty}):`, String(item.qty))
    if (newQty !== null && !isNaN(Number(newQty)) && newQty !== '') {
      addLog(`Updated ${item.name}: ${item.qty} → ${parseInt(newQty)}`)
      setStock(prev => prev.map(i => i.id === id ? { ...i, qty: parseInt(newQty) } : i))
    }
  }

  function handleDelete(id: number) {
    const item = stock.find(i => i.id === id)
    if (!item) return
    if (confirm(`Delete ${item.name} from inventory?`)) {
      addLog(`Deleted ${item.name}`)
      setStock(prev => prev.filter(i => i.id !== id))
    }
  }

  function exportCSV() {
    let csv = 'ID,Product,Category,Price,Qty\n'
    stock.forEach(i => { csv += `${i.id},${i.name},${i.category},${i.price},${i.qty}\n` })
    const blob = new Blob([csv], { type: 'text/csv' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'shop_inventory.csv'
    addLog('Exported CSV file')
    a.click()
  }

  function clearAll() {
    if (confirm('Clear all inventory data? This cannot be undone.')) {
      addLog('Cleared all inventory')
      setStock([])
    }
  }

  const totalValue = stock.reduce((s, i) => s + i.price * i.qty, 0)
  const lowStockCount = stock.filter(i => i.qty < 10).length
  const categoryCount = new Set(stock.map(i => i.category)).size
  const maxQty = Math.max(...stock.map(i => i.qty), 1)

  const quickCards = [
    { icon: '📂', title: 'View All Stock', desc: 'Browse the complete inventory list with product name, category, price, quantity, and stock status.', ref: tableRef },
    { icon: '➕', title: 'Insert New Stock', desc: 'Add a new product to the inventory by filling in name, category, price, and quantity fields.', ref: insertRef },
    { icon: '✏️', title: 'Update Stock', desc: 'Edit existing inventory records — click the Edit button next to any product in the table.', ref: tableRef },
    { icon: '🗑️', title: 'Delete Stock', desc: 'Remove products from inventory using the Delete button. A confirmation prompt will appear.', ref: tableRef },
    { icon: '📊', title: 'Graphical View', desc: 'View bar chart of stock quantities per product, color coded by category for easy analysis.', ref: graphRef },
    { icon: '📋', title: 'Activity Log', desc: 'Track all recent inventory changes including inserts, updates, deletions, and CSV exports.', ref: logRef },
  ]

  return (
    <div className="page">

      {/* HEADER */}
      <section className="section no-bottom-padding">
        <span className="section-number">Dashboard</span>
        <h1 className="dashboard-title">Inventory Dashboard</h1>
        <div className="divider"></div>
        <p className="dashboard-intro">
          Manage stock items — view, insert, update, and delete records.
          Monitor graphical statistics and track recent activity.
        </p>
      </section>

      {/* QUICK ACCESS */}
      <section className="section no-bottom-padding">
        <div className="section-header">
          <span className="section-number">01 — Quick Access</span>
          <h2>Dashboard Actions</h2>
          <div className="divider"></div>
        </div>
        <div className="card-container">
          {quickCards.map((c) => (
            <div className="card" key={c.title}>
              <h3>{c.icon} {c.title}</h3>
              <p>{c.desc}</p>
              <button onClick={() => scrollTo(c.ref)}>{c.title.split(' ').slice(-2).join(' ')}</button>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="section no-bottom-padding">
        <div className="section-header">
          <span className="section-number">02 — Overview</span>
          <h2>Inventory Statistics</h2>
          <div className="divider"></div>
        </div>
        <div className="card-container">
          <div className="card">
            <h3>📦 Total Products</h3>
            <p className="stat-value">{stock.length}</p>
            <p>Items in inventory</p>
          </div>
          <div className="card">
            <h3>💰 Total Value</h3>
            <p className="stat-value">${totalValue}</p>
            <p>Estimated stock value</p>
          </div>
          <div className="card">
            <h3>⚠️ Low Stock</h3>
            <p className="stat-value">{lowStockCount}</p>
            <p>Items below 10 units</p>
          </div>
          <div className="card">
            <h3>🏷️ Categories</h3>
            <p className="stat-value">{categoryCount}</p>
            <p>Product categories</p>
          </div>
        </div>
      </section>

      {/* GRAPH */}
      <section className="section no-bottom-padding" ref={graphRef}>
        <div className="section-header">
          <span className="section-number">03 — Graph</span>
          <h2>Stock Graphical View</h2>
          <div className="divider"></div>
          <p>Bar chart showing stock quantity per product. Color indicates product category.</p>
        </div>
        <div className="dashboard-card">
          <div className="graph-container" id="stockGraph">
            {stock.map((item) => {
              const heightPx = Math.max(Math.round((item.qty / maxQty) * 200), 20)
              return (
                <div
                  key={item.id}
                  className={`bar bar-${item.category}`}
                  style={{ height: `${heightPx}px` }}
                >
                  {item.qty} — {item.name}
                </div>
              )
            })}
          </div>
          <div className="badge-group">
            <span className="badge">Electronics — Teal</span>
            <span className="badge">Stationery — Orange</span>
            <span className="badge">Clothing — Purple</span>
          </div>
        </div>
      </section>

      {/* STOCK TABLE */}
      <section className="section no-bottom-padding" ref={tableRef}>
        <div className="section-header">
          <span className="section-number">04 — Stock Table</span>
          <h2>All Inventory Items</h2>
          <div className="divider"></div>
        </div>
        <div className="dashboard-card">
          <div className="extra-links">
            <button className="dash-btn" onClick={exportCSV}>📥 Export CSV</button>
            <button className="dash-btn logout-btn" onClick={clearAll}>🗑️ Clear All</button>
          </div>
          <div className="table-container">
            <table id="stockTable">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stock.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>${item.price}</td>
                    <td>{item.qty}</td>
                    <td>
                      <span className={`badge-status ${item.qty < 10 ? 'status-low' : 'status-ok'}`}>
                        {item.qty < 10 ? 'Low Stock' : 'In Stock'}
                      </span>
                    </td>
                    <td>
                      <button className="action-btn edit-btn" onClick={() => handleEdit(item.id)}>Edit</button>
                      <button className="action-btn delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* INSERT FORM */}
      <section className="section no-bottom-padding" ref={insertRef}>
        <div className="section-header">
          <span className="section-number">05 — Insert</span>
          <h2>Add New Product</h2>
          <div className="divider"></div>
          <p>Fill in the form below to insert a new item into the inventory.</p>
        </div>
        <div className="dashboard-card">
          <form className="dash-form" onSubmit={handleInsert}>
            <input
              type="text" placeholder="Product Name" required
              value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text" placeholder="Category (e.g. Electronics)" required
              value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}
            />
            <input
              type="number" placeholder="Price ($)" min="0" required
              value={form.price} onChange={e => setForm({ ...form, price: e.target.value })}
            />
            <input
              type="number" placeholder="Quantity" min="0" required
              value={form.qty} onChange={e => setForm({ ...form, qty: e.target.value })}
            />
            <button type="submit">➕ Add Product</button>
          </form>
        </div>
      </section>

      {/* ACTIVITY LOG */}
      <section className="section" ref={logRef}>
        <div className="section-header">
          <span className="section-number">06 — Activity</span>
          <h2>Recent Activity Log</h2>
          <div className="divider"></div>
          <p>Latest 10 actions performed on the inventory are shown here.</p>
        </div>
        <div className="dashboard-card">
          <ul className="activity-log">
            {log.length > 0
              ? log.map((entry, i) => <li key={i}>{entry}</li>)
              : <li>No activity yet. Add a product to start logging.</li>
            }
          </ul>
        </div>
      </section>

    </div>
  )
}

export default Dashboard
