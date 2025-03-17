const contact = [];
let id = 1;
let cout = false;
let choice;
let menu = `
	================== MENU ===================

    1. Thêm đối tượng Contact vào danh sách liên hệ.
    2. Hiển thị danh sách danh bạ.
    3. Tìm kiếm thông tin Contact theo số điện thoại.
    4. Cập nhật thông tin Contact(name, email, phone) theo id.
    5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
    6. Thoát.
 	============================================
    Lựa chọn của bạn: 
`

while (choice !== 6) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let newProdust = {
                id: id++,
                name: prompt("nhap Tên của người liên hệ"),
                email: prompt("nhap  Email của người liên hệ"),
                phone: prompt("nhap Số điện thoại của người liên hệ"),
            };
            contact.push(newProdust);
            break;
        case 2:
            console.table(contact);
            break;
        case 3:
            let CheckPhone = +prompt("nhap so dien thoai can tim kiem");
            cout = false;
            for (let i = 0; i < contact.length; i++) {
                if (CheckPhone == contact[i].phone) {
                    console.table(contact[i]);
                    cout = true;
                }
            }
            if (cout == false) {
                console.log("Không tìm thay nguoi lien he");
            }
            break;
        case 4:
            let checkID = +prompt("nhap id nhan vien can sua luong");
            cout = false;
            for (let i = 0; i < crud.length; i++) {
                if (checkID == crud[i].id) {
                    crud[i].name = prompt("nhap ten san pham duoc cap nhat");
                    crud[i].email = prompt("nhap email duoc cap nhat");
                    crud[i].phone = prompt("nhap so dien thoai duoc cap nhat");
                    cout = true;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy nguoi lien he");
            }
            break;
        case 5:
            let checkId = +prompt("nhap id muon xoa");
            cout = false;
            for (let i = 0; i < contact.length; i++) {
                if (checkId == contact[i].id) {
                    let check = prompt("ban co muon xoa nhan vien khong !  (yes/no)");
                    if (check == "yes") {
                        contact.splice(i, 1);
                    } else {
                        break;
                    }
                    cout = true;
                }
            }
            if (cout == false) {
                console.log("Không tìm thay nguoi lien he");
            }
            break;
        case 6:
            console.log("ban da thoat khoi chuong trinh")
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}