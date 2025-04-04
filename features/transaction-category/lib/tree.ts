import { TransactionCategory, TransactionCategoryTreeNode } from "../types";

export const buildTree = (
  flat: TransactionCategory[]
): TransactionCategoryTreeNode[] => {
  const map = new Map<string, TransactionCategoryTreeNode>();
  const roots: TransactionCategoryTreeNode[] = [];

  flat.forEach((cat) => map.set(cat.id, { ...cat, children: [] }));

  map.forEach((cat) => {
    if (cat.parent_id && map.has(cat.parent_id)) {
      map.get(cat.parent_id)!.children.push(cat);
    } else {
      roots.push(cat);
    }
  });

  return roots;
};
