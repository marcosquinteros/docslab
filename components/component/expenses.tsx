"use client";

import { useState, useRef, SetStateAction } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import imgplaceholder from "../../public/imgplaceholder.png";
import { format } from "date-fns";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Separator } from "../ui/separator";
import generatePDF from "react-to-pdf";
import { EditIcon, PlusIcon, SaveIcon, TrashIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { DateRange } from "react-day-picker";

export function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    date: "",
    category: "",
    amount: 0,
    description: "",
  });
  const [logo, setLogo] = useState(null);

  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [editingExpenseData, setEditingExpenseData] = useState(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const handleLogoChange = (e: { target: { files: Blob[]; }; }) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const [employeeName, setEmployeeName] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [reportRange, setReportRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const handleClick = () => {
    document.getElementById("logoInput").click();
  };
  const handleAddExpense = () => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
    setNewExpense({
      date: "",
      category: "",
      amount: 0,
      description: "",
    });
  };

  const handleEditExpense = (expense: SetStateAction<null>) => {
    setEditingExpenseId(expense.id);
    setEditingExpenseData({ ...expense });
  };
  const handleSaveExpense = () => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === editingExpenseId
          ? { ...expense, ...editingExpenseData }
          : expense
      )
    );
    setEditingExpenseId(null);
    setEditingExpenseData(null);
  };
  const handleCancelEdit = () => {
    setEditingExpenseId(null);
    setEditingExpenseData(null);
  };
  const handleDeleteExpense = (id: any) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((total, expense) => {
    const amount =
      typeof expense.amount === "number" && !isNaN(expense.amount)
        ? expense.amount
        : 0;
    return total + amount;
  }, 0);

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
    <div className="w-full flex flex-col h-full">
      <main className="flex-1 p-6">
        <div className="">
          <div className="flex justify-between gap-6">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="w-1/2">
                  Expense Report Generator
                </CardTitle>
                <Separator className="my-4" />
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="relative">
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
                <div className="space-y-2">
                  <Label htmlFor="employeeName">Employee Name</Label>
                  <Input
                    id="employeeName"
                    type="text"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reportDate">Report Date</Label>
                  <Input
                    id="reportDate"
                    type="date"
                    value={reportDate}
                    onChange={(e) => setReportDate(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Report Period</Label>
                  <DatePickerWithRange
                    className="max-w-md"
                    onChange={setReportRange}
                  />
                </div>
                <Separator className="my-2" />
                <h1 className="font-semibold">Expense info</h1>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={newExpense.date}
                      onChange={(e) =>
                        setNewExpense({ ...newExpense, date: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select
                      id="category"
                      value={newExpense.category}
                      onValueChange={(value) =>
                        setNewExpense({ ...newExpense, category: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Travel">Travel</SelectItem>
                        <SelectItem value="Meals">Meals</SelectItem>
                        <SelectItem value="Office">Office</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newExpense.amount}
                    onChange={(e) =>
                      setNewExpense({
                        ...newExpense,
                        amount: parseFloat(e.target.value) || 0,
                      })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newExpense.description}
                    onChange={(e) =>
                      setNewExpense({
                        ...newExpense,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleAddExpense}>Add expense</Button>
              </CardFooter>
            </Card>

            <Card
              className="w-8/12 h-auto flex flex-col "
              
            >
              <div id="expense"
              ref={targetRef}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Expense Report</CardTitle>
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
                </CardHeader>
                <Separator />
                <CardContent>
                  <div className="space-y-3 mb-4 mt-5">
                    <div className="flex justify-between">
                      <div>
                        <strong>Report from</strong> <div>{employeeName}</div>
                        <div className="flex flex-col mt-3">
                            <strong>Report period</strong>
                          <div>
                            <div>

                            from{" "}
                            {reportRange?.from
                              ? format(reportRange.from, "LLL dd, yyyy")
                              : "N/A"}{" "}
                          </div>
                          <div>
                            to{" "}
                            {reportRange?.to
                              ? format(reportRange.to, "LLL dd, yyyy")
                              : "N/A"}
                              </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-col">
                          <div>
                            <strong>Report date</strong>
                            <div>{reportDate}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Description</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {expenses.map((expense) => (
                        <TableRow
                          key={expense.id}
                          className="group relative hover:bg-gray-100 transition duration-300"
                        >
                          <TableCell>
                            {editingExpenseId === expense.id ? (
                              <Input
                                type="date"
                                value={editingExpenseData?.date || ""}
                                onChange={(e) =>
                                  setEditingExpenseData({
                                    ...editingExpenseData,
                                    date: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              expense.date
                            )}
                          </TableCell>
                          <TableCell>
                            {editingExpenseId === expense.id ? (
                              <Select
                                value={editingExpenseData?.category || ""}
                                onValueChange={(value) =>
                                  setEditingExpenseData({
                                    ...editingExpenseData,
                                    category: value,
                                  })
                                }
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Travel">Travel</SelectItem>
                                  <SelectItem value="Meals">Meals</SelectItem>
                                  <SelectItem value="Office">Office</SelectItem>
                                  <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            ) : (
                              expense.category
                            )}
                          </TableCell>
                          <TableCell>
                            {editingExpenseId === expense.id ? (
                              <Input
                                type="number"
                                value={editingExpenseData?.amount || 0}
                                onChange={(e) =>
                                  setEditingExpenseData({
                                    ...editingExpenseData,
                                    amount: parseFloat(e.target.value) || 0,
                                  })
                                }
                              />
                            ) : (
                              expense.amount
                            )}
                          </TableCell>
                          <TableCell>
                            {editingExpenseId === expense.id ? (
                              <Textarea
                                value={editingExpenseData?.description || ""}
                                onChange={(e) =>
                                  setEditingExpenseData({
                                    ...editingExpenseData,
                                    description: e.target.value,
                                  })
                                }
                              />
                            ) : (
                              expense.description
                            )}
                          </TableCell>
                          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                            {editingExpenseId === expense.id ? (
                              <>
                                <button
                                  className="text-green-500 hover:text-green-700"
                                  onClick={handleSaveExpense}
                                >
                                  <SaveIcon className="w-5 h-5" />
                                </button>
                                <button
                                  className="text-gray-500 hover:text-gray-700"
                                  onClick={handleCancelEdit}
                                >
                                  <XIcon className="w-5 h-5" />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className="text-blue-500 hover:text-green-700"
                                  onClick={() => handleEditExpense(expense)}
                                >
                                  <EditIcon className="w-5 h-5 text-green-500 hover:text-green-700 transition duration-300" />
                                </button>
                                <button
                                  className="text-red-500 hover:text-red-700"
                                  onClick={() =>
                                    handleDeleteExpense(expense.id)
                                  }
                                >
                                  <TrashIcon className="w-5 h-5" />
                                </button>
                              </>
                            )}
                          </div>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <footer className="bg-primary flex items-center text-primary-foreground py-4 px-6 mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      Total Expenses:{" "}
                      <span className="font-bold">
                        ${totalExpenses.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </footer>

              </div>
          <div className="w-full flex justify-end my-6 px-4">
            <Button onClick={handleDownload}>Download</Button>
          </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
