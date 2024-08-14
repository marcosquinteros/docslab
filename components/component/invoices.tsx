"use client";

import { JSX, SVGProps, use, useRef, useState } from "react";
import { Button } from "../ui/button";
import { PlusIcon } from "lucide-react";
import generatePDF from "react-to-pdf";
import imgplaceholder from '../../public/imgplaceholder.png'
import Image from "next/image";
export function Invoices() {
  const [businessName, setBusinessName] = useState("Name Inc.");
  const [address, setAddress] = useState("123 Main St, Anytown USA");
  const [email, setEmail] = useState("support@acme.com");
  const [phone, setPhone] = useState("(555) 555-5555");
  const [issuedDate, setIssuedDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [invoiceNumber, setinvoiceNumber] = useState("000");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [logo, setLogo] = useState(null);
  const handleLogoChange = (e: { target: { files: Blob[]; }; }) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const handleClick = () => {
    document.getElementById("logoInput").click();
  };
  const [items, setItems] = useState([
    {
      name: "New Item",
      quantity: 1,
      price: 0,
    },
  ]);
  const [paymentTerms, setPaymentTerms] = useState("Next 30 days");
  const [notes, setNotes] = useState("Additional information or instructions");
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  const targetRef = useRef<HTMLDivElement | null>(null);
  const calculateTax = () => {
    return calculateSubtotal() * 0.1;
  };
  const calculateTotal = () => {
    return calculateSubtotal();
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
  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const updateItem = (index: number, field: string, value: string | number) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
  const handleDownload = () => {
    if (targetRef.current) {
      generatePDF(targetRef, {
        filename: `invoice_${invoiceNumber}.pdf`,
      });
    } else {
      console.error("Target element is not defined");
      alert("Unable to generate PDF. Please try again.");
    }
  };
  return (
    <div>
      <div
        ref={targetRef}
        id="invoice"
        className="flex w-full mb-4 h-full max-w-5xl border rounded-lg flex-col gap-8 p-8 md:p-12 lg:p-16 mt-5"
      >
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative" onClick={handleClick}>
              <Image
                src={logo || imgplaceholder}
                width={50}
                height={50}
                alt="Company Logo"
                style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
              />
              <input
                id="logoInput"
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
              {/* <button
              onClick={handleClick}
              className="absolute bottom-0 right-0 p-1 bg-gray-200 rounded-full"
              aria-label="Upload Logo"
            >
              <PlusIcon size={16} />
            </button> */}
            </div>
            <div className="grid gap-1">
              <input
                className="text-2xl font-bold border-b p-2"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
              <input
                className="text-muted-foreground border-b p-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <div className="flex gap-2">
                <input
                  className="text-muted-foreground border-b p-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="text-muted-foreground border-b p-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="grid  gap-2">
            <div className="flex  border rounded-lg justify-end">
              <h2 className="text-2xl mx-2 font-bold">Invoice #</h2>
              <input
                className="text-2xl font-bold border-b max-w-20"
                value={invoiceNumber}
                onChange={(e) => setinvoiceNumber(e.target.value)}
              />
            </div>

            <input
              type="date"
              className="text-muted-foreground border-b p-2"
              value={issuedDate}
              onChange={(e) => setIssuedDate(e.target.value)}
            />
            <input
              type="date"
              className="text-muted-foreground border-b p-2"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </header>
        <main className="grid gap-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="grid gap-2">
              <label className="" htmlFor="client-name">
                Client Name
              </label>
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
                          updateItem(
                            index,
                            "quantity",
                            parseInt(e.target.value)
                          )
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
          <div className="border flex gap-5 justify-end p-3 rounded-lg">
            <label className=" font-bold text-2xl" htmlFor="total">
              Total:
            </label>
            <div className="flex items-center">
              <h2 className="font-bold text-2xl mr-1">$</h2>
              <input
                className="text-2xl w-40"
                id="total"
                type="number"
                value={calculateTotal().toFixed(2)}
                disabled
              />
            </div>
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
      </div>
      <footer className="flex justify-end gap-2">
        {/* <Button variant="outline">Save Draft</Button> */}
        <Button onClick={handleDownload}>Download</Button>
      </footer>
    </div>
  );
}

function TrashIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
