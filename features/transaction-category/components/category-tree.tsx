import { buildTree } from "../lib";
import { useTransactionCategoryFormStore } from "../stores";
import { TRANSACTION_CATEGORY_TYPE_OPTIONS } from "../types";
import CategoryNode from "./category-node";

export default function TransactionCategoryTree() {
  const { categories } = useTransactionCategoryFormStore();
  const tree = buildTree(categories);

  return (
    <div className="space-y-6">
      {TRANSACTION_CATEGORY_TYPE_OPTIONS.map(({ value: type, label }) => {
        const typeTree = tree.filter((c) => c.type === type);

        if (typeTree.length === 0) return null;

        return (
          <div
            key={type}
            className="bg-gray-50 border border-gray-200 rounded-lg p-4"
          >
            <h3 className="text-sm font-semibold mb-3 inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800">
              {label}
            </h3>
            <ul className="space-y-1">
              {typeTree.map((cat) => (
                <CategoryNode key={cat.id} category={cat} />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
