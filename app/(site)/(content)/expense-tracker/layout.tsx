import type { Metadata } from "next";
import "../../../globals.css";

export const metadata: Metadata = {
  title: "MOCHA 가계부",
  description: "개인 가계부 웹앱",
};

export default async function ExpenseTrackerLayout({
  transactionCategoryForm,
  transactionForm,
  transactionTest,
}: {
  transactionCategoryForm: React.ReactNode;
  transactionForm: React.ReactNode;
  transactionTest: React.ReactNode;
}) {
  return (
    <>
      <h1>가계부 Form</h1>
      {transactionCategoryForm}
      {transactionForm}
      {transactionTest}
    </>
  );
}
