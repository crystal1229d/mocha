import { lightenColor } from "../lib";
import { useTransactionCategoryFormStore } from "../stores";
import { TransactionCategoryTreeNode } from "../types";

export default function CategoryNode({
  category,
}: {
  category: TransactionCategoryTreeNode;
}) {
  const { select, remove } = useTransactionCategoryFormStore();

  const isTopLevel = category.depth === 0;
  const hasColor = category.color && category.depth !== undefined;

  const textColor = isTopLevel && category.color ? category.color : undefined;
  const bgColor =
    hasColor && !isTopLevel
      ? lightenColor(category.color!, category.depth * 15)
      : undefined;

  return (
    <li className="ml-4">
      <div
        className="group flex items-center justify-between rounded-lg px-3 py-2 transition cursor-pointer hover:shadow-md bg-white border border-gray-200"
        style={bgColor ? { backgroundColor: bgColor } : {}}
        onClick={() => select(category)}
      >
        <span
          className="flex items-center gap-2 font-medium"
          style={textColor ? { color: textColor } : {}}
        >
          {category.icon && <span className="text-xl">{category.icon}</span>}
          {category.full_path.join(" > ")}
        </span>
        <div
          className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => select(category)}
            title="수정"
            className="hover:scale-110 transition text-gray-500 hover:text-black"
          >
            ✏️
          </button>
          <button
            onClick={() => remove(category.id)}
            title="삭제"
            className="hover:scale-110 transition text-gray-500 hover:text-red-500"
          >
            🗑️
          </button>
        </div>
      </div>
      {category.children?.length > 0 && (
        <ul className="ml-2 mt-1 space-y-1">
          {category.children.map((child) => (
            <CategoryNode key={child.id} category={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
