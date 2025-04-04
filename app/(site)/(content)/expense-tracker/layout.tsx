import type { Metadata } from "next";
import "../../../globals.css";

export const metadata: Metadata = {
  title: "MOCHA 가계부",
  description: "개인 가계부 웹앱",
};

export default function ExpenseTrackerLayout({
  transactionCategoryForm,
  transactionForm,
}: {
  transactionCategoryForm: React.ReactNode;
  transactionForm: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6 w-full h-full">
      <>{transactionForm}</>
      <>{transactionCategoryForm}</>
    </section>
  );
}
