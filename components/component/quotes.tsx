"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { XIcon } from "lucide-react";
import { Separator } from "../ui/separator";

export function Quotes() {
  const [quote, setQuote] = useState([
    
  ]);
  const [customerName, setCustomerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [validityDate, setValidityDate] = useState("");

  const addItem = () => {
    setQuote([
      ...quote,
      {
        id: quote.length + 1,
        item: "",
        description: "",
        quantity: 1,
        unitPrice: 0,
      },
    ]);
  };

  const removeItem = (id) => {
    setQuote(quote.filter((item) => item.id !== id));
  };

  const updateItem = (id, field, value) => {
    setQuote(
      quote.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const total = quote.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );

  return (
    <div className="flex w-full px-3 pt-5 space-x-8">
      <Card className="w-3/6">
        <CardHeader>
          <CardTitle>Quote Generator</CardTitle>
          <CardDescription>
            Create a custom quote or estimate for your customer.
          </CardDescription>
        </CardHeader>
        <Separator/>
        <CardContent className="mt-5">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company-address">Company Address</Label>
              <Input
                id="company-address"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="customer-name">Customer Name</Label>
              <Input
                id="customer-name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="customer-address">Customer Address</Label>
              <Input
                id="customer-address"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="validity-date">Validity Date</Label>
              <Input
                id="validity-date"
                type="date"
                value={validityDate}
                onChange={(e) => setValidityDate(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label>Line Items</Label>
              <div className="grid gap-4">
                {quote.map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4"
                  >
                    <Input
                      placeholder="Item"
                      value={item.item}
                      onChange={(e) =>
                        updateItem(item.id, "item", e.target.value)
                      }
                    />
                    <Input
                      placeholder="Quantity"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(item.id, "quantity", Number(e.target.value))
                      }
                    />
                    <Input
                      placeholder="Unit Price"
                      type="number"
                      value={item.unitPrice}
                      onChange={(e) =>
                        updateItem(item.id, "unitPrice", Number(e.target.value))
                      }
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:bg-muted"
                      onClick={() => removeItem(item.id)}
                    >
                      <XIcon className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full" onClick={addItem}>
                Add Item
              </Button>
            </div>
            <div className="grid gap-2">
              <Label>Description</Label>
              <Textarea
                placeholder="Provide a description for the quote"
                className="min-h-[120px]"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
          <Button size="lg">Generate Quote</Button>
        </CardFooter>
      </Card>
      <Card className="w-full p-6">
        <CardHeader>
          <CardTitle>Quotation</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <div>
            <div className="flex justify-between my-3">
              <div>
                <h2 className="text-xl font-semibold">{companyName}</h2>
                <p>{companyAddress}</p>
                <h3 className="mt-4 text-lg font-semibold">Quote for:</h3>
                <p>{customerName}</p>
                <p>{customerAddress}</p>
              </div>
              <div>
                <h4 className="mt-4 text-lg font-semibold">Valid until:</h4>
                <p>{validityDate}</p>
              </div>
            </div>
            <Separator />
            <table className="w-full mt-4">
              <thead>
                <tr className="text-left">
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {quote.map((item) => (
                  <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>{item.quantity}</td>
                    <td>${item.unitPrice.toFixed(2)}</td>
                    <td>${(item.quantity * item.unitPrice).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right font-bold text-xl mt-4">
              Total: ${total.toFixed(2)}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
