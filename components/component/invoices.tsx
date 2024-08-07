"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
export function Invoices() {
  const [clientName, setClientName] = useState("John Doe");
  const [clientEmail, setClientEmail] = useState("john@example.com");
  const [clientAddress, setClientAddress] = useState(
    "123 Main St, Anytown USA"
  );
  const [clientPhone, setClientPhone] = useState("(555) 555-5555");
  const [items, setItems] = useState([{
    name: "New Item",
    quantity: 1,
    price: 0,
  }]);
  const [paymentTerms, setPaymentTerms] = useState("Net 30 days");
  const [notes, setNotes] = useState("Additional information or instructions");
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  const calculateTax = () => {
    return calculateSubtotal() * 0.1;
  };
  const calculateTotal = () => {
    return calculateSubtotal()
  };
  const addItem = () => {
    setItems([
      ...items,
      {
        name: "New Item",
        quantity: 1,
        price: 0,
      },
    ]);
  };
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
  return (
    <div className="flex w-full mb-4 h-full max-w-5xl border rounded-lg flex-col gap-8 p-8 md:p-12 lg:p-16 mt-5">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/next.svg"
            width={48}
            height={48}
            alt="Company Logo"
            style={{ aspectRatio: "48/48", objectFit: "cover" }}
          />
          <div className="grid gap-1">
            <h1 className="text-2xl font-bold">Acme Inc.</h1>
            <p className="text-muted-foreground">123 Main St, Anytown USA</p>
            <p className="text-muted-foreground">
              support@acme.com | (555) 555-5555
            </p>
          </div>
        </div>
        <div className="grid gap-2 text-right">
          <h2 className="text-2xl font-bold">Invoice #1234</h2>
          <p className="text-muted-foreground">Issued: June 1, 2023</p>
          <p className="text-muted-foreground">Due: July 1, 2023</p>
        </div>
      </header>
      <main className="grid gap-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label className="" htmlFor="client-name">Client Name</label>
            <input
              className="border p-2 rounded-lg"
              id="client-name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="client-email">Client Email</label>
            <input
            className="border p-2 rounded-lg"
              id="client-email"
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="client-address">Client Address</label>
            <textarea
            className="border p-2 rounded-lg"
              id="client-address"
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="client-phone">Client Phone</label>
            <input
            className="border p-2 rounded-lg"
              id="client-phone"
              type="tel"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
            />
          </div>
        </div>
        <div className="grid gap-4">
          <table className="w-full">
            <thead>
              <tr className="bg-muted">
                <th className="px-4 py-2 text-left">Item</th>
                <th className="px-4 py-2 text-left">Qty</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2 text-left">
                    <input
                      value={item.name}
                      onChange={(e) =>
                        updateItem(index, "name", e.target.value)
                      }
                    />
                  </td>
                  <td className="px-4 py-2 text-left">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(index, "quantity", parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td className="px-4 py-2 text-left">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(index, "price", parseFloat(e.target.value))
                      }
                    />
                  </td>
                  <td className="px-4 py-2 text-left">
                    ${(item.quantity * item.price).toFixed(2)}
                  </td>
                  <td className="px-4 py-2 text-left">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(index)}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end">
            <Button variant="outline" size="sm" onClick={addItem}>
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
           <hr />
        </div>
            <div className="border flex gap-5 justify-end">
              <label className="mt-6 font-bold text-2xl" htmlFor="total">Total</label>
              <input
              className="mt-6 text-2xl"
                id="total"
                type="number"
                value={calculateTotal().toFixed(2)}
                disabled
              />
            </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="payment-terms">Payment Terms</label>
            <textarea
              className="border rounded-lg p-2"
              id="payment-terms"
              value={paymentTerms}
              onChange={(e) => setPaymentTerms(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="notes">Notes</label>
            <textarea
              className="border rounded-lg p-2"
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>
      </main>
      <footer className="flex justify-end gap-2">
        <Button variant="outline">Save Draft</Button>
        <Button>Download</Button>
      </footer>
    </div>
  );
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
  );
}
