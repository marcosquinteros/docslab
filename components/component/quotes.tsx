"use client";

import { useRef, useState } from "react";
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
import { PlusIcon, XIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import imgplaceholder from "../../public/imgplaceholder.png";
import generatePDF from "react-to-pdf";

export function Quotes() {
  const [quote, setQuote] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [validityDate, setValidityDate] = useState("");
  const [description, setDescription] = useState("");
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
  const targetRef = useRef<HTMLDivElement | null>(null);

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

  const handleDownload = () => {
    if (targetRef.current) {
      generatePDF(targetRef, {
        filename: `expense_report.pdf`,
      });
    } else {
      console.error("Target element is not defined");
      alert("Unable to generate PDF. Please try again.");
    }
  };

  return (
    <div className="flex w-full px-3 pt-5 space-x-8">
      <Card className="w-3/6">
        <CardHeader>
          <CardTitle>Quote Generator</CardTitle>
          <CardDescription>
            Create a custom quote or estimate for your customer.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="mt-5">
          <div className="grid gap-6">
            <div className="flex justify-between">
              <div className="relative mt-5">
                <label
                  htmlFor="customer-name"
                  className="block font-medium mb-1"
                >
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
                      type="button"
                      onClick={handleClick}
                      className="p-1 bg-gray-200 rounded-full"
                      aria-label="Upload Logo"
                    >
                      <PlusIcon size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div>
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
              </div>
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
                <div className="flex justify-between">
                  <Label htmlFor="item">Item</Label>
                  <Label htmlFor="qty">Qty</Label>
                  <Label htmlFor="prive">Price</Label>
                </div>
                {quote.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div>
                      <Input
                        id="item"
                        placeholder="Item"
                        value={item.item}
                        onChange={(e) =>
                          updateItem(item.id, "item", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Input
                        id="qty"
                        className="w-full"
                        placeholder="Quantity "
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(
                            item.id,
                            "quantity",
                            Number(e.target.value)
                          )
                        }
                      />
                    </div>
                    <Input
                      className="w-1/2"
                      id="price"
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
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
          <Button size="lg">Generate Quote</Button>
        </CardFooter>
      </Card>
      <Card className="w-full px-6">
        <div id="quotes" ref={targetRef}>
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle>Quotation</CardTitle>
            {logo && (
              <Image
                src={logo}
                width={50}
                height={50}
                alt="Company Logo"
                style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
              />
            )}
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
              <div className="w-1/2 pt-7">
                {description && (
                  <div>
                    <h2 className="font-bold">Details</h2>
                    <p>{description}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <Separator/>
        </div>
        <div className="w-full flex justify-end my-6 px-4">
            <Button onClick={handleDownload}>Download</Button>
          </div>
      </Card>
    </div>
  );
}
