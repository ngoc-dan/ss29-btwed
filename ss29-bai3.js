let Menu = {}
Menu.hotPot = [
    { name: "lẩu ếch", price: "100000", describe: "ngon" },
    { name: "lẩu thái", price: "120000", describe: "siu ngon" }
]
Menu.grill = [
    { name: "nướng thịt bò", price: "110000", describe: "nhon ngon" },
    { name: "nướng hải sản", price: "135000", describe: "nhon nhon" }
]
let cout = false;
let newProdust;
let choice;
let menu = `
	================== MENU ===================

    1. Thêm món ăn vào danh mục.
    2. Xóa món ăn theo tên khỏi danh mục.
    3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
    4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
    5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
    6. Thoát.
 	============================================
    Lựa chọn của bạn: 
`

while (choice !== 6) {
    choice = +prompt(menu)
    switch (choice) {
        case 1:
            let seach = prompt("chon danh muc de them mon  (hotPot/grill)")
            if (seach == "hotPot") {
                newProdust = {
                    name: prompt("nhap Tên của món ăn "),
                    price: prompt("nhap gia cua mon an"),
                    describe: prompt("nhap mo ta ve mon an"),
                };
                Menu.hotPot.push(newProdust)
                break;
            }
            if (seach == "grill") {
                newProdust = {
                    name: prompt("nhap Tên của món ăn "),
                    price: prompt("nhap gia cua mon an"),
                    describe: prompt("nhap mo ta ve mon an"),
                };
                Menu.grill.push(newProdust)
                break;
            }
        case 2:
            checkName = prompt("nhap ten mon an can xoa");
            cout = false;
            for (let i = 0; i < Menu.grill.length; i++) {
                if (checkName == Menu.grill[i].name) {
                    Menu.grill.splice(i, 1);
                    cout = !false;
                    break;
                }
            }
            for (let i = 0; i < Menu.hotPot.length; i++) {
                if (checkName == Menu.hotPot[i].name) {
                    Menu.hotPot.splice(i, 1);
                    cout = !false;
                    break;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy mon an");
            }
            break;
        case 3:
            checkName = prompt("nhap ten mon an can sửa ");
            cout = false;
            for (let i = 0; i < Menu.grill.length; i++) {
                if (checkName == Menu.grill[i].name) {
                    Menu.grill[i].name = prompt("nhap Tên của món ăn ");
                    Menu.grill[i].price = prompt("nhap gia cua mon an");
                    Menu.grill[i].describe = prompt("nhap mo ta ve mon an");
                    cout = !false;
                    break;
                }
            }
            for (let i = 0; i < Menu.hotPot.length; i++) {
                if (checkName == Menu.hotPot[i].name) {
                    Menu.hotPot[i].name = prompt("nhap Tên của mon ăn ");
                    Menu.hotPot[i].price = prompt("nhap gia cua mon an");
                    Menu.hotPot[i].describe = prompt("nhap mo ta ve mon an");
                    cout = !false;
                    break;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy mon an");
            }
            break;
        case 4:
            console.table(Menu.hotPot)
            console.table(Menu.grill)
            break;
        case 5:
            checkName = prompt("nhap ten mon an can xoa");
            cout = false;
            for (let i = 0; i < Menu.grill.length; i++) {
                if (checkName == Menu.grill[i].name) {
                    console.table(Menu.grill[i]);
                    cout = !false;
                    break;
                }
            }
            for (let i = 0; i < Menu.hotPot.length; i++) {
                if (checkName == Menu.hotPot[i].name) {
                    console.table(Menu.hotPot[i]);
                    cout = !false;
                    break;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy mon an");
            }
            break;
        case 6: 
            console.log("ban da thoat khoi chuong trinh")
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}