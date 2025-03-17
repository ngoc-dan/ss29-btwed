const crud = [];
let id = 1;
let cout = false;
let choice;
let menu = `
	================== MENU ===================

    1. Thêm sản phẩm vào danh sách sản phẩm.
    2. Hiển thị tất cả sản phẩm.
    3. Hiển thị chi tiết sản phẩm theo id.
    4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
    5. Xóa sản phẩm theo id.
    6. Lọc sản phẩm theo khoảng giá.
    7. Thoát.
 	============================================
    Lựa chọn của bạn: 
`

while (choice !== 7) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let newProdust = {
                id: id++,
                name: prompt("nhap Tên sản phẩm"),
                price: +prompt("nhap Giá sản phẩm"),
                category: prompt("nhap Danh mục sản phẩm"),
                quantity: prompt("nhap Số lượng sản phẩm trong kho")
            };
            crud.push(newProdust);
            break;
        case 2:
            console.table(crud);
            break;
        case 3:
            let CheckId = +prompt("nhap id can tim kiem");
            cout = false;
            for (let i = 0; i < crud.length; i++) {
                if (checkID == crud[i].id) {
                    console.table(crud[i]);
                    cout = true;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy nhân viên");
            }
            break;
        case 4:
            let checkID = +prompt("nhap id nhan vien can sua luong");
            cout = false;
            for (let i = 0; i < crud.length; i++) {
                if (checkID == crud[i].id) {
                    crud[i].name = prompt("nhap ten san pham duoc cap nhat");
                    crud[i].price = +prompt("nhap gia san pham duoc cap nhat");
                    crud[i].category = prompt("nhap danh muc san pham duoc cap nhat");
                    crud[i].quantity = prompt("nhap so luong san pham duoc cap nhat");
                    cout = true;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy nhân viên");
            }
            break;
        case 5:
            let checkId = +prompt("nhap id muon xoa");
            cout = false;
            for (let i = 0; i < crud.length; i++) {
                if (checkId == crud[i].id) {
                    let check = prompt("ban co muon xoa nhan vien khong !  (yes/no)");
                    if (check == "yes") {
                        crud.splice(i, 1);
                    } else {
                        break;
                    }
                    cout = true;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy nhân viên");
            }
            break;
        case 6:
            let checkPriceMax = +prompt("nhap gia lon nhat can loc");
            let checkPriceMin = +prompt("nhap gia nho nhat can loc");
            for (let i = 0; i < crud.length; i++) {
                if (crud[i].price <= checkPriceMax && crud[i].price > checkPriceMin){
                    console.table(crud[i]);
                }
            }
            break;
        case 7:
            console.log("ban da thoat khoi chuong trinh")
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}