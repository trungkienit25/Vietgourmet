import fs from 'fs/promises';
import path from 'path';

export async function POST(req, res) {
  try {
    const newData = await req.json();

    const filePath = path.resolve(process.cwd(), 'src/data/cart.json');
    
    // Đọc file cart.json hiện tại (bất đồng bộ)
    const fileData = await fs.readFile(filePath, 'utf-8');
    const cartData = JSON.parse(fileData);

    // Cập nhật dữ liệu
    cartData.items = newData.items;
    cartData.total = newData.total;

    // Ghi lại dữ liệu mới vào file (bất đồng bộ)
    await fs.writeFile(filePath, JSON.stringify(cartData, null, 2));

    return res.status(200).json({ message: "Cart updated successfully" });
  } catch (error) {
    console.error("Error updating cart:", error);
    return res.status(500).json({ message: "Error updating cart" });
  }
}
