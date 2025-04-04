import { useTransactionCategoryFormStore } from "../stores";
import { TransactionCategoryTreeNode } from "../types";

export default function CategoryNode({
  category,
}: {
  category: TransactionCategoryTreeNode;
}) {
  const { select, remove } = useTransactionCategoryFormStore();

  return (
    <li className="ml-4">
      <div className="flex items-center justify-between">
        <span>{category.full_path.join(" > ")}</span>
        <div className="space-x-2">
          <button onClick={() => select(category)}>수정</button>
          <button onClick={() => remove(category.id)}>삭제</button>
        </div>
      </div>
      {category.children.length > 0 && (
        <ul>
          {category.children.map((child) => (
            <CategoryNode key={child.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
