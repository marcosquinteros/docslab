"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import generatePDF from "react-to-pdf";
import Image from "next/image";
import imgplaceholder from "../../public/imgplaceholder.png";
import { PlusIcon } from "lucide-react";

export function Receipt() {
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: "Item 1", quantity: 1, price: 9.99 },
  ]);
  const [customerName, setCustomerName] = useState("John Doe");
  const addItem = () => {
    setOrderItems([
      ...orderItems,
      { id: orderItems.length + 1, name: "", quantity: 1, price: 0 },
    ]);
  };
  const removeItem = (id) => {
    setOrderItems(orderItems.filter((item) => item.id !== id));
  };
  const [logo, setLogo] = useState(null);
  const handleLogoChange = (e) => {
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
  const updateItem = (id, field, value) => {
    setOrderItems(
      orderItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };
  const updateCustomerName = (e) => {
    setCustomerName(e.target.value);
  };
  const total = orderItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = () => {
    if (targetRef.current) {
      generatePDF(targetRef, {
        filename: `receipt_${Math.floor(Math.random() * 101)}.pdf`,
      });
    } else {
      console.error("Target element is not defined");
      alert("Unable to generate PDF. Please try again.");
    }
  };
  return (
    <div className="p-6">
      <div className=" flex flex-row gap-3">
        <div className="border rounded-lg p-5 max-w-7xl">
          <h2 className="text-2xl font-bold mb-4">Receipt Generator</h2>
          <form className="space-y-4">
            <div className="relative" onClick={handleClick}>
              <label htmlFor="customer-name" className="block font-medium mb-1">
                Your Logo
              </label>
              <div className="flex items-baseline">
                <div>
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
                </div>
                <div>
                  <button
                    onClick={handleClick}
                    className="p-1 bg-gray-200 rounded-full"
                    aria-label="Upload Logo"
                  >
                    <PlusIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="customer-name" className="block font-medium mb-1">
                Customer Name
              </label>
              <Input
                id="customer-name"
                value={customerName}
                onChange={updateCustomerName}
                placeholder="Enter customer name"
              />
            </div>
            <div>
              <label htmlFor="order-items" className="block font-medium mb-1">
                Order Items
              </label>
              <div className="space-y-2">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <Input
                      id={`item-${item.id}-name`}
                      value={item.name}
                      onChange={(e) =>
                        updateItem(item.id, "name", e.target.value)
                      }
                      placeholder="Item name"
                    />
                    <Input
                      id={`item-${item.id}-quantity`}
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(
                          item.id,
                          "quantity",
                          parseInt(e.target.value)
                        )
                      }
                      placeholder="Quantity"
                    />
                    <Input
                      id={`item-${item.id}-price`}
                      type="number"
                      value={item.price}
                      onChange={(e) =>
                        updateItem(item.id, "price", parseFloat(e.target.value))
                      }
                      placeholder="Price"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  addItem();
                }}
                className="mt-2"
              >
                Add Item
              </Button>
            </div>
          </form>
        </div>
        <div className="w-full border rounded-lg p-5">
          <h2 className="text-2xl font-bold mb-4">Receipt Preview</h2>
          <div className=" w-full items-center">
            <Card className="p-6 w-full" id="receipt" ref={targetRef}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Receipt</h3>
                {logo && (
                  <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="Company Logo"
                    style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
                  />
                )}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Customer:</span>
                  <span>{customerName}</span>
                </div>
                <Separator />
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-4 py-2 text-left">Item</th>
                      <th className="border px-4 py-2 text-left">Qty</th>
                      <th className="border px-4 py-2 text-left">Price</th>
                      <th className="border px-4 py-2 text-left">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="border-b px-4 py-2">{item.name}</td>
                        <td className="border-b px-4 py-2">{item.quantity}</td>
                        <td className="border-b px-4 py-2">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="border-b px-4 py-2">
                          ${(item.quantity * item.price).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
      <div className="w-full flex justify-end my-6">
        <Button onClick={handleDownload}>Download</Button>
      </div>
        </div>
      </div>
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
