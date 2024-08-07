"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
// import { input } from "@/components/ui/input"

export function Receipt() {
  const [items, setItems] = useState([
    
  ])
  const [newItem, setNewItem] = useState({ name: "", quantity: 1, price: 0 })
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items]
    updatedItems[index][field] = value
    setItems(updatedItems)
  }
  const handleNewItemChange = (field, value) => {
    setNewItem({ ...newItem, [field]: value })
  }
  const handleAddItem = () => {
    setItems([...items, { ...newItem, id: items.length + 1 }])
    setNewItem({ name: "", quantity: 1, price: 0 })
  }
  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  const total = items.reduce((acc, item) => acc + item.quantity * item.price, 0)
  return (
    <div className="bg-background rounded-lg border p-6 w-full max-w-5xl mt-5">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <ReceiptIcon className="w-6 h-6 text-primary" />
          <h1 className="text-2xl font-bold">Receipt</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" size="sm">
            <PrinterIcon className="w-4 h-4 mr-2" />
            Print
          </Button>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left">Item</th>
              <th className="px-4 py-2 text-right">Quantity</th>
              <th className="px-4 py-2 text-right">Price</th>
              <th className="px-4 py-2 text-right">Total</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2 text-left">
                  <input value={item.name} onChange={(e) => handleItemChange(index, "name", e.target.value)} />
                </td>
                <td className="px-4 py-2 text-right">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, "quantity", Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2 text-right">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleItemChange(index, "price", Number(e.target.value))}
                  />
                </td>
                <td className="px-4 py-2 text-right">${(item.quantity * item.price).toFixed(2)}</td>
                <td className="px-4 py-2 text-right">
                  <Button variant="outline" size="sm" onClick={() => handleRemoveItem(item.id)}>
                    <TrashIcon className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
            <tr className="border-b">
              <td className="px-4 py-2 text-left">
                <input
                  value={newItem.name}
                  onChange={(e) => handleNewItemChange("name", e.target.value)}
                  placeholder="New Item"
                />
              </td>
              <td className="px-4 py-2 text-right">
                <input
                  type="number"
                  value={newItem.quantity}
                  onChange={(e) => handleNewItemChange("quantity", Number(e.target.value))}
                />
              </td>
              <td className="px-4 py-2 text-right">
                <input
                  type="number"
                  value={newItem.price}
                  onChange={(e) => handleNewItemChange("price", Number(e.target.value))}
                />
              </td>
              <td className="px-4 py-2 text-right">${(newItem.quantity * newItem.price).toFixed(2)}</td>
              <td className="px-4 py-2 text-right">
                <Button variant="outline" size="sm" onClick={handleAddItem}>
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-right font-bold text-2xl">Total: ${total.toFixed(2)}</div>
    </div>
  )
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function PrinterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
      <rect x="6" y="14" width="12" height="8" rx="1" />
    </svg>
  )
}


function ReceiptIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
      <path d="M12 17.5v-11" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
