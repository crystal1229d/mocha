import { buildTree } from "../lib";
import { useTransactionCategoryFormStore } from "../stores";
import CategoryItem from "./category-node";

export default function TransactionCategoryTree() {
  const { categories } = useTransactionCategoryFormStore();
  const tree = buildTree(categories);

  return (
    <ul>
      {tree.map((cat) => (
        <CategoryItem key={cat.id} category={cat} />
      ))}
    </ul>
  );
}
