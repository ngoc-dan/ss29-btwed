let job = []
let id = 1;
let cout = false;
let choice;
let Menu = `
    ================== MENU ===================

    1. Thêm công việc mới.
    2. Hiển thị tất cả các công việc.
    3. Cập nhật trạng thái công việc theo id.
    4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
    5. Sắp xếp các công việc theo trạng thái công việc.
    6. Thoát
    ============================================
    Lựa chọn của bạn: 
`

while (choice !== 6) {
    choice = +prompt(Menu)
    switch (choice) {
        case 1:
            let newProdust = {
                id: id++,
                name: prompt("nhap Tên của cong viec"),
                describe: prompt("nhap mo ta cong viec"),
                startTime: prompt("nhap thoi gian bat dau lam viec"),
                status: prompt("nhap trang thai cong viec   (true/false)")
            };
            job.push(newProdust);
            break;
        case 2:
            console.table(job);
            break;
        case 3:
            let checkID = +prompt("nhap id cong viec can sua ");
            cout = false;
            for (let i = 0; i < job.length; i++) {
                if (checkID == job[i].id) {
                    job[i].status = !job[i].status;
                    cout = true;
                }
            }
            if (cout == false) {
                console.log("Không tìm thấy cong viec muon cap nhat");
            }
            break;
        case 4:
            let checkStatus = prompt("nhap trang thai can loc");
            for(let i in job){
                if (checkStatus === job[i].status){
                    console.table(job[i]);
                }
            }
            break;
        case 5:
            for(let i in job){
                if (job[i].status=== "true"){
                    console.table(job[i]);
                }
            }
            for(let i in job){
                if (job[i].status === "false"){
                    console.table(job[i]);
                }
            }
            break;
        case 6:
            console.log("ban da thoat khoi chuong trinh")
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
}